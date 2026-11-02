# Teleparty Extension 5.8.7: Client/Server Protocol Spec (for a self-hosted sync backend)

Source: `oocalimimngaihdkbihfgmpkcpnmlaoa/5.8.7_0` (Chrome, MV3). The line numbers below refer to
prettier-formatted copies of the bundles:
- BG = `background_service_bundled.js` (19,785 lines after formatting)
- CS = `content_scripts/netflix/netflix_content_bundled.js` (the other services share the same core)

Server source is not in the package. Request payloads and the fields the client reads from
responses come straight from the client code. Response fields marked **(inferred)** come from how
the client uses them.

---

## 1. Architecture

```
content script (per streaming tab)  <-- chrome.runtime msgs -->  background SW  <-- WS / Socket.IO -->  server
          |                                                            |
   player control, drift calc                       one socket per tab (Map tabId -> socket), pure relay
```

- The background script holds **one socket per browser tab** (`wu`, BG ~9110). It mostly relays.
  The content script builds the sync payloads, and the background forwards them unchanged
  (`Ia._n` / `yn`, BG 11333-11387).
- Server-to-client messages go through `Bu.onMessage` (BG 9218) and are forwarded to the tab as
  internal messages.

---

## 2. Transport

### 2.1 Primary: raw WebSocket ("uws")
- URL: `wss://ws.teleparty.com` (constant `s`, BG 752). No path and no query string. Auth is sent
  in-band (section 4).
- Frames are **JSON text**.
- Client keepalive: every **15 s** it sends `{"type":"ping"}` (BG 8740). The server can ignore it
  or reply. The client does not wait for a pong.
- Close code **4500** (`kr`, BG 6317) means a deliberate client close and does not trigger a
  reconnect. Any other code triggers a reconnect. The client logs close code 1007 specially.

### 2.2 Fallback: Socket.IO v4 (EIO=4)
- `io("https://socketio.teleparty.com", { reconnection:false, withCredentials:true })`, default
  path `/socket.io` (BG 8851).
- Uses only the default `"message"` event: the client calls `socket.send(JSON_STRING)`, which emits
  `"message"` with the same JSON string as the WS frame.
- Server keepalive: the server emits `"message"` with the literal string `"ping"`. The client
  answers by emitting `"pong"` (BG 8730-8737).
- When the client switches: a connect timeout of **5 s** (`_e`, BG 8643). After 3 or more failures,
  or more than 1 consecutive reconnect, it toggles between uws and socket.io (BG 8837).
- Reconnect backoff is `1000 * 2^n` ms (500 ms for the first 2 tries before it has a userId), with
  at most **10** attempts, after which it sends `reloadParty` to the tab (BG 8807).

**A minimal server only needs 2.1.** If the WS URL is repointed to a server that works, the
fallback is never used.

### 2.3 Envelope

Client to server (BG 8927):
```json
{ "type": "<event>", "data": { ... }, "callbackId": "<16 hex chars>" | "null" }
```
`callbackId` is the **string** `"null"` when no reply is expected.

Server to client: the client dispatches on these rules, in this order (BG 8890):
1. `{"type":"userId","data":{"userId":"<id>"}}`: **must be sent right after the connection
   opens.** `getUserIdAsync()` waits up to 20 s for it, and create/join will not start without it.
   This id becomes `socketConnectionId`/`userId`, and the first time it is seen it becomes
   `permId`, which is persisted in chrome.storage (`Mo`).
2. Any message with a truthy `callbackId` resolves the pending callback with `msg.data`. Echo the
   client's callbackId: `{"type":"<same type>","callbackId":"<id>","data":{...}}`. The `type` is
   ignored on this path.
3. Anything else goes to `onMessage` and is matched on `type` (section 3.3).

An error reply is `data: { "errorMessage": "..." }`. Create, join, reboot and schedule all check
`!data || data.errorMessage` (BG 9293, 19291, 19334).

---

## 3. Events

### 3.1 Client to server (enum `nu`, BG 8534)

| type | when | data payload | expects reply |
|---|---|---|---|
| `authenticateUser` | on every socket open, **only if a Firebase user is signed in** (BG 8767) | `{ firebaseToken: <Firebase ID JWT> }` | no |
| `signIn` | method exists, rarely called | `{ token }` | no |
| `createSession` | host starts a party (BG 18838) | `{ controlLock: bool, reactionsDisabled: bool, videoId, videoDuration, videoType, serviceDomain, videoService, syncFromEnd, permId, userSettings }` | **SessionData** |
| `joinSession` | join (BG 18454 / 18519) | `{ sessionId, permId, userSettings, videoId?, videoService?, selectedProvider? }` | **SessionData** |
| `scheduleSession` | scheduled event (BG 19070) | `{ contentEventId, permId, userSettings, selectedProvider?, streamerMode?, reactionsDisabled?, videoType?, videoDuration?, title?, description?, themeId?, partyImage? }` | SessionData |
| `leaveSession` | before each create/join, and on leave (BG 18637) | `{}` | yes. The client gives up after 2 s |
| `reboot` | after a reconnect, once a new `userId` arrives (BG 9292) | the client's full cached SessionData | SessionData (or `errorMessage`, which leads to `reloadParty`) |
| `updateSession` | local play, pause, seek, or buffering (CS 11110, 11651) | `{ state: "playing"\|"paused", lastKnownTime: ms(int), lastKnownTimeUpdatedAt: ms(server clock), bufferingState: bool }` | yes (1 s timeout). Reply `{}`, or `{errorMessage:"Locked Session"}` |
| `getServerTime` | every 12.5 s plus at start (CS 11780) | `{}` | `{ serverTime: <epoch ms> }` |
| `nextEpisode` | host navigates to another episode (CS 11053) | `{ nextEpisode: <videoId>, isNextEpisode: bool, videoType?, extraInfo? }` | yes. `errorMessage:"Locked Session"` makes the client wait and revert |
| `sendMessage` | chat | `{ body: string }` | yes |
| `setTypingPresence` | typing | `{ typing: bool }` | yes |
| `setBufferingPresence` | buffering | `{ buffering: bool }` (inferred) | yes |
| `setAdsPresence` | ads | `{ watchingAds: bool }` (inferred) | yes |
| `broadcastUserSettings` | nickname or icon change (CS 8286) | `{ userSettings: { userNickname, userIcon, userIconFrame, nameColor, badge, reactions } }` | yes |
| `sendReaction` | emoji reaction | `{ reactionType: "heart"\|"angry"\|"fire"\|"laugh"\|"surprise"\|"cry" }` | yes |
| `sendGIF` | GIF | `{ gifObject: {...} }` | yes |
| `webRTC` | video chat signalling | opaque, relay it | yes |
| `selectProvider` | multi-provider live events | `{ selectedProvider }` | `{ ... }` or `errorMessage` |
| `reportStreamPosition` | every 8 s when selectedProvider != defaultProvider (CS 11920) | `{ lastKnownTime, lastKnownTimeUpdatedAt, selectedProvider }` | yes |

`userSettings` (stored locally, sent on create and join): `{ userNickname, userIcon, userIconFrame, nameColor, badge, reactions }`.

### 3.2 SessionData (reply to create, join, reboot, and schedule)

The client reads these fields (CS 11682-11714, 10489-10516; BG 9371-9395):

```jsonc
{
  "sessionId": "string",                 // required. Used in the join URL https://www.teleparty.com/join/<id>
  "videoId": "string",
  "videoService": "netflix|hulu|disney|youtube|...",
  "videoType": "string?",
  "state": "playing" | "paused",
  "lastKnownTime": 0,                    // ms. The client applies Number()
  "lastKnownTimeUpdatedAt": 0,           // epoch ms, server clock. The client applies Number()
  "controlLock": "true" | "false",       // NOTE: compared as the STRING "true"
  "reactionsDisabled": "true" | "false", // NOTE: string
  "userList": [ UserEntry ],
  "messages": [ ChatMessage | GifMessage ], // history replayed on join
  "sessionType": "scheduled"?,           // makes clients playback-only (no seek/pause authority)
  "selectedProvider": "string?", "defaultProvider": "string?",
  "providerOffsets": { "<provider>": ms }?,
  "phase": "lobby" | "live" | "ended"?
}
```
The client then overwrites `socketConnectionId` and `userId` with its own id locally, so the server
does not need to send them.

UserEntry (CS 8223): `{ permId, userSettings: {userNickname, userIcon, userIconFrame, ...}, ... }` (inferred: add `userId`/socket id).

ChatMessage (CS 6758): `{ body, permId, userIcon?, userNickname?, userIconFrame?, isSystemMessage: bool, timestamp: epoch ms, messageId: string }`.
- `messageId` is used for dedup, so make it unique.
- System messages: `body` set to `"joined"`, `"left"`, `"updated their user icon"`, with
  `isSystemMessage: true`. The UI special-cases these exact strings.

GifMessage: the same, plus `gifObject`, and without `body`.

### 3.3 Server to client pushes (type values in `onMessage`, BG 9218)

| type | data | client effect |
|---|---|---|
| `updateSession` | `{ state, lastKnownTime, lastKnownTimeUpdatedAt, providerOffsets? }` | **the core sync.** The tab seeks, plays or pauses to match |
| `jumpToNextEpisode` | `{ videoId, isNextEpisode, videoType?, extraInfo? }` | the tab loads the new video. `isNextEpisode:true` uses the next-episode flow, otherwise other-episode |
| `sendMessage` | ChatMessage | append to chat (dedup by messageId) |
| `sendGIF` | GifMessage | append |
| `sendReaction` | `{ reactionType, ... }` | float an emoji |
| `setTypingPresence` | `{ usersTyping: [userId,...] }` | the client removes its own id |
| `setBufferingPresence` | `{ usersBuffering: [userId,...] }` | same |
| `setAdsPresence` | `{ usersWatchingAds: [userId,...] }` | same |
| `updateSettings` | `{ permId, userSettings }` | updates a user's icon or nickname |
| `userList` | `[ UserEntry ]` | replace the participant list. **Send on every join and leave** |
| `userAuthenticated` | anything | informational (share-list Firebase id) |
| `webRTC` | relay | video chat |
| `partyStarted` / `partyEnded` | `{ phase?, actualStartedAt?, actualEndedAt? }` | scheduled-party phase |
| `providerOffsetsUpdated` | `{ <provider>: ms }` | multi-provider |

Note on naming: the client sends `nextEpisode` but listens for `jumpToNextEpisode`. Every other
event uses the same name in both directions.

---

## 4. Sync model (implement exactly this)

The server stores one authoritative tuple per session:
`state`, `lastKnownTime` (media ms), `lastKnownTimeUpdatedAt` (server epoch ms).

Client clock offset (CS 11780):
```
rtt      = recv - sent                      (moving avg, window 5)
offsetTi = recv - rtt/2 - serverTime        (moving avg, window 5)
```
Outgoing `lastKnownTimeUpdatedAt` is `localNow - Ti`, so it is already in server time (CS 11113).

Expected party position on the client (CS 11892-11897):
```
pos = lastKnownTime + (state=="playing" ? Date.now() - (lastKnownTimeUpdatedAt + Ti) : 0) + providerOffset
```
Correction (CS 11077): seek if `|pos - playerPos| >= Ps` (tolerance constant), and play or pause
when the state differs. Each client re-checks drift every 5 s on its own, so the server does **not**
need to tick.

**Server rules for `updateSession`:**
1. If `controlLock` is set and the sender is not the host, reply `{errorMessage:"Locked Session"}`
   and do nothing else.
2. Store `{state, lastKnownTime, lastKnownTimeUpdatedAt}`. Using `Date.now()` for
   `lastKnownTimeUpdatedAt` is also safe if you don't trust client clocks.
3. Reply `{}` to the callback.
4. Broadcast `{"type":"updateSession","data":{state,lastKnownTime,lastKnownTimeUpdatedAt}}` to
   **the other members**.

Heartbeats: the client sends `getServerTime` every 12.5 s and `ping` every 15 s. Use these to time
out dead sockets (for example after 45 s of silence), then remove the user and broadcast
`userList`.

---

## 5. Lifecycle

```
open WS
 S->C {"type":"userId","data":{"userId":U}}
 C->S authenticateUser {firebaseToken}              (only if signed in; optional for you)
 C->S leaveSession {} (cb)                          ack {}
 C->S createSession {...} (cb)                      reply SessionData (new sessionId, state=paused, lastKnownTime=0, userList=[host], messages=[])
 C->S updateSession (cb)                            host's first broadcast right after create (CS 11707)
...
joiner: open WS -> userId -> leaveSession -> joinSession {sessionId,...}
                                                    reply SessionData (current state, history)
                                                    broadcast userList + system "joined" message to the room
...
leave: leaveSession {} or socket close             remove member, broadcast userList + "left"; delete the room when empty
reconnect: new socket -> new userId -> client sends reboot {full SessionData}
                                                    re-add to room by sessionId, reply SessionData
```

How joiners get in: the share URL is `https://www.teleparty.com/join/<sessionId>`. The
teleparty.com page embeds `web/connect_bundled.js` as an iframe. That iframe accepts `postMessage`
only from `https://*.teleparty.com`, `*.tele.pe`, and `*.netflixparty.com` (connect_bundled.js
`ln()`) and relays `joinSession`/`lobbyRelayBindJoin` (`{sessionId, videoId, videoService}`) to the
background. A self-hosted setup needs **its own join path**. Either:
- patch the origin regex in `connect_bundled.js` to allow your host and serve a join page that
  embeds `chrome-extension://<id>/web/connect.html`, or
- (simpler) add a popup or content entry that calls the background's join handler (`Vo`, BG 18497)
  directly with a pasted sessionId.

---

## 6. REST API (`https://api.teleparty.com`)

Helper `Vn(path, method, authed, body, idToken, headers)` (BG 4811):
- `Accept: application/json`, plus `Content-Type: application/json` for bodies.
- If `authed` and a token is present: `Authorization: Bearer <Firebase ID token>`, with
  `credentials: omit`.
- If `authed` and no token: cookie mode (`credentials: include`) plus an `x-tp-csrf` header taken
  from `GET /session/csrf` (response `{csrf}` | `{token}` | `{data:{csrf}}`, cached in
  sessionStorage under `tp_csrf:<origin>`).

| Method | Path | Auth | Body / response | Needed for sync? |
|---|---|---|---|---|
| GET | `/feature-flags` | none | `{ <flag>: bool, ff_version }` | no. Return `{}` |
| GET | `/experiment-data` | none | `[]` | no |
| GET | `/session/csrf` | cookie | `{ csrf }` | no |
| GET | `/session/me` | bearer/cookie | `{ currentUser:{handle,...}, presence_data, ... }` | no |
| POST | `/sessionLogout` | bearer/cookie | `{}` | no |
| GET | `/subscription` | bearer | subscription info | no |
| GET | `/getUUID` | bearer | `{ uuid }` \| `{ data:{uuid} }` | no |
| GET | `/handles/me` | bearer | `{ data:{handle} }` | no |
| POST | `/handles` | bearer | create handle | no |
| PATCH | `/user/@me` | bearer/cookie | partial userSettings | no |
| POST | `/upload-profile` | bearer | profile image | no |
| POST | `/comments` | bearer | comments feature | no |
| POST | `/logging` | bearer | `{ show, streamingService, eventType: register\|party_start\|party_join\|party_end\|party_share\|party_schedule, optin?, sessionId? }` | no (analytics) |
| POST | `/events` | none | `{ eventName, success, platform:"extension", serviceName }` | no (analytics) |
| POST | `/reset-password` | none | `{ email }` | no |
| GET | `/get-join-url?title&type&release_year&episode_year&service` | none | `{ url }`. The client builds `https://www.teleparty.com${url}?sessionId=<id>` and retries every 7 s if `url` is missing | no |
| GET | `/video?session=<id>` (CS 11402, XHR) | none | `{ videoService, videoId, videoType, serviceDomain, state }`. Used to rebuild the watch URL when an episode reload fails | **useful**: serve it from room state |

Other hosts:
- `https://sessions.teleparty.com/register-share?q&locale&id`, `/search-gifs?q=`, `/trending_gifs`: GIF search and share tracking.
- `https://files.teleparty.com`: avatars and assets.
- `https://wptony1.netflixparty.com/events`, `/recent_events` (cookie): scheduled events listing.
- `https://metis.teleparty.com/v1/record`: telemetry. `https://us.i.posthog.com` (key `phc_8h1T...`): analytics.
- `https://redirect.teleparty.com/event-logger`: debug logger window.

None of these are needed for 2+ client sync. Telemetry failures are caught (`.catch(console.error)`).

---

## 7. Firebase

- **Auth (the only Firebase service the background SW actually uses)**: project `teleparty-mobile`
  (BG 754-762), apiKey `AIzaSyDvZJAoFJkT2lBrhloA0e9XwKmLgELTAeQ`, senderId `961974665980`,
  appId `1:961974665980:web:fe4179db8591331aeb8d79`. The only hosts referenced are
  `identitytoolkit.googleapis.com` and `securetoken.googleapis.com`. Sign-in is email/password or
  Google credential. The `@firebase/firestore|database|storage|...` strings are only the SDK's
  component-name registry.
- **`teleparty-auth---test`** (apiKey `AIzaSyDmxz7HsfNuhW52Mti-Q9lAGHJYOzEijb8`, senderId
  `391169153212`) appears **only** in `firebase-messaging-sw.js` (FCM v8 push for friend and drop-in
  notifications) and in the manifest CSP `frame-src`. It is not involved in auth.
- Token flow: `auth.currentUser.getIdToken()`, cached and refreshed automatically by the SDK
  (`onIdTokenChanged`, BG 15609). It is sent (a) once per socket open as `authenticateUser`, and
  (b) as a Bearer token on REST. Firebase web API keys are public identifiers, not secrets.
- **For your server:** auth is optional. The party flow works anonymously (the token is only sent
  if a user is signed in), and identity comes from the server-issued `userId`/`permId`. If you want
  verified identities, check the ID token JWT against Google's public certs with
  `aud = iss-suffix = teleparty-mobile`. No secret is needed for verification.

---

## 8. Hard-coded endpoints to repoint

| Constant | Value | Files |
|---|---|---|
| WS | `wss://ws.teleparty.com` | `background_service_bundled.js` (`s=`) |
| Socket.IO | `https://socketio.teleparty.com` | `background_service_bundled.js` |
| API | `https://api.teleparty.com` | background, popup, **every** `content_scripts/*/*_content_bundled.js` |
| Web | `https://www.teleparty.com` (join URLs, sidebar, lobby) | background, popup, content scripts |
| Sessions/GIF | `https://sessions.teleparty.com` | content scripts |
| Files | `https://files.teleparty.com` | content scripts, popup |

A plain string replace over all `*.js` is enough (for example sed `ws.teleparty.com` to your host).
`api.teleparty.com` occurs about 40 times, once per content-script bundle.

Packaging notes:
- Editing files in the Web Store install directory fails Chrome's content verification
  (`_metadata/verified_contents.json`), and Chrome will mark the extension corrupted. Copy the
  folder, delete `_metadata/`, and load it unpacked. Keep the `"key"` in the manifest so the
  extension id (`oocalimimngaihdkbihfgmpkcpnmlaoa`) stays stable, or remove it to get a new id. A
  new id matters if anything checks `chrome-extension://<id>` origins.
- `ws://` to localhost works from an MV3 service worker. The manifest CSP only restricts
  `frame-src`, `script-src` and `object-src` for extension pages.

### What the client validates (what your server must or must not satisfy)
- Create, join and reboot fail only on a falsy reply or `errorMessage`, so the response does not
  need to match a schema beyond section 3.2.
- `controlLock` and `reactionsDisabled` are enforced by the **server** (the client only reacts to
  `"Locked Session"`). Your server decides the policy.
- `video_id_detected` and `video_type_detected` validators (`Ir[service].validateVideoId`) are
  telemetry only. They never block.
- Any premium or subscription-gated UI is outside sync and was not analysed here.

---

## 9. Minimal server sketch (Node, `ws`)

```js
import { WebSocketServer } from 'ws'; import crypto from 'node:crypto';
const rooms = new Map(); // sessionId -> {hostPerm, controlLock, reactionsDisabled, videoId, videoService, videoType, serviceDomain, state, lastKnownTime, lastKnownTimeUpdatedAt, members:Map<id,{ws,permId,userSettings}>, messages:[]}
const wss = new WebSocketServer({ port: 8080 });
const send = (ws, m) => ws.readyState === 1 && ws.send(JSON.stringify(m));
const reply = (ws, type, cb, data) => cb && cb !== 'null' && send(ws, { type, callbackId: cb, data });
const bcast = (room, m, except) => room.members.forEach((u, id) => id !== except && send(u.ws, m));
const userList = r => [...r.members].map(([id, u]) => ({ userId: id, permId: u.permId, userSettings: u.userSettings }));
const snapshot = r => ({ sessionId: r.id, videoId: r.videoId, videoService: r.videoService, videoType: r.videoType,
  serviceDomain: r.serviceDomain, state: r.state, lastKnownTime: r.lastKnownTime, lastKnownTimeUpdatedAt: r.lastKnownTimeUpdatedAt,
  controlLock: String(!!r.controlLock), reactionsDisabled: String(!!r.reactionsDisabled), userList: userList(r), messages: r.messages });
const sys = (r, id, body) => { const u = r.members.get(id) || {}; const m = { body, isSystemMessage: true, permId: u.permId,
  userIcon: u.userSettings?.userIcon, userNickname: u.userSettings?.userNickname, timestamp: Date.now(), messageId: crypto.randomUUID() };
  r.messages.push(m); bcast(r, { type: 'sendMessage', data: m }); };

wss.on('connection', ws => {
  const uid = crypto.randomBytes(8).toString('hex'); let room = null;
  send(ws, { type: 'userId', data: { userId: uid } });
  const leave = () => { if (!room) return; sys(room, uid, 'left'); room.members.delete(uid);
    room.members.size ? bcast(room, { type: 'userList', data: userList(room) }) : rooms.delete(room.id); room = null; };
  const enter = (r, d) => { room = r; r.members.set(uid, { ws, permId: d.permId, userSettings: d.userSettings });
    bcast(r, { type: 'userList', data: userList(r) }, uid); sys(r, uid, 'joined'); };
  ws.on('message', raw => { let m; try { m = JSON.parse(raw); } catch { return; }
    const { type, data = {}, callbackId: cb } = m;
    switch (type) {
      case 'ping': case 'authenticateUser': return;
      case 'getServerTime': return reply(ws, type, cb, { serverTime: Date.now() });
      case 'leaveSession': leave(); return reply(ws, type, cb, {});
      case 'createSession': { const id = crypto.randomBytes(8).toString('hex');
        const r = { id, hostPerm: data.permId, ...data, state: 'paused', lastKnownTime: 0, lastKnownTimeUpdatedAt: Date.now(), members: new Map(), messages: [] };
        rooms.set(id, r); enter(r, data); return reply(ws, type, cb, snapshot(r)); }
      case 'joinSession': case 'reboot': { const r = rooms.get(data.sessionId);
        if (!r) return reply(ws, type, cb, { errorMessage: 'Session not found' });
        enter(r, data); return reply(ws, type, cb, snapshot(r)); }
    }
    if (!room) return reply(ws, type, cb, { errorMessage: 'Not in a session' });
    const locked = room.controlLock && room.members.get(uid)?.permId !== room.hostPerm; // host keyed by permId so it survives reconnects
    switch (type) {
      case 'updateSession':
        if (locked) return reply(ws, type, cb, { errorMessage: 'Locked Session' });
        Object.assign(room, { state: data.state, lastKnownTime: data.lastKnownTime, lastKnownTimeUpdatedAt: data.lastKnownTimeUpdatedAt ?? Date.now() });
        reply(ws, type, cb, {});
        return bcast(room, { type, data: { state: room.state, lastKnownTime: room.lastKnownTime, lastKnownTimeUpdatedAt: room.lastKnownTimeUpdatedAt } }, uid);
      case 'nextEpisode':
        if (locked) return reply(ws, type, cb, { errorMessage: 'Locked Session' });
        Object.assign(room, { videoId: data.nextEpisode, videoType: data.videoType ?? room.videoType, state: 'paused', lastKnownTime: 0, lastKnownTimeUpdatedAt: Date.now() });
        reply(ws, type, cb, {});
        return bcast(room, { type: 'jumpToNextEpisode', data: { videoId: data.nextEpisode, isNextEpisode: data.isNextEpisode, videoType: data.videoType, extraInfo: data.extraInfo } }, uid);
      case 'sendMessage': case 'sendGIF': { const u = room.members.get(uid);
        const msg = { ...data, permId: u.permId, userIcon: u.userSettings?.userIcon, userNickname: u.userSettings?.userNickname,
          userIconFrame: u.userSettings?.userIconFrame, isSystemMessage: false, timestamp: Date.now(), messageId: crypto.randomUUID() };
        room.messages.push(msg); reply(ws, type, cb, {}); return bcast(room, { type, data: msg }); }
      case 'sendReaction': case 'webRTC':
        reply(ws, type, cb, {}); return bcast(room, { type, data: { ...data, userId: uid } }, uid);
      case 'broadcastUserSettings': { const u = room.members.get(uid); u.userSettings = data.userSettings;
        reply(ws, type, cb, {}); return bcast(room, { type: 'updateSettings', data: { permId: u.permId, userSettings: u.userSettings } }); }
      // presence: keep per-room Sets and broadcast {usersTyping|usersBuffering|usersWatchingAds:[...]}
      default: return reply(ws, type, cb, {});
    }
  });
  ws.on('close', leave);
});
```
Also expose `GET /video?session=<id>` returning `{videoService, videoId, videoType, serviceDomain, state}`
and stub `GET /feature-flags` and `GET /experiment-data` with `{}`/`[]` so the client does not log errors.
