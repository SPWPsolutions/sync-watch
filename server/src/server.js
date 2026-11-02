'use strict';
// Minimal self-hosted watch-party sync server.
// Speaks the same JSON-over-WebSocket envelope the Teleparty 5.8.7 extension uses:
//   client -> server : { type, data, callbackId }   (callbackId is the string "null" when no reply wanted)
//   server -> client : { type, data }               (push)
//                      { type, data, callbackId }   (reply to a request)
//   on connect       : { type: "userId", data: { userId } }

const http = require('http');
const fs = require('fs');
const path = require('path');
const { WebSocketServer } = require('ws');
const { RoomStore, newId } = require('./rooms');
const { extensionHandoff, renderLanding } = require('./landing');

const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || '0.0.0.0';
const PUBLIC_URL = process.env.PUBLIC_URL || `http://localhost:${PORT}`;
const ROOM_TTL_MS = Number(process.env.ROOM_TTL_MS || 10 * 60 * 1000); // keep empty rooms 10 min for reconnects
const LOG = process.env.LOG !== '0';
const INSTALL_URL = /^https:\/\/[^\s"'<>]+$/.test(process.env.EXTENSION_INSTALL_URL || '') ? process.env.EXTENSION_INSTALL_URL : null;

const store = new RoomStore();
const sockets = new Map(); // userId -> ws

const log = (...a) => LOG && console.log(new Date().toISOString(), ...a);

// ---------------------------------------------------------------- Firebase auth
// Server-side Firebase ID-token verification. Enabled when a service-account
// credential is present: GOOGLE_APPLICATION_CREDENTIALS, else ./secrets/firebase-admin-key.json.
// With no credential the server keeps its anonymous flow (dev/CI and the extension's
// anonymous parties): authenticateUser is acked but not verified, exactly as before.
// Set AUTH_REQUIRED=1 to force every socket to present a valid token before create/join.
const AUTH_REQUIRED = process.env.AUTH_REQUIRED === '1';
let verifyIdToken = null; // (idToken) => Promise<DecodedIdToken>, or null when disabled

(function initFirebaseAdmin() {
  const explicit = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  const fallback = path.join(__dirname, '..', 'secrets', 'firebase-admin-key.json');
  const credSource = explicit && fs.existsSync(explicit) ? explicit : fs.existsSync(fallback) ? fallback : null;

  if (!credSource) {
    if (AUTH_REQUIRED) {
      console.error('AUTH_REQUIRED=1 but no Firebase credential found (set GOOGLE_APPLICATION_CREDENTIALS or add secrets/firebase-admin-key.json). Refusing to start.');
      process.exit(1);
    }
    log('firebase-admin: no credential found, running anonymous (tokens acked, not verified)');
    return;
  }
  try {
    const { initializeApp, cert } = require('firebase-admin/app');
    const { getAuth } = require('firebase-admin/auth');
    const svc = JSON.parse(fs.readFileSync(credSource, 'utf8'));
    initializeApp({ credential: cert(svc) });
    verifyIdToken = (idToken) => getAuth().verifyIdToken(idToken);
    log(`firebase-admin: token verification enabled (project ${svc.project_id})`);
  } catch (e) {
    if (AUTH_REQUIRED) { console.error('firebase-admin init failed:', e); process.exit(1); }
    log('firebase-admin init failed, running anonymous:', e.message);
  }
})();

// ---------------------------------------------------------------- HTTP (REST)
const PUBLIC_DIR = process.env.PUBLIC_DIR
  ? path.resolve(process.env.PUBLIC_DIR)
  : path.join(__dirname, '..', 'public');

const EXTENSION_DOWNLOAD_PATHS = new Set(['/download/woopers-party.zip', '/download/party-sync.zip']);
function currentExtensionZip() {
  try {
    const dir = path.join(PUBLIC_DIR, 'downloads');
    return fs.readdirSync(dir)
      .filter((f) => /^(?:woopers-party|party-sync)-[\w.-]+\.zip$/.test(f))
      .sort((a, b) => fs.statSync(path.join(dir, b)).mtimeMs - fs.statSync(path.join(dir, a)).mtimeMs)[0] || null;
  } catch {
    return null;
  }
}

function json(res, code, body) {
  res.writeHead(code, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  });
  res.end(JSON.stringify(body));
}

const httpServer = http.createServer((req, res) => {
  const url = new URL(req.url, PUBLIC_URL);
  if (req.method === 'OPTIONS') return json(res, 204, {});

  if (url.pathname === '/health') return json(res, 200, { ok: true, ...store.stats(), uptime: process.uptime() });

  // Session lookup (used by the join page / landing page).
  let m = url.pathname.match(/^\/api\/sessions\/([a-f0-9]+)$/);
  if (m) {
    const room = store.get(m[1]);
    if (!room) return json(res, 404, { error: 'not_found' });
    const s = room.snapshot();
    delete s.messages;
    return json(res, 200, s);
  }

  // Video lookup endpoint (PROTOCOL_SPEC.md §6: GET /video?session=<id>).
  if (url.pathname === '/video' || url.pathname === '/api/video') {
    const sid = url.searchParams.get('session') || '';
    const room = /^[a-f0-9]+$/.test(sid) ? store.get(sid) : null;
    if (!room) return json(res, 404, { error: 'not_found' });
    return json(res, 200, {
      videoService: room.videoService,
      videoId: room.videoId,
      videoType: room.videoType,
      serviceDomain: room.serviceDomain,
      state: room.state,
    });
  }

  // Party link: www.teleparty.com/join/<id> equivalent. Serves the demo player with the id prefilled.
  m = url.pathname.match(/^\/join\/([a-f0-9]+)$/);
  if (m) {
    const room = store.get(m[1]);
    const handoff = extensionHandoff(room);
    if (handoff) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      return res.end(renderLanding(room, handoff, { installUrl: INSTALL_URL, publicUrl: PUBLIC_URL }));
    }
    res.writeHead(302, { Location: `/?session=${m[1]}` });
    return res.end();
  }

  // Stable extension download link -> the current versioned zip (built by `npm run build:extension`).
  if (EXTENSION_DOWNLOAD_PATHS.has(url.pathname)) {
    const zip = currentExtensionZip();
    if (!zip) return json(res, 404, { error: 'extension_not_built' });
    res.writeHead(302, { Location: `/downloads/${zip}`, 'Cache-Control': 'no-store' });
    return res.end();
  }

  // Static demo client.
  const file = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
  const full = path.join(PUBLIC_DIR, path.normalize(file));
  if (full.startsWith(PUBLIC_DIR) && fs.existsSync(full) && fs.statSync(full).isFile()) {
    const stat = fs.statSync(full);
    const type = {
      '.html': 'text/html; charset=utf-8',
      '.js': 'text/javascript; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.svg': 'image/svg+xml',
      '.png': 'image/png',
      '.ico': 'image/x-icon',
      '.zip': 'application/zip',
    }[path.extname(full)] || 'application/octet-stream';
    const headers = { 'Content-Type': type, 'Content-Length': stat.size };
    if (type === 'application/zip') headers['Content-Disposition'] = `attachment; filename="${path.basename(full)}"`;
    res.writeHead(200, headers);
    if (req.method === 'HEAD') return res.end();
    return fs.createReadStream(full).pipe(res);
  }

  // Catch-all for api.teleparty.com calls the extension makes (analytics, sleek-url, etc).
  if (url.pathname.startsWith('/api/') || req.method === 'POST') return json(res, 200, {});
  json(res, 404, { error: 'not_found' });
});

// ---------------------------------------------------------------- WebSocket
const wss = new WebSocketServer({ server: httpServer, maxPayload: 256 * 1024 });

function send(ws, type, data, callbackId) {
  if (ws.readyState !== ws.OPEN) return;
  const msg = { type, data };
  if (callbackId && callbackId !== 'null') msg.callbackId = callbackId;
  ws.send(JSON.stringify(msg));
}

// Reply only when the client registered a callback; a reply to "null" would be misread as a push.
function reply(ws, type, data, callbackId) {
  if (callbackId && callbackId !== 'null') send(ws, type, data, callbackId);
}

function broadcast(room, type, data, { except } = {}) {
  for (const uid of room.members.keys()) {
    if (uid === except) continue;
    const ws = sockets.get(uid);
    if (ws) send(ws, type, data);
  }
}

function systemMessage(room, member, body) {
  const msg = {
    messageId: newId(8),
    isSystemMessage: true,
    body,
    permId: member.permId,
    userId: member.userId,
    userIcon: member.userSettings?.userIcon,
    userNickname: member.userSettings?.userNickname,
    timestamp: Date.now(),
  };
  room.pushMessage(msg);
  broadcast(room, 'sendMessage', msg);
}

function pushUserList(room) {
  broadcast(room, 'userList', room.userList());
}

function presenceUpdate(room, set, type, key) {
  broadcast(room, type, { [key]: [...set] });
}

function joinRoom(ws, room, data) {
  const member = {
    userId: ws.userId,
    permId: data.permId || (ws.auth && ws.auth.uid) || ws.userId,
    userSettings: data.userSettings || {},
    joinedAt: Date.now(),
  };
  if (room.emptySince) delete room.emptySince;
  room.members.set(ws.userId, member);
  ws.sessionId = room.sessionId;
  return member;
}

function leaveRoom(ws, reason = 'left') {
  const room = ws.sessionId && store.get(ws.sessionId);
  ws.sessionId = undefined;
  if (!room) return;
  const member = room.members.get(ws.userId);
  room.members.delete(ws.userId);
  for (const s of [room.buffering, room.typing, room.watchingAds]) s.delete(ws.userId);
  if (member) systemMessage(room, member, 'left');
  if (room.members.size === 0) {
    room.emptySince = Date.now();
  } else {
    if (room.hostUserId === ws.userId) room.hostUserId = room.members.keys().next().value;
    pushUserList(room);
    presenceUpdate(room, room.buffering, 'setBufferingPresence', 'usersBuffering');
  }
  log(`[${room.sessionId}] ${ws.userId} ${reason} (${room.members.size} left)`);
}

// Normalise a playback update. Timestamps are re-stamped with server clock so every
// client extrapolates position from the same reference (clients use getServerTime for offset).
function applyPlayback(room, data) {
  if (data.state === 'playing' || data.state === 'paused') room.state = data.state;
  if (typeof data.lastKnownTime === 'number') room.lastKnownTime = data.lastKnownTime;
  room.lastKnownTimeUpdatedAt =
    typeof data.lastKnownTimeUpdatedAt === 'number' && Math.abs(data.lastKnownTimeUpdatedAt - Date.now()) < 5000
      ? data.lastKnownTimeUpdatedAt
      : Date.now();
  if (data.providerOffsets) room.providerOffsets = data.providerOffsets;
  if (data.videoId) room.videoId = data.videoId;
}

const handlers = {
  ping() {},

  // Verify a Firebase ID token and bind the account identity to this socket.
  // Client sends { firebaseToken }. Guests never call this and stay anonymous.
  // When verification is disabled (no credential) we keep the legacy ack so the
  // anonymous flow and the extension are unaffected.
  authenticateUser(ws, data = {}, cb) {
    const token = data.firebaseToken || data.idToken || data.token;
    if (!token || !verifyIdToken) {
      return reply(ws, 'userAuthenticated', { userId: ws.userId, authenticated: !!ws.auth }, cb);
    }
    verifyIdToken(token).then(
      (decoded) => {
        ws.auth = {
          uid: decoded.uid,
          email: decoded.email || null,
          emailVerified: !!decoded.email_verified,
          name: decoded.name || null,
          picture: decoded.picture || null,
        };
        log(`${ws.userId} authenticated as ${ws.auth.uid} (${ws.auth.email || 'no-email'})`);
        reply(ws, 'userAuthenticated', { userId: ws.userId, authenticated: true, uid: ws.auth.uid, email: ws.auth.email }, cb);
      },
      (err) => {
        ws.auth = null;
        log(`${ws.userId} auth failed: ${err.code || err.message}`);
        reply(ws, 'userAuthenticated', { userId: ws.userId, authenticated: false, error: 'invalid_token' }, cb);
      }
    );
  },
  signIn(ws, data, cb) {
    reply(ws, 'signIn', { ok: true, authenticated: !!ws.auth }, cb);
  },

  getServerTime(ws, data, cb) {
    reply(ws, 'getServerTime', { serverTime: Date.now() }, cb);
  },

  createSession(ws, data = {}, cb) {
    if (AUTH_REQUIRED && !ws.auth) return reply(ws, 'createSession', { errorMessage: 'authentication required' }, cb);
    if (ws.sessionId) leaveRoom(ws, 'switched');
    const room = store.create({ ...data, hostUserId: ws.userId });
    applyPlayback(room, { state: 'paused', lastKnownTime: 0, ...data });
    joinRoom(ws, room, data);
    log(`[${room.sessionId}] created by ${ws.userId} (${room.videoService}:${room.videoId})`);
    reply(ws, 'createSession', { ...room.snapshot(), partyUrl: `${PUBLIC_URL}/join/${room.sessionId}` }, cb);
    pushUserList(room);
  },
  createTempSession(ws, data, cb) {
    handlers.createSession(ws, data, cb);
  },

  joinSession(ws, data = {}, cb) {
    if (AUTH_REQUIRED && !ws.auth) return reply(ws, 'joinSession', { errorMessage: 'authentication required' }, cb);
    const room = store.get(data.sessionId);
    if (!room) return reply(ws, 'joinSession', { errorMessage: 'This party does not exist or has ended.' }, cb);
    if (ws.sessionId && ws.sessionId !== room.sessionId) leaveRoom(ws, 'switched');
    const member = joinRoom(ws, room, data);
    log(`[${room.sessionId}] ${ws.userId} joined (${room.members.size} members)`);
    reply(ws, 'joinSession', room.snapshot(), cb);
    systemMessage(room, member, 'joined');
    pushUserList(room);
  },

  leaveSession(ws, data, cb) {
    leaveRoom(ws, 'left');
    reply(ws, 'leaveSession', { ok: true }, cb);
  },

  // Play / pause / seek. Client: brodadcast -> background -> updateSession.
  updateSession(ws, data = {}, cb, room) {
    if (room.controlLock === 'true' && ws.userId !== room.hostUserId) {
      return reply(ws, 'updateSession', { errorMessage: 'Locked Session' }, cb);
    }
    applyPlayback(room, data);
    const out = {
      ...data,
      state: room.state,
      lastKnownTime: room.lastKnownTime,
      lastKnownTimeUpdatedAt: room.lastKnownTimeUpdatedAt,
      providerOffsets: room.providerOffsets,
      userId: ws.userId,
    };
    broadcast(room, 'updateSession', out, { except: ws.userId });
    reply(ws, 'updateSession', { ok: true, serverTime: Date.now() }, cb);
  },

  nextEpisode(ws, data = {}, cb, room) {
    if (room.controlLock === 'true' && ws.userId !== room.hostUserId) {
      return reply(ws, 'nextEpisode', { errorMessage: 'Locked Session' }, cb);
    }
    if (data.videoId || data.nextEpisode) room.videoId = data.videoId || data.nextEpisode;
    room.state = 'paused';
    room.lastKnownTime = 0;
    room.lastKnownTimeUpdatedAt = Date.now();
    broadcast(room, 'jumpToNextEpisode', { ...data, videoId: room.videoId, userId: ws.userId }, { except: ws.userId });
    reply(ws, 'nextEpisode', { ok: true }, cb);
  },

  updatePartySettings(ws, data = {}, cb, room) {
    if (ws.userId !== room.hostUserId) {
      return reply(ws, 'updatePartySettings', { errorMessage: 'Only the host can change party settings' }, cb);
    }
    if (data.controlLock !== undefined) room.controlLock = String(Boolean(data.controlLock && data.controlLock !== 'false'));
    if (data.reactionsDisabled !== undefined) room.reactionsDisabled = String(Boolean(data.reactionsDisabled && data.reactionsDisabled !== 'false'));
    const payload = { controlLock: room.controlLock, reactionsDisabled: room.reactionsDisabled };
    broadcast(room, 'partySettings', payload);
    reply(ws, 'updatePartySettings', { ok: true, ...payload }, cb);
  },

  sendMessage(ws, data = {}, cb, room) {
    const member = room.members.get(ws.userId);
    const msg = {
      messageId: data.messageId || newId(8),
      isSystemMessage: false,
      body: String(data.body ?? '').slice(0, 2000),
      permId: member.permId,
      userId: ws.userId,
      userIcon: data.userIcon ?? member.userSettings?.userIcon,
      userIconFrame: data.userIconFrame ?? member.userSettings?.userIconFrame,
      userNickname: data.userNickname ?? member.userSettings?.userNickname,
      nameColor: data.nameColor ?? member.userSettings?.nameColor,
      badge: data.badge ?? member.userSettings?.badge,
      timestamp: Date.now(),
    };
    room.pushMessage(msg);
    broadcast(room, 'sendMessage', msg);
    reply(ws, 'sendMessage', { ok: true, messageId: msg.messageId }, cb);
  },

  setBufferingPresence(ws, data = {}, cb, room) {
    const on = data.buffering ?? data.isBuffering ?? data.value ?? true;
    on ? room.buffering.add(ws.userId) : room.buffering.delete(ws.userId);
    presenceUpdate(room, room.buffering, 'setBufferingPresence', 'usersBuffering');
  },
  setTypingPresence(ws, data = {}, cb, room) {
    const on = data.typing ?? data.isTyping ?? data.value ?? true;
    on ? room.typing.add(ws.userId) : room.typing.delete(ws.userId);
    presenceUpdate(room, room.typing, 'setTypingPresence', 'usersTyping');
  },
  setAdsPresence(ws, data = {}, cb, room) {
    const on = data.watchingAds ?? data.value ?? true;
    on ? room.watchingAds.add(ws.userId) : room.watchingAds.delete(ws.userId);
    presenceUpdate(room, room.watchingAds, 'setAdsPresence', 'usersWatchingAds');
  },

  broadcastUserSettings(ws, data = {}, cb, room) {
    const member = room.members.get(ws.userId);
    member.userSettings = { ...member.userSettings, ...(data.userSettings || data) };
    broadcast(room, 'updateSettings', { userId: ws.userId, permId: member.permId, userSettings: member.userSettings });
    pushUserList(room);
    reply(ws, 'broadcastUserSettings', { ok: true, userSettings: member.userSettings }, cb);
  },

  // Re-sync after the client's socket reconnects.
  reboot(ws, data = {}, cb) {
    const room = store.get(data.sessionId);
    if (!room) return reply(ws, 'reboot', { errorMessage: 'session expired' }, cb);
    joinRoom(ws, room, data);
    reply(ws, 'reboot', room.snapshot(), cb);
    pushUserList(room);
  },

  sendReaction(ws, data = {}, cb, room) {
    if (room.reactionsDisabled === 'true') {
      return reply(ws, 'sendReaction', { errorMessage: 'Reactions are disabled' }, cb);
    }
    const member = room.members.get(ws.userId);
    broadcast(room, 'sendReaction', {
      ...data,
      userId: ws.userId,
      userNickname: member?.userSettings?.userNickname,
      userIcon: member?.userSettings?.userIcon,
    }, { except: ws.userId });
    reply(ws, 'sendReaction', { ok: true }, cb);
  },

  // Pure relays.
  sendGIF: relay('sendGIF'),
  webRTC: relay('webRTC'),
  selectProvider: relay('selectProvider'),
  reportStreamPosition: relay('reportStreamPosition'),
};

function relay(type) {
  return (ws, data = {}, cb, room) => {
    broadcast(room, type, { ...data, userId: ws.userId }, { except: type === 'webRTC' ? undefined : ws.userId });
    if (cb && cb !== 'null') reply(ws, type, { ok: true }, cb);
  };
}

const ROOMLESS = new Set(['ping', 'authenticateUser', 'signIn', 'getServerTime', 'createSession', 'createTempSession', 'joinSession', 'leaveSession', 'reboot']);

wss.on('connection', (ws, req) => {
  ws.userId = newId(12);
  ws.isAlive = true;
  sockets.set(ws.userId, ws);
  ws.on('pong', () => (ws.isAlive = true));
  send(ws, 'userId', { userId: ws.userId });
  log(`connect ${ws.userId} from ${req.socket.remoteAddress}`);

  ws.on('message', (raw) => {
    ws.isAlive = true;
    let msg;
    try {
      msg = JSON.parse(raw);
    } catch {
      return;
    }
    const { type, data, callbackId } = msg || {};
    const handler = handlers[type];
    if (!handler) {
      if (type) log(`unhandled type "${type}" from ${ws.userId}`);
      return;
    }
    const room = ws.sessionId && store.get(ws.sessionId);
    if (!ROOMLESS.has(type) && !room) {
      return reply(ws, type, { errorMessage: 'not in a session' }, callbackId);
    }
    try {
      handler(ws, data, callbackId, room);
    } catch (e) {
      log(`handler ${type} failed:`, e);
      reply(ws, type, { errorMessage: 'internal error' }, callbackId);
    }
  });

  ws.on('close', () => {
    leaveRoom(ws, 'disconnected');
    sockets.delete(ws.userId);
  });
});

// Dead-socket reaping + empty-room GC.
const reaper = setInterval(() => {
  for (const ws of wss.clients) {
    if (!ws.isAlive) {
      ws.terminate();
      continue;
    }
    ws.isAlive = false;
    ws.ping();
  }
  const now = Date.now();
  for (const [id, room] of store.rooms) {
    if (room.emptySince && now - room.emptySince > ROOM_TTL_MS) {
      store.delete(id);
      log(`[${id}] expired`);
    }
  }
}, 30_000);
wss.on('close', () => clearInterval(reaper));

if (require.main === module) {
  httpServer.listen(PORT, HOST, () => log(`party server on ${HOST}:${PORT} (public ${PUBLIC_URL})`));
}

module.exports = { httpServer, wss, store };
