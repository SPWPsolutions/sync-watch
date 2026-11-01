(function () {
  const NS = (globalThis.PartySync ||= {});

  // Players toggle play/pause on clicks and keys that bubble up from overlays; stop ours at the host.
  const ISOLATED_EVENTS = ['keydown', 'keyup', 'keypress', 'click', 'dblclick', 'mousedown', 'mouseup', 'pointerdown', 'pointerup'];
  // Keyboard events are stopped earlier by keyguard.js, which looks for this attribute.
  NS.isolateEvents = (host) => {
    host.setAttribute('data-party-sync-ui', '');
    for (const t of ISOLATED_EVENTS) host.addEventListener(t, (e) => e.stopPropagation());
  };

  // Per-tab, so a reload (e.g. moving to another episode) rejoins the same party.
  const RESUME_KEY = 'partySync.session';

  // onSession({ socket, sync, media, snapshot }) runs once per create/join and may return a cleanup fn.
  NS.runParty = function ({ service, createMedia, onSession }) {
    const media = createMedia();
    let socket = null;
    let sync = null;
    let session = null; // { sessionId, partyUrl, videoId, serverUrl, nickname, permId }
    let members = [];
    let syncStatus = 'idle';
    let stopExtras = null;
    const pill = createPill(() => sync?.resync());

    function remember() {
      const { serverUrl, nickname, permId, sessionId, partyUrl } = session;
      try {
        sessionStorage.setItem(RESUME_KEY, JSON.stringify({ serverUrl, nickname, permId, sessionId, partyUrl }));
      } catch {}
    }

    function forget() {
      try {
        sessionStorage.removeItem(RESUME_KEY);
      } catch {}
    }

    function startSession(snap) {
      applySnapshot(snap);
      remember();
      stopExtras = onSession?.({ socket, sync, media, snapshot: snap }) || null;
    }

    const userSettings = () => ({ userNickname: session?.nickname || undefined });

    function setBadge() {
      chrome.runtime.sendMessage({ type: 'badge', text: session ? String(members.length || '') : '' }).catch(() => {});
      pill.render(session ? { members: members.length, status: syncStatus } : null);
    }

    function connect(serverUrl) {
      if (socket && socket.url === serverUrl) return socket;
      socket?.close();
      socket = new NS.PartySocket({ url: serverUrl });
      sync = new NS.SyncController(media, socket);
      sync.on('status', (s) => {
        syncStatus = s;
        setBadge();
      });
      socket.on('updateSession', (d) => sync.applyRemote(d));
      socket.on('userList', (list) => {
        members = Array.isArray(list) ? list : [];
        setBadge();
      });
      socket.on('ready', async ({ reconnected }) => {
        if (!reconnected || !session) return;
        try {
          const snap = await socket.request('reboot', { sessionId: session.sessionId, permId: session.permId, userSettings: userSettings() });
          applySnapshot(snap);
        } catch {
          forget();
          end();
        }
      });
      socket.connect();
      return socket;
    }

    function applySnapshot(snap) {
      members = snap.userList || members;
      sync.start(snap);
      setBadge();
    }

    function end() {
      stopExtras?.();
      stopExtras = null;
      if (session && socket?.isOpen) socket.fire('leaveSession');
      sync?.stop();
      socket?.close();
      socket = null;
      sync = null;
      session = null;
      members = [];
      syncStatus = 'idle';
      setBadge();
    }

    async function create({ serverUrl, nickname, permId, videoId }) {
      end();
      const s = connect(serverUrl);
      await s.ready();
      session = { serverUrl, nickname, permId, videoId };
      const snap = await s.request('createSession', {
        videoId,
        videoService: service,
        videoType: 'episode',
        serviceDomain: location.hostname,
        videoDuration: Number.isFinite(media.duration) ? Math.round(media.duration * 1000) : 0,
        state: media.paused ? 'paused' : 'playing',
        lastKnownTime: Math.round(media.currentTime * 1000),
        lastKnownTimeUpdatedAt: Math.round(s.serverNow()),
        controlLock: false,
        reactionsDisabled: false,
        permId,
        userSettings: userSettings(),
      });
      Object.assign(session, { sessionId: snap.sessionId, partyUrl: snap.partyUrl });
      startSession(snap);
      return status();
    }

    async function join({ serverUrl, nickname, permId, sessionId, videoId, partyUrl }) {
      end();
      const s = connect(serverUrl);
      await s.ready();
      session = { serverUrl, nickname, permId, videoId, sessionId };
      try {
        const snap = await s.request('joinSession', { sessionId, permId, userSettings: userSettings() });
        session.partyUrl = snap.partyUrl || partyUrl;
        startSession(snap);
        return { ...status(), hostVideoId: snap.videoId, hostService: snap.videoService };
      } catch (e) {
        end();
        throw e;
      }
    }

    function status() {
      return {
        hasVideo: media.hasVideo(),
        service,
        inParty: !!session?.sessionId,
        sessionId: session?.sessionId ?? null,
        partyUrl: session?.partyUrl ?? null,
        members: members.map((m) => ({ name: m.userSettings?.userNickname || 'Guest', isHost: !!m.isHost })),
        syncStatus,
        connection: socket?.status ?? 'idle',
      };
    }

    chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
      if (msg?.target !== 'party') return;
      // Every frame receives this; only the one holding the player answers.
      if (!media.hasVideo() && !session) return;
      const handlers = { status: async () => status(), create, join, leave: async () => (forget(), end(), status()) };
      const fn = handlers[msg.cmd];
      if (!fn) return;
      fn(msg.args || {}).then(sendResponse, (e) => sendResponse({ error: e.message || String(e) }));
      return true;
    });

    window.addEventListener('pagehide', end);

    let saved = null;
    try {
      saved = JSON.parse(sessionStorage.getItem(RESUME_KEY) || 'null');
    } catch {}
    const resume = () => saved?.sessionId && join({ ...saved, videoId: null }).catch(forget);

    const invite = takeInvite();
    if (!invite) {
      resume();
    } else {
      const tryInvite = () => {
        const videoId = (location.pathname.match(/\/watch\/([A-Za-z0-9]+)/) || [])[1];
        if (!videoId) return false;
        try {
          sessionStorage.removeItem(INVITE_KEY);
        } catch {}
        storedIdentity()
          .then((id) => join({ ...id, videoId, sessionId: invite.sessionId }))
          .catch(resume);
        return true;
      };
      if (!tryInvite()) {
        const timer = setInterval(() => tryInvite() && clearInterval(timer), 1000);
      }
    }
  };

  // Written by invite.js at document_start; the login/profile flow may come first, so it survives until a /watch page.
  const INVITE_KEY = 'partySync.invite';
  const INVITE_MAX_AGE_MS = 30 * 60 * 1000;
  const DEFAULT_SERVER = 'https://watch.pwlive.fyi';

  function takeInvite() {
    try {
      const inv = JSON.parse(sessionStorage.getItem(INVITE_KEY) || 'null');
      if (inv && /^[a-f0-9]{6,64}$/.test(inv.sessionId) && Date.now() - inv.at < INVITE_MAX_AGE_MS) return inv;
      sessionStorage.removeItem(INVITE_KEY);
    } catch {}
    return null;
  }

  async function storedIdentity() {
    const [{ nickname = '', serverUrl }, local] = await Promise.all([
      chrome.storage.sync.get(['nickname', 'serverUrl']),
      chrome.storage.local.get('permId'),
    ]);
    let { permId } = local;
    if (!permId) {
      permId = crypto.randomUUID().replace(/-/g, '');
      await chrome.storage.local.set({ permId });
    }
    let u;
    try {
      u = new URL(serverUrl || DEFAULT_SERVER);
    } catch {
      u = new URL(DEFAULT_SERVER);
    }
    u.protocol = u.protocol === 'http:' ? 'ws:' : 'wss:';
    return { nickname, permId, serverUrl: u.origin };
  }

  function createPill(onClick) {
    const host = document.createElement('div');
    host.style.cssText = 'position:fixed;top:12px;right:12px;z-index:2147483647;';
    NS.isolateEvents(host);
    const root = host.attachShadow({ mode: 'closed' });
    root.innerHTML = `<style>
      button{all:unset;cursor:pointer;font:600 12px/1 system-ui,sans-serif;color:#fff;padding:7px 11px;border-radius:999px;
        background:rgba(20,20,30,.72);backdrop-filter:blur(8px);display:flex;gap:6px;align-items:center}
      i{width:8px;height:8px;border-radius:50%;background:var(--c)}
    </style><button title="Click to re-sync"><i></i><span></span></button>`;
    const btn = root.querySelector('button');
    btn.addEventListener('click', onClick);
    const COLORS = { playing: '#34d399', paused: '#a5b4fc', syncing: '#fbbf24', buffering: '#fbbf24', blocked: '#f87171', error: '#f87171' };
    const LABELS = { blocked: 'Click to sync', loading: 'Waiting for video' };

    const place = () => (document.fullscreenElement || document.body)?.appendChild(host);
    document.addEventListener('fullscreenchange', () => host.isConnected && place());

    return {
      render(state) {
        if (!state) return host.remove();
        btn.style.setProperty('--c', COLORS[state.status] || '#9ca3af');
        root.querySelector('span').textContent = `${state.members} watching · ${LABELS[state.status] || state.status}`;
        if (!host.isConnected) place();
      },
    };
  }
})();
