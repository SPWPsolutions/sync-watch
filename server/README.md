# party-sync-server

A minimal self-hosted replacement for the Teleparty sync backend. It speaks the same JSON-over-WebSocket envelope as extension v5.8.7, so a re-pointed copy of the extension can create, join and sync parties against it. A built-in browser demo also syncs any `<video>` between two tabs.

```
npm install
npm start               # http://localhost:8080  (PORT, PUBLIC_URL, ROOM_TTL_MS, LOG=0)
npm test                # e2e: 3 protocol clients, create/join/sync/chat/presence/leave
```

Two-client check: open `http://localhost:8080` in two windows. Click **Start party** in the first window (YouTube link, direct video URL or local file), then open the invite link in the second window. Play, pause and seek on either side. See [Web client](#web-client) for details.

---

## 1. Architecture

| Concern | Choice | Why |
|---|---|---|
| Runtime | **Node.js 18+**, `ws` (one dependency) | The client is JS and the protocol is JSON. `ws` handles about 50k idle sockets per core. Go is the upgrade path if you need more than about 100k concurrent users. |
| Transport | Raw WebSocket (`ws://` / `wss://`) on the same port as HTTP | The extension's primary transport is plain uWS-style WebSocket. socket.io is only a fallback after 3 failed attempts. |
| State | In-memory `Map` of rooms | A party is ephemeral. Nothing has to survive a restart except at scale (see Scaling). |
| Database | **None** for the MVP | Optional: Redis for multi-node. Add Postgres only if you want accounts or scheduled parties. |
| Auth | Anonymous by default; optional Firebase ID-token verification | Per-socket `userId` on connect matches the extension's anonymous flow. When a service-account credential is present, `authenticateUser` verifies the Firebase ID token with `firebase-admin` and binds the account to the socket. See [Firebase authentication](#firebase-authentication). |

### Wire protocol (recovered from `background_service_bundled.js`)

```
client -> server   {"type": <string>, "data": {...}, "callbackId": "<n>" | "null"}
server -> client   {"type": <string>, "data": {...}}                    push
                   {"type": <string>, "data": {...}, "callbackId": "<n>"}  reply to request
on connect         {"type": "userId", "data": {"userId": "..."}}
keepalive          client sends {"type":"ping"} every 15 s
```

Important: send a reply **only** when `callbackId !== "null"`. Otherwise the client treats the ack as a push, for example as a phantom `updateSession`.

| type | dir | data (key fields) | server behaviour |
|---|---|---|---|
| `createSession` | C→S req | videoId, videoService, videoType, serviceDomain, videoDuration, permId, userSettings | new room, reply with snapshot |
| `joinSession` | C→S req | sessionId, videoId?, permId, userSettings | reply with snapshot or `{errorMessage}`; system msg "joined"; push `userList` |
| `leaveSession` | C→S | – | remove member, system msg "left", push `userList` |
| `updateSession` | both | state `playing\|paused`, lastKnownTime (**ms**), lastKnownTimeUpdatedAt (epoch ms) | store and relay to the other members |
| `getServerTime` | C→S req | – | `{serverTime}`, which the client uses for clock-offset estimation |
| `sendMessage` | both | body | stamp messageId/permId/timestamp and broadcast to **all**, sender included (the client dedupes by messageId) |
| `setBufferingPresence` / `setTypingPresence` / `setAdsPresence` | both | C→S: flag; S→C: `{usersBuffering\|usersTyping\|usersWatchingAds: [userId]}` | set membership |
| `broadcastUserSettings` → `updateSettings` | both | userSettings (nickname, icon) | update member and push `userList` |
| `userList` | S→C | `[{userId, permId, userSettings, isHost}]` | sent on every membership change |
| `nextEpisode` → `jumpToNextEpisode` | both | videoId | reset position, relay |
| `reboot` | C→S req | sessionData | re-attach after reconnect |
| `sendReaction`, `sendGIF`, `webRTC`, `selectProvider`, `reportStreamPosition` | both | opaque | relay |

Snapshot (create/join reply): `sessionId, state, lastKnownTime, lastKnownTimeUpdatedAt, providerOffsets, videoId, videoService, videoType, serviceDomain, reactionsDisabled ("true"/"false"), messages[], userList[], serverTime`.

Inferred fields, to verify against the protocol RE agent's capture: the exact presence-flag key the client sends (the server accepts `buffering|isBuffering|value`), and the precise `sendMessage` input shape.

### REST

| route | purpose |
|---|---|
| `GET /health` | liveness + room/user counts |
| `GET /api/sessions/:id` | session metadata (no chat) |
| `GET /join/:id` | party link → demo page with `?session=` |
| `* /api/*`, any `POST` | catch-all `{}` that absorbs the extension's `api.teleparty.com` calls and telemetry |

### Sync model

The server is authoritative for *last known state*, not for the clock. Every `updateSession` carries `(state, positionMs, updatedAtMs)` in server time. A receiver computes `target = pos + (serverNow − updatedAt)` while playing and seeks only if drift exceeds about 1 s. The extension already implements this, and `public/js/sync.js` mirrors it. Clock offset uses the minimum-RTT sample of the last 8 `getServerTime` round trips (NTP-style, `public/js/connection.js`).

## 2. MVP implementation

- `src/server.js` handles HTTP, WebSocket, protocol handlers, heartbeat reaping (30 s), and room GC (empty rooms live `ROOM_TTL_MS`, default 10 min, so reconnects still work).
- `src/rooms.js` holds the room model (members, playback state, last 200 messages, presence sets).
- `public/` is the production web client (see [Web client](#web-client)).
- `test/two-clients.test.js` is the e2e test: create, bad-join error, join, user list, play relay, seek/pause relay, no self-echo, late-joiner snapshot, chat fan-out, buffering presence, disconnect and host migration.

### Web client

Follows `../UI_DESIGN_SPEC.md` (original indigo-violet + teal palette, glass-morphism). Static files served by `src/server.js`, so there is **no build step**: edit and reload. `client.js` is an ES module that reuses the backend-agnostic logic modules in `public/js/`; the UI primitives in `public/components/` are plain `<script>` globals loaded first.

| file | role |
|---|---|
| `public/index.html` | markup for lobby and party views, the Invite/Chat/People sidebar tabs, the player overlay, and the auth + settings dialogs |
| `public/styles.css` | design system: brand tokens (dark default, light via OS), glass-morphism surfaces, layout, components; responsive at ≤960px and ≤560px |
| `public/animations.css` | micro-interactions: spinner, toast/message transitions, live-dot ping |
| `public/client.js` | app wiring (view layer only): views, create/join/leave, `reboot` on reconnect, chat (dedupe + optimistic send with retry + safe linkify), presence, invite/QR/share, settings, keyboard shortcuts, accounts |
| `public/js/connection.js` | `PartySocket`: envelope, callbacks with timeouts, jittered reconnect, clock sync, half-open socket detection |
| `public/js/player.js` | one media surface over `<video>` and the YouTube IFrame API |
| `public/js/sync.js` | `SyncController`: drift correction, echo classification, autoplay fallback (muted, then tap-to-start), buffering presence |
| `public/components/*.js` | reusable UI primitives exposed as window globals: `Icons`, `Toast`, `Modal`, `QR` |
| `public/firebase-config.js` | optional Firebase auth glue (guest mode when unconfigured) |

Notes:
- Video sources: YouTube (`videoService: "youtube"`, `videoId` = 11-char id), direct URL (`html5`, `videoId` = URL), local file (`local`, `videoId` = `local:<filename>`; each guest picks their own copy).
- Chat sends a client-generated `messageId` so the server echo reconciles the optimistic bubble.
- Append `?debug` to the URL to log every frame to the console and expose `window.partySync` (`socket`, `sync`, `player`, `state`).
- Identity: a random `permId` and the nickname persist in `localStorage` (`partysync.*`).

## 3. Deployment

**Local:** `npm start`. The extension can use `ws://localhost:8080`. Chrome extensions may open plain `ws://` to localhost.

**Docker / VPS** (any $4–6 VPS handles thousands of parties):
```
DOMAIN=party.example.com docker compose up -d --build
```
Caddy terminates TLS with automatic Let's Encrypt certificates and proxies WebSocket upgrades.

**Home server:** same compose file. Forward TCP 80/443 to the box. If your ISP uses CGNAT or blocks ports, use Cloudflare Tunnel or Tailscale Funnel instead; both support WebSockets.

**TLS is required** for anything that isn't localhost. Streaming sites are HTTPS, and anything the extension embeds or links to must be `https`/`wss`. Mixed content gets blocked. The service-worker socket itself tolerates `ws://`, but use `wss://` for every remote deployment.

**DNS:** one A/AAAA record (for example `party.example.com`) is enough. HTTP, the WebSocket and the join links all share one origin. With Cloudflare proxy turned on, WebSockets work on the free plan, and idle connections are kept alive by the 15 s client ping.

## 4. Client modifications

`npm run patch-extension -- ../original ../patched-extension https://party.example.com`

This writes a **copy**; `original/` is never modified. Rewrites (counts from v5.8.7):

| constant | occurrences | replaced with |
|---|---|---|
| `wss://ws.teleparty.com` | 38 | `wss://<host>` (primary socket, `createSocketForTab`) |
| `https://socketio.teleparty.com` | 1 | your origin. We don't serve socket.io, so the fallback just fails and the client cycles back to WS. To support it, add `socket.io` on the same server and wrap the `message` event. |
| `https://api.teleparty.com` | 90 | `<origin>/api` (catch-all stubs) |
| `https://www.teleparty.com` | 87 | your origin, which builds party links `<origin>/join/<id>` |
| `https://sessions.teleparty.com` | 44 | your origin |
| telemetry (`metis`, `data3.netflixparty`, `redirect/event-logger`) | 4 | `<origin>/api/telemetry`, swallowed |

Manifest changes: `key`, `update_url` and `_metadata/` are dropped so it loads as an independent unpacked extension (`chrome://extensions` → Developer mode → Load unpacked). Your origin is also added to the `frame-src` CSP and `web_accessible_resources`.

**Auth:** the anonymous party flow needs no Firebase. Logged-in features (account, premium-gated UI, icons synced to an account) still call `teleparty-mobile.firebaseapp.com` directly. Options:
1. Leave them alone. Anonymous parties work.
2. Self-host Firebase (done — see [Firebase authentication](#firebase-authentication)): swap the `apiKey/authDomain/projectId/appId` config in `background_service_bundled.js` for the `wplive-prod` values in `public/firebase-config.js`. The server already verifies the resulting ID tokens in `authenticateUser`.
3. Replace with your own OIDC (for example Authelia or Keycloak). This is the most work, because the popup's React sign-in flow is wired to the Firebase SDK.

## Firebase authentication

The watch-party identity layer runs on Firebase project **`wplive-prod`** (project number `4793179589`, GCIP / Identity Platform tier). Anonymous parties keep working with no changes; Firebase only adds a verified account identity on top.

### What is provisioned

| Piece | Value / location |
|---|---|
| Project | `wplive-prod` |
| Web API key | `AIzaSyBsS8sFeOtFcE-QhRsct16KI-n73QkI02I` (public identifier, safe to ship) |
| Auth domain | `wplive-prod.firebaseapp.com` |
| Web app id | `1:4793179589:web:ea7df133928bc47a23ffac` (`wplive-web`) |
| Client config | `public/firebase-config.js` (committed; web keys are not secrets) |
| Admin credential | `secrets/firebase-admin-key.json` (**gitignored** — service-account private key, server-only) |
| Sign-in providers | Email/Password **enabled**; Google **pending** (manual step below) |
| Authorized domains | `localhost`, `wplive-prod.firebaseapp.com`, `wplive-prod.web.app`, `pwlive.fyi`, `www.pwlive.fyi` |

### How the auth flow works

1. The web client (`public/firebase-config.js` + `client.js`) signs the user in with the Firebase JS SDK (email/password) and obtains an **ID token** (a short-lived, Google-signed JWT), refreshed hourly.
2. On every sign-in / refresh, the client sends `authenticateUser { firebaseToken }` over the WebSocket.
3. The server's `authenticateUser` handler (`src/server.js`) calls `firebase-admin`'s `verifyIdToken()`. On success it binds `ws.auth = { uid, email, emailVerified, name, picture }` and replies `userAuthenticated { authenticated: true, uid, email }`; on failure it replies `{ authenticated: false, error: "invalid_token" }` and the socket stays anonymous.
4. An authenticated socket's room `permId` becomes the stable Firebase `uid` instead of the ephemeral per-connection id, so identity persists across reconnects.

Verification is **enabled only when a credential is found**: `GOOGLE_APPLICATION_CREDENTIALS`, otherwise `secrets/firebase-admin-key.json`. With no credential the server logs `running anonymous` and acks tokens without verifying (dev/CI parity). Set `AUTH_REQUIRED=1` to reject `createSession`/`joinSession` from any socket that has not presented a valid token.

### Running with auth

```bash
# credential auto-discovered at secrets/firebase-admin-key.json
npm start
# or point at a key elsewhere, and require auth for every party:
GOOGLE_APPLICATION_CREDENTIALS=/secure/path/key.json AUTH_REQUIRED=1 npm start
```

In Docker, mount the key read-only and export the env var, e.g. `-v /secure/key.json:/run/key.json:ro -e GOOGLE_APPLICATION_CREDENTIALS=/run/key.json`. Never bake the key into the image (`secrets/` is in `.dockerignore`/`.gitignore`).

### Adding users

- **Self-service:** the client calls `PartyAuth.signUp(email, password)` (wired in `public/firebase-config.js`); anyone on an authorized domain can register.
- **Admin, CLI:** `firebase-admin` — `getAuth().createUser({ email, password, displayName })`.
- **Admin, console:** Firebase console → Authentication → Users → *Add user*.
- **Disable self-service** (invite-only): Firebase console → Authentication → Settings → *User actions* → uncheck *Enable create (sign-up)*.

### Remaining manual step — Google sign-in

Google sign-in needs an OAuth 2.0 web client, which cannot be minted from the CLI for a consumer (non-Workspace) project. Enable it in two clicks: Firebase console → Authentication → Sign-in method → **Google** → Enable → pick a support email → Save. Firebase auto-creates the OAuth client and wires it into the Identity Platform config; `public/firebase-config.js` needs no change. (Email/Password was enabled programmatically and already works.)

### Security rules / hardening

- **Admin key is god-mode.** `secrets/firebase-admin-key.json` bypasses all rules. Keep it gitignored, `chmod 600`, out of images and logs. Rotate with `gcloud iam service-accounts keys create/delete` if it leaks.
- **Web API key is not a secret** — it only identifies the project. Abuse is contained by the authorized-domain allowlist (above) and, optionally, Firebase App Check.
- **Firestore:** not provisioned (the server keeps rooms in-memory; token verification does not need it). If you later add per-user data, create a DB (`gcloud firestore databases create --location=nam5 --project wplive-prod`) and ship **deny-by-default** rules — `allow read, write: if request.auth != null && request.auth.uid == resource.id;` — never leave it in test/open mode.
- **Require verified email** before granting premium features: check `ws.auth.emailVerified` server-side.
- **Trust the server, not the client:** `permId`/identity decisions use the verified `uid` from `verifyIdToken`, never a client-supplied id.

**Known gap: join-link handoff.** On the real service, `www.teleparty.com/join/<id>` is a web page that resolves the session and hands it to the extension through the web-accessible `web/connectFrame.html` / `connect_bundled.js`. That frame protocol hasn't been reversed yet. Until it is, `/join/:id` lands on the demo page. To use it with the extension, the joiner opens the same video and enters the party from the popup, or the RE agent documents the connectFrame message format and `/join/:id` is extended to iframe `chrome-extension://<id>/web/connectFrame.html`.

## Scaling

| Stage | Load | Change |
|---|---|---|
| 1 | ≤ ~20k sockets | Single process as-is. Raise `ulimit -n`. |
| 2 | multi-core / HA | Run N processes behind a load balancer with **sticky routing by sessionId** (hash `?session=` or a join-time redirect to `node-<k>.host`). Rooms never span nodes, so you need no shared state beyond a `sessionId → node` map in Redis. |
| 3 | rooms span nodes | Move `RoomStore` to Redis: room hash (state, lastKnownTime…), members set, capped chat list (`LTRIM 200`), and per-room Redis pub/sub channel (`room:<id>`) for `broadcast()`. Each node subscribes to channels for rooms its sockets are in. |
| 4 | >100k sockets | Port the hot path to Go (`nhooyr/websocket`) or uWebSockets.js. Shard by sessionId hash. |

Other operational notes:
- Add per-socket rate limiting, for example 20 msg/s on `updateSession`, plus a cap on rooms per IP.
- Add Prometheus metrics: sockets, rooms, msgs/s, and handler latency.
- Graceful deploys: on SIGTERM, stop accepting connections and close sockets with code 1012. The client's reconnect/`reboot` path re-attaches, so set `ROOM_TTL_MS` higher than the restart time. For zero loss across restarts, persist rooms in Redis (stage 3).
