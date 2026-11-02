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
};

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
  for (const id of ['unsupported', 'idle', 'active']) $(id).hidden = id !== view;
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
    if (!res) throw new Error('No video found on this page yet. Start playing the title and try again.');
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
  service = tab?.url && SERVICES[new URL(tab.url).hostname];
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
      if (res.hostService && res.hostService !== service.name) showError(`The host is watching on ${res.hostService}.`);
      else if (res.hostVideoId && mine && res.hostVideoId !== mine) showError('The host is on a different title or episode. Open the same one to stay in sync.');
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
