const DEFAULT_SERVER = 'https://watch.pwlive.fyi';
const SERVICES = {
  'www.netflix.com': { name: 'netflix', videoId: /\/watch\/(\d+)/ },
  'www.crunchyroll.com': { name: 'crunchyroll', videoId: /\/watch\/([A-Z0-9]+)/i },
};
const STATUS_TEXT = {
  playing: 'In sync · playing',
  paused: 'In sync · paused',
  syncing: 'Syncing…',
  buffering: 'Buffering…',
  blocked: 'Click the video, then the party badge, to sync',
  loading: 'Waiting for the video to load',
  error: 'The video player reported an error',
};

const $ = (id) => document.getElementById(id);
let tab = null;
let service = null;

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
  const nickname = $('nickname').value.trim();
  const serverUrl = $('serverUrl').value.trim() || DEFAULT_SERVER;
  await chrome.storage.sync.set({ nickname, serverUrl });
  const videoId = (new URL(tab.url).pathname.match(service.videoId) || [])[1] || null;
  return { permId, nickname, serverUrl: wsUrl(serverUrl), videoId };
}

function render(state) {
  if (!state.inParty) return show('idle');
  show('active');
  $('syncStatus').textContent = STATUS_TEXT[state.syncStatus] || `Connection: ${state.connection}`;
  $('partyUrl').value = inviteLink(state);
  $('members').replaceChildren(
    ...state.members.map((m) => {
      const li = document.createElement('li');
      li.textContent = m.name;
      if (m.isHost) li.className = 'host';
      return li;
    })
  );
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
  const settings = await chrome.storage.sync.get(['nickname', 'serverUrl']);
  $('nickname').value = settings.nickname || '';
  $('serverUrl').value = settings.serverUrl || DEFAULT_SERVER;

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

  $('leave').onclick = () => run($('leave'), async () => render(await send('leave')));

  $('copy').onclick = async () => {
    await navigator.clipboard.writeText($('partyUrl').value);
    $('copy').textContent = 'Copied';
    setTimeout(() => ($('copy').textContent = 'Copy'), 1200);
  };

  setInterval(async () => {
    if ($('active').hidden) return;
    try {
      render(await send('status'));
    } catch {}
  }, 1500);
}

init();
