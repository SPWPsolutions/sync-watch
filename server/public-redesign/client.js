/**
 * Party Sync — web client wiring.
 *
 * The real-time logic lives in three backend-agnostic modules that are already
 * proven by the server's QA suite:
 *   - js/connection.js  PartySocket: JSON-over-WebSocket, NTP clock, reconnect.
 *   - js/player.js      Player: one media surface over <video> + YouTube IFrame.
 *   - js/sync.js        SyncController: drift correction + echo suppression.
 *
 * This file is only the view layer: it maps the glass-morphism DOM to those
 * modules and to the protocol pushes (PROTOCOL_SPEC.md §2–6). UI components
 * (Icons, Toast, Modal, QR, PartyAuth) are loaded as window globals beforehand.
 */

import { PartySocket } from './js/connection.js';
import { Player, parseYouTubeId, sourceFor } from './js/player.js';
import { SyncController } from './js/sync.js';

// ====================================================================== setup
const params = new URLSearchParams(location.search);
const DEBUG = params.has('debug');
const DRIFT_WARN_MS = 2500;

const $ = (id) => document.getElementById(id);
const Icons = window.Icons || {};
const Toast = window.Toast || { show() {}, success() {}, error() {}, info() {} };
const Modal = window.Modal;
const QR = window.QR;

// ---- element cache
const el = {};
for (const id of [
  'conn', 'connText', 'accountBtn', 'accountAvatar', 'accountLabel',
  'lobby', 'src', 'srcBadge', 'file', 'nick', 'create', 'createError',
  'sid', 'join', 'joinError', 'joinSub', 'invitePreview', 'posterLogo', 'brandMark',
  'party', 'playerWrap', 'v', 'yt', 'spinner', 'unmute',
  'overlay', 'overlayIcon', 'overlayTitle', 'overlayText', 'overlayActions',
  'sync', 'syncText', 'sidBadge', 'resync', 'settingsBtn', 'leave', 'devlog', 'log',
  'chatBadge', 'peopleBadge', 'link', 'copyLink', 'shareRow', 'qr',
  'chatLog', 'typing', 'chatForm', 'chat', 'sendChat', 'people',
  'tabChatIcon', 'tabPeopleIcon',
  'authModal', 'segLogin', 'segSignup', 'authForm', 'email', 'password',
  'authSubmit', 'authNote', 'authSignedOut', 'authSignedIn', 'authEmail', 'logout',
  'settingsModal', 'settingsForm', 'nick2', 'src2', 'srcField2', 'settingsError', 'settingsSave',
]) el[id] = $(id);

// ---- tiny XSS-safe DOM builder (all text goes through text nodes)
function h(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, val] of Object.entries(props)) {
    if (k === 'class') node.className = val;
    else if (k === 'dataset') Object.assign(node.dataset, val);
    else if (k.startsWith('on') && typeof val === 'function') node.addEventListener(k.slice(2).toLowerCase(), val);
    else if (val === true) node.setAttribute(k, '');
    else if (val != null && val !== false) node.setAttribute(k, val);
  }
  for (const c of children.flat()) if (c != null && c !== false) node.append(c.nodeType ? c : document.createTextNode(String(c)));
  return node;
}
const iconEl = (name) => {
  const span = document.createElement('span');
  span.style.display = 'inline-flex';
  span.innerHTML = Icons[name] || ''; // Icons.* are our own static, trusted SVG strings
  return span.firstChild || span;
};

// ---- storage (per-viewer convenience only)
const storage = {
  get(k, d = null) { try { return localStorage.getItem(`ps:${k}`) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(`ps:${k}`, v); } catch { /* private mode */ } },
};
const randomId = (n) => Array.from(crypto.getRandomValues(new Uint8Array(n)), (b) => b.toString(16).padStart(2, '0')).join('').slice(0, n);

// permId: stable identity across reconnects (socket userId changes each time)
let permId = storage.get('permId');
if (!permId) { permId = randomId(16); storage.set('permId', permId); }

// ====================================================================== state
const state = {
  view: 'lobby',
  nickname: storage.get('nickname', ''),
  authToken: null,
  session: null,        // { sessionId, videoId, videoService, reactionsDisabled }
  users: [],
  names: new Map(),     // userId|permId -> nickname
  typing: new Set(),
  buffering: new Set(),
  isHost: false,
  localFile: null,
  objectUrl: null,
  unread: 0,
  activity: null,       // { text, until }
  seenMessages: new Set(),
  pending: new Map(),   // messageId -> body (optimistic sends awaiting ack)
  activeTab: 'chat',
};

const wsUrl = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}`;
const socket = new PartySocket({ url: wsUrl, debug: DEBUG });
const player = new Player({ video: el.v, ytHost: el.yt });
const sync = new SyncController(player, socket);

// Hydrate brand/tab glyphs
el.brandMark && (el.brandMark.innerHTML = Icons.logo || '');
el.posterLogo && (el.posterLogo.innerHTML = Icons.logo || '');
el.tabChatIcon && (el.tabChatIcon.innerHTML = Icons.chat || '');
el.tabPeopleIcon && (el.tabPeopleIcon.innerHTML = Icons.users || '');
el.settingsBtn && el.settingsBtn.append(iconEl('settings'));
el.copyLink && el.copyLink.append(iconEl('copy'));
el.sendChat && el.sendChat.append(iconEl('send'));
if (el.nick) el.nick.value = state.nickname;
if (DEBUG) { el.devlog.hidden = false; window.partySync = { socket, sync, player, state }; }

Modal && Modal.bind(el.authModal);
Modal && Modal.bind(el.settingsModal);

// ====================================================================== helpers
function resolveName(userId, pId) {
  return (
    (userId && state.names.get(userId)) ||
    (pId && state.names.get(pId)) ||
    ((userId === socket.userId || pId === permId) && state.nickname) ||
    `Guest ${String(pId || userId || '????').slice(0, 4)}`
  );
}
const userSettings = () => ({ userNickname: state.nickname || undefined });

function setNickname(name) {
  state.nickname = String(name || '').trim().slice(0, 32);
  storage.set('nickname', state.nickname);
  if (el.nick) el.nick.value = state.nickname;
}

function parseSessionId(input) {
  const s = String(input || '').trim();
  if (!s) return null;
  const m = s.match(/(?:\/join\/|[?&]session=)([a-f0-9]{6,64})/i) || s.match(/^([a-f0-9]{6,64})$/i);
  return m ? m[1].toLowerCase() : null;
}
function isHttpUrl(s) { try { return ['http:', 'https:'].includes(new URL(s).protocol); } catch { return false; } }
function sourceFromUrl(url) {
  const yt = parseYouTubeId(url);
  if (yt) return { videoId: yt, videoService: 'youtube' };
  if (isHttpUrl(url)) return { videoId: url, videoService: 'html5' };
  return null;
}
function describeSource(videoId, videoService) {
  const src = sourceFor(videoId, videoService);
  if (src.kind === 'none') return 'No video';
  if (src.kind === 'youtube') return `YouTube video (${src.id})`;
  if (src.kind === 'local') return `Local file: ${src.name}`;
  try { const u = new URL(src.url); return decodeURIComponent(u.pathname.split('/').pop() || u.hostname); } catch { return src.url; }
}
function formatMedia(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  const hh = Math.floor(s / 3600), mm = Math.floor((s % 3600) / 60), ss = String(s % 60).padStart(2, '0');
  return hh ? `${hh}:${String(mm).padStart(2, '0')}:${ss}` : `${mm}:${ss}`;
}
const formatBytes = (n) => (n > 1e9 ? `${(n / 1e9).toFixed(1)} GB` : `${Math.max(1, Math.round(n / 1e6))} MB`);
function friendlyError(err) {
  const msg = err?.message || String(err);
  if (/does not exist|has ended|session expired|not found/i.test(msg)) return 'This party has ended or the link is wrong. Check the link or start a new party.';
  if (/authentication required/i.test(msg)) return 'This server requires an account. Log in to continue.';
  return msg;
}
function fail(errEl, message, focusEl) { if (errEl) errEl.textContent = message; focusEl?.focus(); }
function setBusy(btn, busy) {
  if (!btn) return;
  btn.classList.toggle('is-loading', busy);
  btn.disabled = busy;
}

// ====================================================================== views
function showView(view) {
  state.view = view;
  el.lobby.classList.toggle('hidden', view !== 'lobby');
  el.party.classList.toggle('hidden', view !== 'party');
  document.body.dataset.view = view;
  if (view !== 'party') document.title = 'Party Sync — Watch together';
}

// ====================================================================== connection indicator
const CONN_TEXT = {
  idle: 'Offline', connecting: 'Connecting…', open: 'Connected',
  reconnecting: 'Reconnecting…', offline: 'You’re offline', closed: 'Disconnected',
};
function renderConn() {
  const s = socket.status;
  let q = 'off';
  if (s === 'open') q = socket.rtt == null ? 'good' : socket.rtt < 150 ? 'good' : socket.rtt < 400 ? 'ok' : 'bad';
  el.conn.dataset.q = q;
  el.connText.textContent = CONN_TEXT[s] || s;
  el.conn.title = s === 'open' && socket.rtt != null
    ? `Latency ${Math.round(socket.rtt)} ms · clock offset ${Math.round(socket.clockOffset)} ms`
    : 'Connection quality';

  const open = s === 'open';
  el.chat.disabled = !open;
  el.sendChat.disabled = !open;
  el.chat.placeholder = open ? 'Say something…' : 'Reconnecting…';
  renderSyncStatus();
}
socket.on('status', renderConn);
socket.on('clock', renderConn);
socket.on('ready', async ({ reconnected }) => {
  sendAuth();
  if (reconnected && state.session) await rejoin();
});
function sendAuth() { if (state.authToken) socket.fire('authenticateUser', { firebaseToken: state.authToken }); }

// ====================================================================== lobby: create
if (el.nick) el.nick.addEventListener('change', () => setNickname(el.nick.value));

function renderSrcBadge() {
  const url = el.src.value.trim();
  const src = url && sourceFromUrl(url);
  if (!url) { el.srcBadge.textContent = ''; return; }
  el.srcBadge.textContent = src?.videoService === 'youtube' ? 'YouTube video detected'
    : src ? 'Direct video link' : 'Enter a full link starting with https://';
}
el.src.addEventListener('input', () => { el.createError.textContent = ''; renderSrcBadge(); });
el.file.addEventListener('change', () => { el.createError.textContent = ''; });

el.create.addEventListener('click', async () => {
  el.createError.textContent = '';
  setNickname(el.nick.value);

  let source;
  const file = el.file.files[0];
  if (file) {
    if (file.type && !file.type.startsWith('video/')) return fail(el.createError, 'That file isn’t a video.', el.file);
    setLocalFile(file);
    source = { videoId: `local:${file.name}`, videoService: 'local' };
  } else {
    source = sourceFromUrl(el.src.value.trim());
    if (!source) return fail(el.createError, 'Enter a YouTube link or a full video link starting with https://', el.src);
  }

  setBusy(el.create, true);
  try {
    await socket.ready();
    const snap = await socket.request('createSession', {
      ...source, videoType: 'video', serviceDomain: location.host,
      controlLock: false, reactionsDisabled: false, permId, userSettings: userSettings(),
    });
    enterParty(snap, { role: 'host' });
  } catch (err) {
    fail(el.createError, friendlyError(err));
  } finally {
    setBusy(el.create, false);
  }
});

// ====================================================================== lobby: join
el.join.addEventListener('click', () => joinParty(el.sid.value));

async function joinParty(input, { button = el.join, errorEl = el.joinError } = {}) {
  if (errorEl) errorEl.textContent = '';
  if (state.view === 'lobby') setNickname(el.nick.value);
  const sessionId = parseSessionId(input);
  if (!sessionId) return fail(errorEl, 'That doesn’t look like an invite link or party code.', el.sid);

  setBusy(button, true);
  try {
    await socket.ready();
    const snap = await socket.request('joinSession', { sessionId, permId, userSettings: userSettings() });
    enterParty(snap, { role: 'guest' });
  } catch (err) {
    fail(el.joinError, friendlyError(err));
  } finally {
    setBusy(button, false);
  }
}

// Live preview of the party behind an invite link
let previewTimer, previewSeq = 0;
el.sid.addEventListener('input', () => {
  el.joinError.textContent = '';
  clearTimeout(previewTimer);
  previewTimer = setTimeout(() => previewInvite(parseSessionId(el.sid.value)), 350);
});
async function fetchSessionInfo(sessionId) {
  const res = await fetch(`/api/sessions/${encodeURIComponent(sessionId)}`, { headers: { Accept: 'application/json' } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
async function previewInvite(sessionId) {
  const seq = ++previewSeq;
  const box = el.invitePreview;
  if (!sessionId) return box.classList.add('hidden');
  try {
    const s = await fetchSessionInfo(sessionId);
    if (seq !== previewSeq) return;
    box.replaceChildren();
    if (!s) {
      box.dataset.state = 'missing';
      box.append(h('span', {}, 'This party has ended or doesn’t exist. Check the link or start a new party.'));
    } else {
      const count = s.userList?.length || 0;
      const hostName = s.userList?.find((u) => u.isHost)?.userSettings?.userNickname;
      box.dataset.state = 'ok';
      box.append(
        h('span', { class: 'live-dot', 'aria-hidden': 'true' }),
        h('span', {},
          h('strong', {}, `${count} watching`),
          hostName ? ` · hosted by ${hostName}` : '',
          h('br'),
          h('span', { class: 'muted' }, describeSource(s.videoId, s.videoService)),
        ),
      );
    }
    box.classList.remove('hidden');
  } catch {
    if (seq === previewSeq) box.classList.add('hidden');
  }
}

// ====================================================================== party lifecycle
function enterParty(snap, { role }) {
  state.session = {
    sessionId: snap.sessionId, videoId: snap.videoId, videoService: snap.videoService,
    reactionsDisabled: String(snap.reactionsDisabled) === 'true',
  };
  state.typing.clear();
  state.buffering.clear();
  state.unread = 0;
  state.seenMessages.clear();
  state.pending.clear();
  applyUserList(snap.userList || [], { quiet: true });

  resetChat(snap.messages || []);
  updateBadges();
  loadSource(snap);
  sync.start(snap);

  const link = `${location.origin}/join/${snap.sessionId}`;
  el.link.textContent = link;
  el.link.dataset.url = link;
  el.sidBadge.textContent = snap.sessionId.slice(0, 8);
  renderShareRow(link);
  QR && QR.render(el.qr, link);
  history.replaceState(null, '', `/?session=${snap.sessionId}${DEBUG ? '&debug' : ''}`);

  showView('party');
  selectTab('chat');
  renderConn();

  if (role === 'host') { selectTab('invite'); Toast.success('Party created — share the link to invite friends.'); }
  else Toast.success('You joined the party.');
}

function exitParty({ notify = true } = {}) {
  if (!state.session) return;
  if (notify) socket.request('leaveSession', {}, { timeout: 2000 }).catch(() => {});
  sync.stop();
  stopTyping();
  Modal && [el.authModal, el.settingsModal].forEach((m) => Modal.close(m));
  state.session = null;
  state.users = [];
  state.isHost = false;
  player.load({ kind: 'none' });
  hideOverlay();
  el.unmute.classList.add('hidden');
  history.replaceState(null, '', DEBUG ? '/?debug' : '/');
  showView('lobby');
  Toast.info('You left the party.');
}

el.leave.addEventListener('click', () => exitParty());
window.addEventListener('pagehide', () => state.session && socket.fire('leaveSession'));

async function rejoin() {
  const { sessionId } = state.session;
  try {
    const snap = await socket.request('reboot', {
      sessionId, permId, userSettings: userSettings(),
      videoId: state.session.videoId, videoService: state.session.videoService,
    });
    if (state.session?.sessionId !== sessionId) return;
    applyUserList(snap.userList || [], { quiet: true });
    mergeMessages(snap.messages || []);
    if (snap.videoId !== state.session.videoId) loadSource(snap);
    sync.applyRemote(snap);
    Toast.success('Reconnected — back in sync.');
  } catch (err) {
    if (err.timeout || /Connection lost|Not connected/.test(err.message)) return; // next 'ready' retries
    exitParty({ notify: false });
    Toast.error('The party has ended.');
  } finally {
    renderSyncStatus();
  }
}

// ====================================================================== video source + overlay
function setLocalFile(file) {
  if (state.objectUrl) URL.revokeObjectURL(state.objectUrl);
  state.localFile = file;
  state.objectUrl = URL.createObjectURL(file);
}
function loadSource({ videoId, videoService }) {
  if (state.session) Object.assign(state.session, { videoId, videoService });
  const src = sourceFor(videoId, videoService);
  if (src.kind === 'local') {
    player.load(state.localFile && state.localFile.name === src.name ? { kind: 'html5', url: state.objectUrl } : { kind: 'none' });
  } else {
    player.load(src);
  }
  el.playerWrap.dataset.empty = String(!player.hasSource);
  renderOverlay();
}
player.addEventListener('error', renderOverlay);
player.addEventListener('loadedmetadata', () => { el.playerWrap.dataset.empty = 'false'; renderOverlay(); });

function renderOverlay() {
  renderSpinner();
  if (!state.session) return hideOverlay();
  const src = sourceFor(state.session.videoId, state.session.videoService);

  if (src.kind === 'local' && !player.hasSource) {
    const input = h('input', { type: 'file', accept: 'video/*', class: 'sr-only', id: 'overlayFile' });
    input.addEventListener('change', () => {
      const f = input.files[0];
      if (!f) return;
      if (f.name !== src.name) Toast.info(`You picked “${f.name}” — the party is playing “${src.name}”. Using it anyway.`);
      setLocalFile(f);
      player.load({ kind: 'html5', url: state.objectUrl });
      el.playerWrap.dataset.empty = 'false';
      renderOverlay();
    });
    return showOverlay({
      icon: 'enter', title: 'Pick your copy of the video',
      text: `The host is playing a file from their device: “${src.name}”. Choose the same file on yours to watch along.`,
      actions: [h('label', { class: 'btn btn--primary', for: 'overlayFile' }, 'Choose file'), input],
    });
  }

  if (player.error) {
    const actions = [h('button', { class: 'btn btn--secondary', type: 'button', onclick: () => { player.retry(); renderOverlay(); } }, 'Retry')];
    if (src.kind === 'youtube') actions.push(h('a', { class: 'btn btn--secondary', href: `https://www.youtube.com/watch?v=${encodeURIComponent(src.id)}`, target: '_blank', rel: 'noopener noreferrer' }, 'Open on YouTube'));
    if (state.isHost) actions.push(h('button', { class: 'btn btn--primary', type: 'button', onclick: () => Modal.open(el.settingsModal) }, 'Change video'));
    return showOverlay({
      icon: 'x', title: 'This video couldn’t be played',
      text: src.kind === 'youtube' ? player.error.message : 'Check that the link points directly to a video file (MP4 or WebM) that allows playback on other sites.',
      actions,
    });
  }

  if (sync.blocked) {
    return showOverlay({
      icon: 'enter', title: 'The party is playing',
      text: 'Your browser needs a tap before it plays video with sound.',
      actions: [h('button', { class: 'btn btn--primary btn--lg', type: 'button', onclick: () => { player.muted = false; sync.resync(); } }, 'Tap to start')],
    });
  }
  hideOverlay();
}
function showOverlay({ icon, title, text, actions = [] }) {
  el.overlayIcon.replaceChildren(iconEl(icon));
  el.overlayTitle.textContent = title;
  el.overlayText.textContent = text;
  el.overlayActions.replaceChildren(...actions);
  el.overlay.classList.remove('hidden');
  renderSpinner();
}
function hideOverlay() { el.overlay.classList.add('hidden'); renderSpinner(); }
function renderSpinner() {
  const busy = !!state.session && player.hasSource && !player.error && (sync.status === 'loading' || sync.status === 'buffering');
  el.spinner.classList.toggle('hidden', !busy || !el.overlay.classList.contains('hidden'));
}

sync.on('blocked', renderOverlay);
sync.on('muted', (muted) => el.unmute.classList.toggle('hidden', !muted));
el.unmute.addEventListener('click', () => { player.muted = false; el.unmute.classList.add('hidden'); });
sync.on('error', (err) => { if (!err.timeout) Toast.error(`Couldn’t sync that change: ${err.message}`); });

// ====================================================================== sync status strip
function renderSyncStatus() {
  renderSpinner();
  if (!state.session) { el.sync.dataset.state = 'idle'; el.syncText.textContent = 'Idle'; return; }
  let s = sync.status, dataState = 'synced', text;
  const others = state.users.filter((u) => u.userId !== socket.userId).length;
  const othersBuffering = [...state.buffering].filter((id) => id !== socket.userId);
  const drift = sync.driftMs();

  if (socket.status !== 'open') { dataState = 'idle'; text = 'Reconnecting…'; }
  else if (s === 'error') { dataState = 'idle'; text = 'Video unavailable'; }
  else if (s === 'loading') { dataState = 'buffering'; text = player.hasSource ? 'Loading video…' : 'Waiting for a video source'; }
  else if (s === 'blocked') { dataState = 'seeking'; text = 'Tap the player to start watching'; }
  else if (Math.abs(drift) >= DRIFT_WARN_MS && (s === 'playing' || s === 'buffering')) { dataState = 'seeking'; text = `You’re ${Math.round(Math.abs(drift) / 1000)}s ${drift < 0 ? 'behind' : 'ahead'}`; }
  else if (s === 'buffering') { dataState = 'buffering'; text = 'Buffering…'; }
  else if (s === 'syncing') { dataState = 'seeking'; text = 'Catching up…'; }
  else if (state.activity && Date.now() < state.activity.until) { dataState = 'synced'; text = state.activity.text; }
  else if (othersBuffering.length && s === 'playing') {
    dataState = 'buffering';
    const names = othersBuffering.map((id) => resolveName(id));
    text = names.length === 1 ? `Waiting for ${names[0]} to buffer` : `Waiting for ${names.length} people to buffer`;
  }
  else if (s === 'playing') { dataState = 'synced'; text = others ? `In sync with ${others} ${others === 1 ? 'watcher' : 'watchers'}` : 'Playing · invite friends to watch along'; }
  else { dataState = 'synced'; text = 'Paused · everyone’s in sync'; }

  el.sync.dataset.state = dataState;
  if (el.syncText.textContent !== text) el.syncText.textContent = text;
  el.resync.classList.toggle('btn--attention', dataState === 'seeking' && Math.abs(drift) >= DRIFT_WARN_MS);
}
sync.on('status', () => { renderSyncStatus(); renderOverlay(); });
setInterval(() => state.session && renderSyncStatus(), 1000);
el.resync.addEventListener('click', () => { sync.resync(); showActivity('Resynced to the party'); });
function showActivity(text) { state.activity = { text, until: Date.now() + 3000 }; renderSyncStatus(); }

// ====================================================================== server pushes
socket.on('updateSession', (data) => {
  if (!state.session || !data) return;
  const prev = sync.auth;
  sync.applyRemote(data);
  if (!data.userId || data.userId === socket.userId) return;
  const actor = state.users.find((u) => u.userId === data.userId);
  const who = actor?.isHost ? 'The host' : resolveName(data.userId);
  const at = formatMedia((Number(data.lastKnownTime) || 0) / 1000);
  if (prev && prev.state !== data.state) showActivity(`${who} ${data.state === 'playing' ? 'pressed play' : 'paused'} at ${at}`);
  else showActivity(`${who} jumped to ${at}`);
});
socket.on('jumpToNextEpisode', (data) => {
  if (!state.session || !data) return;
  loadSource({ videoId: data.videoId || data.nextEpisode, videoService: data.videoService || 'html5' });
  sync.applyRemote({ state: 'paused', lastKnownTime: 0, lastKnownTimeUpdatedAt: socket.serverNow() });
  Toast.info(`${resolveName(data.userId)} changed the video.`);
});
socket.on('userList', (list) => { if (state.session && Array.isArray(list)) applyUserList(list); });
socket.on('updateSettings', (data) => {
  if (!state.session || !data) return;
  const u = state.users.find((x) => x.userId === data.userId || (data.permId && x.permId === data.permId));
  if (u) u.userSettings = data.userSettings;
  applyUserList(state.users, { quiet: true });
});
socket.on('sendMessage', onChatMessage);
socket.on('sendGIF', onChatMessage);
socket.on('setTypingPresence', (data) => {
  state.typing = new Set((data?.usersTyping || []).filter((id) => id !== socket.userId));
  renderTyping();
  renderPeople();
});
socket.on('setBufferingPresence', (data) => {
  state.buffering = new Set(data?.usersBuffering || []);
  renderPeople();
  renderSyncStatus();
});

function applyUserList(list, { quiet = false } = {}) {
  state.users = list;
  for (const u of list) {
    const nick = u.userSettings?.userNickname;
    if (!nick) continue;
    state.names.set(u.userId, nick);
    if (u.permId) state.names.set(u.permId, nick);
  }
  const wasHost = state.isHost;
  state.isHost = !!list.find((u) => u.userId === socket.userId)?.isHost;
  if (!quiet && state.isHost && !wasHost) Toast.info('You’re now the host.');
  el.peopleBadge.textContent = String(list.length);
  el.peopleBadge.setAttribute('aria-label', `${list.length} ${list.length === 1 ? 'person' : 'people'}`);
  renderPeople();
  renderSyncStatus();
}

// ====================================================================== people panel
function renderPeople() {
  if (!state.session) return;
  const me = socket.userId;
  const sorted = [...state.users].sort((a, b) => {
    if (a.userId === me) return -1; if (b.userId === me) return 1;
    return (b.isHost ? 1 : 0) - (a.isHost ? 1 : 0);
  });
  el.people.replaceChildren(...sorted.map((u) => {
    const name = resolveName(u.userId, u.permId);
    const isMe = u.userId === me;
    const buffering = state.buffering.has(u.userId);
    const typing = state.typing.has(u.userId);
    const presenceClass = buffering ? 'presence presence--buffering' : typing ? 'presence presence--typing' : 'presence';
    const status = buffering ? 'Buffering' : typing ? 'Typing…' : null;
    return h('div', { class: 'person' },
      h('div', { class: 'person__avatar', dataset: { color: colorFor(u.permId || u.userId) } },
        initials(name),
        h('span', { class: presenceClass }),
      ),
      h('span', { class: 'person__name' }, name + (isMe ? ' (you)' : '')),
      status ? h('span', { class: 'person__status' }, status) : null,
      u.isHost ? h('span', { class: 'person__tag' }, 'Host') : null,
    );
  }));
  // tint avatars
  for (const a of el.people.querySelectorAll('.person__avatar[data-color]')) a.style.background = a.dataset.color;
}
function initials(name) {
  const parts = String(name).trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() || '').join('') || '?';
}
function colorFor(key) {
  let hash = 0;
  for (const ch of String(key || '')) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  const hue = hash % 360;
  return `linear-gradient(135deg, hsl(${hue} 70% 55%), hsl(${(hue + 40) % 360} 70% 45%))`;
}

// ====================================================================== chat
function chatVisible() { return state.activeTab === 'chat' && !document.hidden; }

function resetChat(messages) {
  state.seenMessages.clear();
  el.chatLog.replaceChildren();
  for (const m of messages) addMessage(m, { quiet: true });
  scrollChatToEnd();
}
function mergeMessages(messages) { for (const m of messages) addMessage(m, { quiet: true }); scrollChatToEnd(); }

function onChatMessage(msg) {
  if (!state.session || !msg) return;
  const mine = isMine(msg);
  // Confirm an optimistic send when the server echoes our messageId back.
  if (mine && msg.messageId && state.pending.has(msg.messageId)) {
    markSent(msg.messageId);
    return;
  }
  const added = addMessage(msg);
  scrollChatToEnd();
  if (!added || msg.isSystemMessage || mine) return;
  if (!chatVisible()) { state.unread++; updateBadges(); }
}
function isMine(msg) { return msg.userId === socket.userId || (msg.permId && msg.permId === permId); }

function addMessage(msg, { quiet = false } = {}) {
  const key = msg.messageId || `${msg.userId}:${msg.timestamp}:${msg.body}`;
  if (state.seenMessages.has(key)) return false;
  state.seenMessages.add(key);

  if (msg.isSystemMessage) {
    el.chatLog.append(h('div', { class: 'msg msg--system' }, h('div', { class: 'msg__body' }, String(msg.body || ''))));
    return true;
  }
  const name = resolveName(msg.userId, msg.permId);
  const when = msg.timestamp ? new Date(Number(msg.timestamp)) : new Date();
  const node = h('div', { class: 'msg', dataset: msg.messageId ? { mid: msg.messageId } : {} },
    h('div', { class: 'msg__meta' }, h('b', {}, name), ` · ${when.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`),
    renderBody(msg.body),
  );
  el.chatLog.append(node);
  return true;
}
// Linkify URLs safely: text via text nodes, links built as elements (no innerHTML of user data).
function renderBody(body) {
  const wrap = h('div', { class: 'msg__body' });
  const text = String(body || '');
  const re = /\bhttps?:\/\/[^\s<]+/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) wrap.append(document.createTextNode(text.slice(last, m.index)));
    wrap.append(h('a', { href: m[0], target: '_blank', rel: 'noopener noreferrer' }, m[0]));
    last = m.index + m[0].length;
  }
  if (last < text.length) wrap.append(document.createTextNode(text.slice(last)));
  return wrap;
}

function addPending({ messageId, body }) {
  state.pending.set(messageId, body);
  state.seenMessages.add(messageId);
  const node = h('div', { class: 'msg msg--pending', dataset: { mid: messageId } },
    h('div', { class: 'msg__meta' }, h('b', {}, state.nickname || 'You'), ' · sending…'),
    renderBody(body),
  );
  el.chatLog.append(node);
  scrollChatToEnd();
}
function markSent(messageId) {
  state.pending.delete(messageId);
  const node = el.chatLog.querySelector(`[data-mid="${CSS.escape(messageId)}"]`);
  if (node) { node.classList.remove('msg--pending', 'msg--failed'); node.querySelector('.msg__meta')?.replaceChildren(h('b', {}, state.nickname || 'You'), ` · ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`); }
}
function markFailed(messageId, retry) {
  const node = el.chatLog.querySelector(`[data-mid="${CSS.escape(messageId)}"]`);
  if (!node) return;
  node.classList.remove('msg--pending');
  node.classList.add('msg--failed');
  const meta = node.querySelector('.msg__meta');
  meta?.replaceChildren(h('b', {}, state.nickname || 'You'), ' · failed — ', h('button', { class: 'msg__retry', type: 'button', onclick: retry }, 'retry'));
}

function renderTyping() {
  const names = [...state.typing].map((id) => resolveName(id));
  if (!names.length) { el.typing.classList.add('hidden'); el.typing.textContent = ''; return; }
  el.typing.classList.remove('hidden');
  el.typing.textContent = names.length === 1 ? `${names[0]} is typing…`
    : names.length === 2 ? `${names[0]} and ${names[1]} are typing…`
    : `${names.length} people are typing…`;
}

function scrollChatToEnd() {
  // Only auto-scroll if the user is already near the bottom.
  const nearBottom = el.chatLog.scrollHeight - el.chatLog.scrollTop - el.chatLog.clientHeight < 80;
  if (nearBottom) el.chatLog.scrollTop = el.chatLog.scrollHeight;
}

function clearUnread() { state.unread = 0; updateBadges(); }
function updateBadges() {
  const text = state.unread > 99 ? '99+' : String(state.unread);
  el.chatBadge.textContent = text;
  el.chatBadge.classList.toggle('hidden', state.unread === 0);
  el.chatBadge.setAttribute('aria-label', `${state.unread} unread`);
  if (state.session) document.title = `${state.unread ? `(${state.unread}) ` : ''}Party Sync · Watching`;
}
document.addEventListener('visibilitychange', () => chatVisible() && clearUnread());

// typing presence
let typingOn = false, typingTimer;
el.chat.addEventListener('input', () => {
  if (!state.session) return;
  if (!typingOn && el.chat.value.trim()) typingOn = socket.fire('setTypingPresence', { typing: true });
  clearTimeout(typingTimer);
  typingTimer = setTimeout(stopTyping, 3000);
});
function stopTyping() {
  clearTimeout(typingTimer);
  if (typingOn) socket.fire('setTypingPresence', { typing: false });
  typingOn = false;
}

el.chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const body = el.chat.value.trim();
  if (!body || !state.session) return;
  el.chat.value = '';
  stopTyping();
  sendChat(body, randomId(12));
});
function sendChat(body, messageId) {
  if (!state.pending.has(messageId) && !state.seenMessages.has(messageId)) addPending({ messageId, body });
  socket.request('sendMessage', { body, messageId }, { timeout: 6000 })
    .then(() => markSent(messageId))
    .catch(() => markFailed(messageId, () => { state.pending.set(messageId, body); sendChat(body, messageId); }));
}

// ====================================================================== tabs
function selectTab(name) {
  state.activeTab = name;
  for (const t of document.querySelectorAll('.tab')) t.classList.toggle('is-active', t.dataset.tab === name);
  for (const p of document.querySelectorAll('.tabpanel')) p.classList.toggle('is-active', p.dataset.panel === name);
  if (name === 'chat') { clearUnread(); requestAnimationFrame(() => el.chat.focus()); scrollChatToEnd(); }
}
for (const t of document.querySelectorAll('.tab')) t.addEventListener('click', () => selectTab(t.dataset.tab));

// ====================================================================== invite / share
function renderShareRow(link) {
  const text = 'Watch with me on Party Sync';
  const items = [
    { icon: 'twitter', label: 'Share on X', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}` },
    { icon: 'facebook', label: 'Share on Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}` },
    { icon: 'whatsapp', label: 'Share on WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${text} ${link}`)}` },
  ];
  el.shareRow.replaceChildren(...items.map((it) =>
    h('a', { class: 'share-btn', href: it.href, target: '_blank', rel: 'noopener noreferrer', title: it.label, 'aria-label': it.label }, iconEl(it.icon)),
  ));
  if (navigator.share) {
    el.shareRow.append(h('button', {
      class: 'share-btn', type: 'button', title: 'Share…', 'aria-label': 'Share',
      onclick: () => navigator.share({ title: 'Join my watch party', text, url: link }).catch(() => {}),
    }, iconEl('link')));
  }
}
async function copyInvite() {
  const url = el.link.dataset.url || el.link.textContent;
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    const ta = h('textarea', {}); ta.value = url; document.body.append(ta); ta.select();
    try { document.execCommand('copy'); } catch { Toast.error('Couldn’t copy — select the link and copy it manually.'); document.body.removeChild(ta); return; }
    document.body.removeChild(ta);
  }
  el.copyLink.replaceChildren(iconEl('check'));
  Toast.success('Invite link copied.');
  setTimeout(() => el.copyLink.replaceChildren(iconEl('copy')), 1500);
}
el.copyLink.addEventListener('click', copyInvite);
el.link.addEventListener('click', copyInvite);

// ====================================================================== settings
el.settingsBtn.addEventListener('click', () => { fillSettings(); Modal.open(el.settingsModal); });
function fillSettings() {
  el.nick2.value = state.nickname;
  el.src2.value = '';
  el.settingsError.textContent = '';
  el.srcField2.classList.toggle('hidden', !state.isHost);
}
el.settingsForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  el.settingsError.textContent = '';
  const name = el.nick2.value.trim();
  const url = el.src2.value.trim();
  const source = url ? sourceFromUrl(url) : null;
  if (url && !source) return fail(el.settingsError, 'Enter a YouTube link or a full video link starting with https://', el.src2);

  setBusy(el.settingsSave, true);
  try {
    if (name !== state.nickname) {
      setNickname(name);
      if (state.session) socket.fire('broadcastUserSettings', { userSettings: userSettings() });
    }
    if (source && state.session && state.isHost) {
      await socket.request('nextEpisode', { ...source, nextEpisode: source.videoId, videoType: 'video', isNextEpisode: false });
      loadSource(source);
      sync.applyRemote({ state: 'paused', lastKnownTime: 0, lastKnownTimeUpdatedAt: socket.serverNow() });
      Toast.success('Video changed for everyone.');
    }
    Modal.close(el.settingsModal);
  } catch (err) {
    fail(el.settingsError, friendlyError(err));
  } finally {
    setBusy(el.settingsSave, false);
  }
});

// ====================================================================== accounts (optional Firebase)
el.accountBtn.addEventListener('click', () => Modal.open(el.authModal));
const AUTH_ERRORS = {
  'auth/invalid-email': 'That email address doesn’t look right.',
  'auth/invalid-credential': 'Wrong email or password.',
  'auth/wrong-password': 'Wrong email or password.',
  'auth/user-not-found': 'No account with that email. Try signing up.',
  'auth/email-already-in-use': 'An account with that email already exists. Try logging in.',
  'auth/weak-password': 'Use a password with at least 6 characters.',
  'auth/too-many-requests': 'Too many attempts. Wait a moment and try again.',
  'auth/network-request-failed': 'Network error. Check your connection.',
};
let authMode = 'login';
const authAvailable = () => !!window.PartyAuth?.isConfigured();

function setAuthMode(mode) {
  authMode = mode;
  el.segLogin.classList.toggle('is-active', mode === 'login');
  el.segSignup.classList.toggle('is-active', mode === 'signup');
  el.authSubmit.querySelector('.btn__label').textContent = mode === 'signup' ? 'Create account' : 'Log in';
  el.password.autocomplete = mode === 'signup' ? 'new-password' : 'current-password';
  el.authNote.textContent = '';
}
el.segLogin.addEventListener('click', () => setAuthMode('login'));
el.segSignup.addEventListener('click', () => setAuthMode('signup'));

function renderAccount(user) {
  const label = user ? (user.displayName || user.email || 'Signed in').split('@')[0] : 'Guest';
  el.accountLabel.textContent = label;
  el.accountAvatar.textContent = user ? initials(label) : 'G';
  el.accountBtn.setAttribute('aria-label', user ? `Account: ${user.email || label}` : 'Guest — log in or sign up');
  el.authSignedOut.classList.toggle('hidden', !!user);
  el.authSignedIn.classList.toggle('hidden', !user);
  el.authEmail.textContent = user?.email || label;
  if (user && !state.nickname) setNickname(label);
}
function initAuth() {
  const auth = window.PartyAuth;
  if (!authAvailable()) el.authNote.textContent = 'Accounts aren’t configured on this server — you’re watching as a guest, which works fine for parties.';
  if (!auth) return renderAccount(null);

  auth.onToken((token) => {
    const changed = token !== state.authToken;
    state.authToken = token;
    if (changed) sendAuth();
  });
  auth.onUser(renderAccount);

  el.authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    el.authNote.textContent = '';
    if (!authAvailable()) return;
    const email = el.email.value.trim();
    const password = el.password.value;
    if (!el.email.checkValidity() || !email) { el.authNote.textContent = 'Enter a valid email address.'; el.email.focus(); return; }
    if (password.length < 6) { el.authNote.textContent = 'Passwords are at least 6 characters.'; el.password.focus(); return; }

    setBusy(el.authSubmit, true);
    try {
      await (authMode === 'signup' ? auth.signUp(email, password) : auth.signIn(email, password));
      el.password.value = '';
      Modal.close(el.authModal);
      Toast.success(authMode === 'signup' ? 'Account created — you’re signed in.' : 'Signed in.');
    } catch (err) {
      el.authNote.textContent = AUTH_ERRORS[err?.code] || err?.message || 'Sign-in failed.';
    } finally {
      setBusy(el.authSubmit, false);
    }
  });
  el.logout.addEventListener('click', async () => { await auth.signOut(); Modal.close(el.authModal); Toast.info('Signed out.'); });
}

// ====================================================================== keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (state.view !== 'party' || e.ctrlKey || e.metaKey || e.altKey) return;
  if (document.querySelector('.modal-backdrop.is-open')) return;
  const t = e.target;
  if (t.closest('input, textarea, select, [contenteditable="true"]')) return;
  const onVideo = t === el.v;
  const key = e.key.toLowerCase();
  if ((key === ' ' && !onVideo && !t.closest('button, a')) || key === 'k') {
    e.preventDefault();
    if (player.paused) player.play().catch(() => {}); else player.pause();
  } else if ((key === 'arrowleft' || key === 'arrowright') && !onVideo) {
    e.preventDefault();
    const dur = Number.isFinite(player.duration) ? player.duration : Infinity;
    player.currentTime = Math.min(dur, Math.max(0, player.currentTime + (key === 'arrowleft' ? -5 : 5)));
  } else if (key === 'm') {
    player.muted = !player.muted;
    el.unmute.classList.add('hidden');
  } else if (key === 'f') {
    if (document.fullscreenElement) document.exitFullscreen();
    else el.playerWrap.requestFullscreen?.().catch(() => {});
  }
});

// ====================================================================== boot
setAuthMode('login');
showView('lobby');
renderConn();
initAuth();
socket.connect();

const invited = parseSessionId(params.get('session') || '');
if (invited) {
  el.sid.value = invited;
  el.joinSub.textContent = 'You’ve been invited to a watch party.';
  previewInvite(invited);
  if (state.nickname) joinParty(invited);
  else el.nick.focus();
}
