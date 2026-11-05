const DEFAULT_SERVER = 'https://watch.pwlive.fyi';
const COLORS = ['#f5c56b', '#a5b4fc', '#f472b6', '#34d399', '#60a5fa', '#c084fc', '#f87171', '#2dd4bf'];

const SERVICES = {
  'www.netflix.com': {
    name: 'netflix',
    extractId: (u) => (u.pathname.match(/\/watch\/(\d+)/) || [])[1] || null,
  },
  'www.crunchyroll.com': {
    name: 'crunchyroll',
    extractId: (u) => (u.pathname.match(/\/watch\/([A-Z0-9]+)/i) || [])[1] || null,
  },
  'www.disneyplus.com': {
    name: 'disney',
    extractId: (u) => (u.pathname.match(/\/(?:play|video)\/([A-Za-z0-9_-]+)/) || [])[1] || null,
  },
  'www.hulu.com': {
    name: 'hulu',
    extractId: (u) => (u.pathname.match(/\/watch\/([A-Za-z0-9_-]+)/) || [])[1] || null,
  },
  'play.max.com': {
    name: 'max',
    extractId: (u) => (u.pathname.match(/\/(?:video\/)?watch\/([A-Za-z0-9_-]+)/) || [])[1] || null,
  },
  'www.amazon.com': {
    name: 'amazon',
    extractId: (u) => (u.pathname.match(/\/(?:gp\/video\/)?detail\/([A-Za-z0-9_-]+)/) || [])[1] || null,
  },
  'www.primevideo.com': {
    name: 'amazon',
    extractId: (u) => (u.pathname.match(/\/(?:gp\/video\/)?detail\/([A-Za-z0-9_-]+)/) || [])[1] || null,
  },
  'www.paramountplus.com': {
    name: 'paramount',
    extractId: (u) => (u.pathname.match(/\/(?:watch|video)\/([A-Za-z0-9_-]+)/) || [])[1] || null,
  },
  'www.youtube.com': {
    name: 'youtube',
    extractId: (u) =>
      u.pathname === '/watch'
        ? u.searchParams.get('v')
        : (u.pathname.match(/^\/shorts\/([\w-]{11})/) || [])[1] || null,
  },
  'www.movieboxpro.app': {
    name: 'movieboxpro',
    // "movie-<n>", or "tv-<n>" plus "-s<season>e<episode>" when the page was opened by the site's
    // episode deep link. The content script replaces this with the episode actually playing.
    extractId: (u) => {
      const m = u.pathname.match(/^\/(movie|tvshow)\/(\d+)(?:\/|$)/);
      if (!m) return null;
      if (m[1] === 'movie') return `movie-${m[2]}`;
      const season = Number(u.searchParams.get('season'));
      const episode = Number(u.searchParams.get('episode'));
      return season > 0 && episode > 0 ? `tv-${m[2]}-s${season}e${episode}` : `tv-${m[2]}`;
    },
  },
};

SERVICES['movieboxpro.app'] = SERVICES['www.movieboxpro.app'];

// Any other http(s) site, once the user turns it on. The party id is the page URL itself.
const GENERIC = {
  name: 'generic',
  extractId: (u) => {
    const c = new URL(u.href);
    c.searchParams.delete('psSession');
    c.hash = '';
    return c.href;
  },
};

// Embedded frames that are clearly not the video player. Requesting access to them would only add
// noise to the permission prompt.
const NOT_PLAYER_HOSTS = /(^|\.)(doubleclick\.net|googlesyndication\.com|googleadservices\.com|google\.com|gstatic\.com|recaptcha\.net|amazon-adsystem\.com|adnxs\.com|taboola\.com|outbrain\.com|facebook\.com|twitter\.com|x\.com|disqus\.com|cloudflare\.com|hcaptcha\.com)$/i;
const MIN_PLAYER_FRAME = { w: 320, h: 180 };

const STATUS_TEXT = {
  playing: 'In sync · playing',
  paused: 'In sync · paused',
  syncing: 'Syncing…',
  buffering: 'Buffering…',
  blocked: 'Click the video to allow playback sync',
  loading: 'Waiting for the video to load',
  error: 'The video player reported an error',
};

const $ = (id) => document.getElementById(id);
let tab = null;
let service = null;
let selectedColor = COLORS[0];

function show(view) {
  for (const id of ['unsupported', 'genericOff', 'idle', 'active']) $(id).hidden = id !== view;
}

function showError(msg) {
  $('error').textContent = msg || '';
  $('error').hidden = !msg;
}

function wsUrl(httpUrl) {
  const u = new URL(httpUrl);
  u.protocol = u.protocol === 'http:' ? 'ws:' : 'wss:';
  return u.origin;
}

function parseSessionId(input) {
  const s = input.trim();
  return (s.match(/\/join\/([a-f0-9]+)/i) || s.match(/[?&](?:session|psSession)=([a-f0-9]+)/i) || s.match(/^([a-f0-9]+)$/i) || [])[1] || null;
}

function inviteLink(state) {
  try {
    return `${new URL($('serverUrl').value.trim() || DEFAULT_SERVER).origin}/join/${state.sessionId}`;
  } catch {
    return state.partyUrl || state.sessionId;
  }
}

function syncHeaderBar() {
  const nick = $('nickname').value.trim() || 'Guest';
  const icon = $('userIcon').value || '🐻';
  $('headerName').textContent = nick;
  $('headerAvatar').textContent = icon;
  $('headerAvatar').style.background = selectedColor;
}

function renderColorPicker() {
  const wrap = $('colorPicker');
  wrap.replaceChildren(
    ...COLORS.map((col) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'swatch';
      b.style.background = col;
      b.dataset.selected = String(col === selectedColor);
      b.onclick = () => {
        selectedColor = col;
        renderColorPicker();
        saveProfileSettings();
      };
      return b;
    })
  );
}

async function saveProfileSettings() {
  syncHeaderBar();
  const nickname = $('nickname').value.trim();
  const userIcon = $('userIcon').value;
  const badge = $('badge').value;
  const nameColor = selectedColor;
  const serverUrl = $('serverUrl').value.trim() || DEFAULT_SERVER;
  await chrome.storage.sync.set({ nickname, userIcon, badge, nameColor, serverUrl });
  send('updateProfile', { nickname: nickname || 'Guest', userIcon, nameColor, badge }).catch(() => {});
}

async function send(cmd, args) {
  try {
    const res = await chrome.tabs.sendMessage(tab.id, { target: 'party', cmd, args });
    if (!res) {
      throw new Error(
        service === GENERIC
          ? 'No video found yet. Press play, then use "Rescan for player" below if the video is embedded.'
          : 'No video found on this page yet. Start playing the title and try again.'
      );
    }
    if (res.error) throw new Error(res.error);
    return res;
  } catch (e) {
    if (/Receiving end does not exist|message port closed/i.test(e.message)) {
      throw new Error('Party Sync is not running in this tab yet. Reload the page and try again.');
    }
    throw e;
  }
}

async function commonArgs() {
  const { permId } = await chrome.storage.local.get('permId');
  const nickname = $('nickname').value.trim() || 'Guest';
  const userIcon = $('userIcon').value || '🐻';
  const badge = $('badge').value;
  const nameColor = selectedColor;
  const controlLock = $('controlLock').checked;
  const reactionsDisabled = $('reactionsDisabled').checked;
  const serverUrl = $('serverUrl').value.trim() || DEFAULT_SERVER;
  await chrome.storage.sync.set({ nickname, userIcon, badge, nameColor, controlLock, reactionsDisabled, serverUrl });
  const videoId = service.extractId(new URL(tab.url));
  return {
    permId,
    nickname,
    userIcon,
    badge,
    nameColor,
    controlLock,
    reactionsDisabled,
    serverUrl: wsUrl(serverUrl),
    videoId,
  };
}

function render(state) {
  if (!state.inParty) return show('idle');
  show('active');
  $('syncStatus').textContent = `${state.members?.length || 1} watching · ${STATUS_TEXT[state.syncStatus] || `Connection: ${state.connection}`}`;
  $('partyUrl').value = inviteLink(state);
  $('showChatToggle').checked = state.showChat !== false;

  const hostControls = $('hostControls');
  hostControls.hidden = !state.isHost;
  if (state.isHost) {
    $('activeControlLock').checked = !!state.controlLock;
    $('activeReactionsDisabled').checked = !!state.reactionsDisabled;
  }
}

async function run(button, fn) {
  showError('');
  button.disabled = true;
  try {
    await fn();
  } catch (e) {
    showError(e.message);
  } finally {
    button.disabled = false;
  }
}

// Lists embedded frames big enough to be a player, in every frame the extension can already reach
// (the top page through activeTab, plus any origins granted earlier).
async function discoverPlayerOrigins(site) {
  const listFrames = () =>
    [...document.querySelectorAll('iframe')].map((f) => {
      const r = f.getBoundingClientRect();
      return { src: f.src, w: r.width, h: r.height };
    });
  let results = [];
  try {
    results = await chrome.scripting.executeScript({ target: { tabId: tab.id, allFrames: true }, func: listFrames });
  } catch {
    try {
      results = await chrome.scripting.executeScript({ target: { tabId: tab.id }, func: listFrames });
    } catch {
      return [];
    }
  }
  const origins = new Set();
  for (const f of results.flatMap((r) => r.result || [])) {
    let u;
    try {
      u = new URL(f.src);
    } catch {
      continue;
    }
    if (!/^https?:$/.test(u.protocol) || u.origin === site) continue;
    if (f.w < MIN_PLAYER_FRAME.w || f.h < MIN_PLAYER_FRAME.h) continue;
    if (NOT_PLAYER_HOSTS.test(u.hostname) || SERVICES[u.hostname]) continue;
    origins.add(u.origin);
  }
  return [...origins];
}

async function genericSiteOrigins(site) {
  const { genericSites = {} } = await chrome.storage.local.get('genericSites');
  if (!genericSites[site]) return null;
  const granted = await chrome.permissions.contains({ origins: [`${site}/*`] });
  return granted ? genericSites[site] : null;
}

async function setUpGeneric(url) {
  const site = url.origin;
  $('genericHost').textContent = url.hostname;
  const enabled = await genericSiteOrigins(site);
  const found = await discoverPlayerOrigins(site);

  // Both handlers call permissions.request first thing: the browser only shows the prompt while the
  // click is still being handled, so the frames are found before the click, not after it.
  const grant = async (origins) => {
    const ok = await chrome.permissions.request({ origins: origins.map((o) => `${o}/*`) });
    if (!ok) throw new Error('Access was not granted, so Wooper\'s Party can\'t run on this site.');
    const res = await chrome.runtime.sendMessage({ type: 'generic-enable', site, origins });
    if (res?.error) throw new Error(res.error);
    await chrome.tabs.reload(tab.id);
    window.close();
  };

  $('genericEnable').onclick = () => run($('genericEnable'), () => grant([site, ...found]));
  $('genericRescan').onclick = () =>
    run($('genericRescan'), async () => {
      const fresh = found.filter((o) => !enabled?.includes(o));
      if (!fresh.length) throw new Error('No new embedded player found. Start the video, reopen this popup and try again.');
      await grant(fresh);
    });
  $('genericDisable').onclick = () =>
    run($('genericDisable'), async () => {
      await send('leave').catch(() => {});
      await chrome.runtime.sendMessage({ type: 'generic-disable', site });
      await chrome.tabs.reload(tab.id);
      window.close();
    });
  return !!enabled;
}

async function init() {
  const settings = await chrome.storage.sync.get([
    'nickname',
    'userIcon',
    'badge',
    'nameColor',
    'controlLock',
    'reactionsDisabled',
    'serverUrl',
  ]);
  $('nickname').value = settings.nickname || '';
  if (settings.userIcon) $('userIcon').value = settings.userIcon;
  if (settings.badge !== undefined) $('badge').value = settings.badge;
  if (settings.nameColor && COLORS.includes(settings.nameColor)) selectedColor = settings.nameColor;
  $('controlLock').checked = !!settings.controlLock;
  $('reactionsDisabled').checked = !!settings.reactionsDisabled;
  $('serverUrl').value = settings.serverUrl || DEFAULT_SERVER;
  renderColorPicker();
  syncHeaderBar();

  $('gearBtn').onclick = () => {
    $('settingsDrawer').hidden = !$('settingsDrawer').hidden;
  };
  for (const id of ['nickname', 'userIcon', 'badge', 'serverUrl']) {
    $(id).addEventListener('change', saveProfileSettings);
  }
  $('nickname').addEventListener('input', syncHeaderBar);

  [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = tab?.url ? new URL(tab.url) : null;
  service = url && SERVICES[url.hostname];
  if (!service && url && /^https?:$/.test(url.protocol)) {
    service = GENERIC;
    if (!(await setUpGeneric(url))) return show('genericOff');
    $('genericTools').hidden = false;
  }
  if (!service) return show('unsupported');

  try {
    render(await send('status'));
  } catch (e) {
    show('idle');
    showError(e.message);
  }

  $('create').onclick = () =>
    run($('create'), async () => {
      const args = await commonArgs();
      if (!args.videoId) throw new Error('Open a specific episode or film first.');
      render(await send('create', args));
    });

  $('join').onclick = () =>
    run($('join'), async () => {
      const sessionId = parseSessionId($('joinInput').value);
      if (!sessionId) throw new Error('Paste an invite link or party ID.');
      const args = await commonArgs();
      const res = await send('join', { ...args, sessionId });
      render(res);
      const mine = args.videoId;
      // MovieBox Pro ids nest ("tv-1" is the show page, "tv-1-s2e3" an episode of it); the content
      // script takes the viewer to the host's episode itself, so only a different title is a mismatch.
      const sameTitle = (a, b) => a === b || (service.name === 'movieboxpro' && (a.startsWith(`${b}-`) || b.startsWith(`${a}-`)));
      if (res.hostService && res.hostService !== service.name) showError(`The host is watching on ${res.hostService}.`);
      else if (service === GENERIC && res.hostVideoId && res.hostVideoId !== mine) {
        let where = res.hostVideoId;
        try {
          const h = new URL(res.hostVideoId);
          where = h.hostname + h.pathname;
        } catch {}
        showError(`The host is on a different page: ${where}. Open the same page to stay in sync.`);
      }
      else if (res.hostVideoId && mine && !sameTitle(res.hostVideoId, mine)) {
        showError(
          service.name === 'movieboxpro'
            ? 'The host is on a different title. Taking you there…'
            : 'The host is on a different title or episode. Open the same one to stay in sync.'
        );
      }
    });

  $('showChatToggle').onchange = async () => {
    try {
      render(await send('setShowChat', { showChat: $('showChatToggle').checked }));
    } catch (e) {
      showError(e.message);
    }
  };

  const updateHostSettings = async () => {
    try {
      const controlLock = $('activeControlLock').checked;
      const reactionsDisabled = $('activeReactionsDisabled').checked;
      await chrome.storage.sync.set({ controlLock, reactionsDisabled });
      render(await send('setPartySettings', { controlLock, reactionsDisabled }));
    } catch (e) {
      showError(e.message);
    }
  };
  $('activeControlLock').onchange = updateHostSettings;
  $('activeReactionsDisabled').onchange = updateHostSettings;

  $('leave').onclick = () => run($('leave'), async () => render(await send('leave')));

  $('copy').onclick = async () => {
    await navigator.clipboard.writeText($('partyUrl').value);
    $('copy').style.background = '#24d154';
    setTimeout(() => ($('copy').style.background = ''), 1000);
  };

  setInterval(async () => {
    if ($('active').hidden) return;
    try {
      render(await send('status'));
    } catch {}
  }, 1500);
}

init();
