# Party Sync — Setup, Usage & Deployment Guide

A self-hosted watch-party backend (`server/`) plus a re-pointed copy of the
Teleparty 5.8.7 extension (`patched-extension/`). The server speaks the same
JSON-over-WebSocket protocol as the extension, so a re-pointed extension can
create, join and sync parties against your own backend instead of
`teleparty.com`. A built-in browser demo (`server/public/`) syncs any HTML5
`<video>` between two tabs without the extension at all.

> Scope / licence note: the extension bundles carry a WP Interactive Media
> copyright header. Running a re-pointed copy against your own backend for
> personal use is one thing; redistributing a rebranded build is another. See
> `MODIFICATION_GUIDE.md` §7.

---

## 0. What was tested (and what wasn't)

Verified on this machine (macOS, Node v22.17.0, 2026-11-01):

- `npm test` in `server/` — e2e protocol suite passes (1/1).
- Live server: `GET /health` returns `{ ok: true, ... }`.
- Live two-client WebSocket run against a running instance — **15/15 checks pass**:
  create session, party-link generation (`/join/<id>`), join (good + bad id →
  `errorMessage`), `userList` push, system "joined" message, play relay,
  no self-echo, seek/pause relay, chat fan-out (incl. echo to sender),
  buffering presence relay, late-joiner snapshot (playback position + chat
  history), and membership shrink on disconnect.
- `GET /join/<id>` → `302` redirect to `/?session=<id>`.
- `patched-extension/` is already re-pointed at `http://localhost:8080`:
  primary socket rewritten to `ws://localhost:8080`, **zero** residual
  `ws.teleparty.com` references, and manifest `key`/`update_url` dropped so it
  loads as an independent unpacked extension.

**Not executed here (requires manual Chrome steps + a human at the keyboard):**
loading the unpacked extension in two real Chrome windows and driving the popup
on Netflix/YouTube. The protocol substrate the extension rides on is fully
verified above; the extension-level walkthrough in §2 is the procedure to run,
and §6 documents the one known gap (join-link handoff). The **demo page in §1
is a complete, self-contained end-to-end sync test** you can run right now.

---

## 1. Quick start — browser demo (no extension needed)

This is the fastest way to confirm sync works end to end.

```bash
cd server
npm install
npm start            # http://localhost:8080
```

1. Open `http://localhost:8080` in **two** browser windows (or two tabs).
2. Both windows load the same sample video by default (Big Buck Bunny). You can
   paste any direct video URL in the top box, or pick a local file.
3. In window 1, click **Create party**. A session id appears in the `session
   id` box and a party link appears below.
4. In window 2, either:
   - paste the session id into the `session id` box and click **Join**, **or**
   - open the party link (`http://localhost:8080/join/<id>`) — it auto-joins.
5. Play, pause and seek in **either** window. The other follows within ~1s.
6. Type in the chat box and click **Send** — messages fan out to both windows
   (including the sender). The user chips show nicknames and who is host.

What you should see in the on-page log: `socket open`, a `clock offset …ms`
line (NTP-style offset from 5 `getServerTime` samples), `in session <id>`, and
`remote playing/paused @ <t>s` lines when the other side acts.

Env vars for `npm start`: `PORT` (default 8080), `HOST` (default 0.0.0.0),
`PUBLIC_URL` (used to build party links; default `http://localhost:<PORT>`),
`ROOM_TTL_MS` (empty-room GC, default 10 min), `LOG=0` to silence logs.

---

## 2. Using the actual extension

The extension gives you the real in-page overlay/chat UX on Netflix, YouTube,
etc. The patched copy is already built and pointed at `http://localhost:8080`.

### 2a. Load it

1. Start the server (`cd server && npm start`).
2. Open `chrome://extensions`.
3. Toggle **Developer mode** (top-right) on.
4. Click **Load unpacked** and select the
   `/Users/cultistsid/Desktop/sync-watch/patched-extension` folder.
5. If you also have the real Teleparty extension installed from the Web Store,
   **disable it** while testing — otherwise two overlays fight on the same page.

> `patched-extension/` is a re-pointed copy; `original/` is never touched. To
> re-point at a different backend, re-run the patch tool (§4).

### 2b. Create a party (window 1)

1. Open a supported streaming page and start a video (e.g. a YouTube video, or
   a Netflix title you have access to).
2. Click the extension icon → **Create a party** → **Start the party**.
3. Copy the party link / session id from the in-session ("Party Management")
   view.

### 2c. Join a party (window 2) — read §6 first

Because the join-link **web** handoff page is not reproduced by this backend
(see §6), the reliable join path is:

1. In the second Chrome window, **open the same video** (same service) that the
   host is watching.
2. Click the extension icon. In the popup, enter/join the party using the
   **session id** the host shared.
3. If the popup offers only "create", the join-by-id entry point is the
   workaround path — paste the session id as documented in §6.

### 2d. Sync & chat

Once both sides are in the session: play / pause / seek in either window and
the other follows. The sync model is position + timestamp in server time; a
receiver only hard-seeks when drift exceeds ~1s (see §5). Chat uses the
extension's sidebar — note the **inner chat UI is served remotely by
teleparty.com and is not reproduced locally** (see §6 limitations). The
server-side chat *relay* works (verified), so a custom/local chat client (like
the demo page) exchanges messages fine; the extension's remote sidebar iframe
is the part that won't render against a local backend.

---

## 3. How to start / check the server

```bash
cd server
npm install        # once
npm start          # foreground
```

Health check (is it running?):

```bash
curl -s http://localhost:8080/health
# {"ok":true,"rooms":<n>,"users":<n>,"uptime":<s>}
```

Session lookup (metadata, no chat):

```bash
curl -s http://localhost:8080/api/sessions/<id>
```

Run the test suites:

```bash
npm test           # e2e protocol suite
```

---

## 4. Re-pointing the extension at a different backend

```bash
cd server
# usage: node tools/patch-extension.js <srcDir> <outDir> <publicUrl>
node tools/patch-extension.js ../original ../patched-extension http://localhost:8080
# or for a deployed backend:
node tools/patch-extension.js ../original ../patched-extension https://party.example.com
```

This writes a **copy** (original/ is never modified) and rewrites, per v5.8.7:

| constant | rewritten to |
|---|---|
| `wss://ws.teleparty.com` (primary socket) | `ws(s)://<host>` |
| `https://socketio.teleparty.com` (fallback) | `<publicUrl>` (we don't serve socket.io; it fails and the client cycles back to WS) |
| `https://api.teleparty.com` | `<publicUrl>/api` (catch-all stubs) |
| `https://www.teleparty.com` | `<publicUrl>` (party links `<publicUrl>/join/<id>`) |
| `https://sessions.teleparty.com` | `<publicUrl>` |
| telemetry hosts | `<publicUrl>/api/telemetry` (swallowed) |

It also drops manifest `key` / `update_url` / `_metadata/` and adds your origin
to the `frame-src` CSP and `web_accessible_resources`. After re-pointing,
reload the unpacked extension (§7).

---

## 5. How sync actually works (mental model)

- The server is authoritative for *last known state* (`state`, `positionMs`,
  `updatedAtMs`), **not** for the wall clock.
- Each client estimates a clock offset against the server using the minimum RTT
  of 5 `getServerTime` samples (NTP-style).
- On every `updateSession` the server re-stamps the timestamp with its own
  clock and relays to the other members (never echoes to the sender).
- A receiver computes `target = positionMs + (serverNow − updatedAt)` while
  playing and only hard-seeks when drift > ~1s, so small jitter doesn't cause
  constant seeking.
- `lastKnownTime` is in **milliseconds**.
- Rooms are in-memory; empty rooms survive `ROOM_TTL_MS` (default 10 min) so
  reconnects/`reboot` re-attach. Nothing persists across a server restart
  unless you add Redis (see §9).

---

## 6. Known limitations

1. **Join-link web handoff is not reproduced.** On the real service,
   `www.teleparty.com/join/<id>` is a web page that resolves the session and
   hands it to the extension via the web-accessible `web/connectFrame.html` /
   `connect_bundled.js`. That frame protocol has not been reversed. Against
   this backend, `/join/<id>` redirects to the **demo** page, not into the
   extension. **Workaround for the extension:** the joiner opens the same video
   and joins by **session id** from the popup. (The demo page's join link works
   fully — the limitation is specific to the extension handoff.)
2. **The in-app chat sidebar UI is remote.** `CHAT_URL =
   https://www.teleparty.com/sidebar?...` — the chat *interface* is served by
   teleparty.com and can't render against a local backend. The server's chat
   *relay* (`sendMessage`) works and is verified; use the demo page or a custom
   client to exercise it, or reconstruct the sidebar UI yourself.
3. **socket.io fallback is intentionally absent.** The extension's primary
   transport is raw WebSocket; socket.io is only a fallback after 3 failed WS
   attempts. We don't serve it, so the fallback just fails and the client
   cycles back to WS. To support it, add a socket.io endpoint on the same
   origin.
4. **Auth is anonymous.** `authenticateUser` (Firebase token) is accepted and
   acknowledged but not verified. Anonymous parties work with no Firebase.
   Logged-in/premium features still call `teleparty-mobile.firebaseapp.com`
   directly (see README "Auth" for self-hosting options).
5. **No persistence / single process.** Fine up to ~20k sockets. Beyond that,
   see §9.
6. **TLS required for anything non-localhost.** Streaming sites are HTTPS;
   mixed `ws://` content from an HTTPS page is blocked. Use `wss://` for every
   remote deployment (§8). Chrome *does* allow a plain `ws://` to localhost.

---

## 7. Troubleshooting

### Reload the extension after changes
`chrome://extensions` → find the unpacked extension → click the **↻ reload**
icon. For content-script/CSS changes, also **reload the streaming tab**. For
popup changes, reopen the popup.

### Inspect the extension
- **Popup:** right-click the popup → **Inspect**.
- **Service worker (background):** on `chrome://extensions`, click the
  extension's **service worker** link to open its DevTools console.
- **Content script:** open DevTools on the streaming tab itself.

### Check the server is running
```bash
curl -s http://localhost:8080/health      # expect {"ok":true,...}
lsof -iTCP:8080 -sTCP:LISTEN               # is something bound to 8080?
```
If `/health` fails: is `npm start` still running? Check its log. Port already in
use → change `PORT` or kill the old process.

### Check the WebSocket connection
- In the **service worker** console (extension) or the **demo page** console,
  look for the socket opening. The demo logs `socket open` and a `clock offset`
  line on success.
- DevTools → **Network** → **WS** filter → select the socket → **Messages** tab
  to watch frames. You should see `userId` on connect, periodic `ping`, and
  `updateSession` frames when someone plays/pauses/seeks.
- Quick raw check from a terminal:
  ```bash
  cd server
  node -e 'const W=require("ws");const w=new W("ws://localhost:8080");w.on("message",m=>{console.log(""+m);process.exit(0)});'
  # expect: {"type":"userId","data":{"userId":"..."}}
  ```

### Common errors & fixes

| Symptom | Cause | Fix |
|---|---|---|
| "This party does not exist or has ended." | wrong/expired session id, or server restarted (in-memory rooms) | re-create the party; keep the server up; raise `ROOM_TTL_MS` |
| Socket keeps reconnecting (`socket closed, reconnecting in 1s`) | server down, wrong host, or TLS mismatch | start server; verify host; use `wss://` from HTTPS pages |
| Playback doesn't follow | receiver not actually in the session, or drift under threshold | confirm both in session (user chips), check WS Messages for `updateSession` |
| "autoplay blocked: click play" (demo) | browser autoplay policy | click play once in that tab to grant gesture |
| Two overlays on the streaming page | store copy + unpacked copy both enabled | disable the Web Store Teleparty while testing |
| Extension won't load / "could not load manifest" | wrong folder selected | select `patched-extension/` (the folder with `manifest.json`), not its parent |
| Mixed-content block in console | `ws://` from an `https://` page | deploy with `wss://` (§8) |
| Chat sidebar is blank in the extension | inner chat UI is remote (teleparty.com) | expected — see §6.2 |

---

## 8. Deploying to a VPS (remote access + HTTPS/WSS)

The repo ships Docker + Caddy for automatic TLS. HTTP, the WebSocket and join
links all share one origin, so you only need one DNS record.

### Docker Compose (recommended)

1. Point a DNS A/AAAA record (e.g. `party.example.com`) at the VPS.
2. Open ports **80** and **443** on the VPS firewall.
3. On the VPS, from `server/`:
   ```bash
   DOMAIN=party.example.com docker compose up -d --build
   ```
   Caddy terminates TLS (automatic Let's Encrypt) and proxies WebSocket
   upgrades to the Node process. Any $4–6 VPS handles thousands of parties.
4. Re-point the extension at the public origin and reload (§4):
   ```bash
   node tools/patch-extension.js ../original ../patched-extension https://party.example.com
   ```
5. Verify: `curl -s https://party.example.com/health`.

### Why WSS / HTTPS is mandatory off localhost
Streaming sites are HTTPS. A browser blocks a plain `ws://` opened from an
HTTPS page (mixed content). Use `wss://` everywhere remote — the Caddy setup
gives you that for free. `ws://localhost` is the only exception Chrome allows.

### Making it reachable from outside localhost

- **Bind address:** the server already binds `0.0.0.0`, so it listens on all
  interfaces. Set `PUBLIC_URL` to the externally reachable origin so party
  links are correct, e.g. `PUBLIC_URL=https://party.example.com`.
- **Home server / behind CGNAT:** forward TCP 80/443 to the box. If your ISP
  uses CGNAT or blocks ports, use **Cloudflare Tunnel** or **Tailscale Funnel**
  — both support WebSockets. With Cloudflare's proxy on, WS works on the free
  plan; the 15s client ping keeps idle connections alive.
- **DNS:** one A/AAAA record is enough; everything shares one origin.

### Manual (no Docker) with your own reverse proxy
Run `PORT=8080 PUBLIC_URL=https://party.example.com node src/server.js` behind
nginx/Caddy configured to (a) terminate TLS and (b) pass the WebSocket
`Upgrade`/`Connection` headers through to `127.0.0.1:8080`. Keep the process up
with `systemd` or `pm2`.

---

## 9. Scaling (when one process isn't enough)

| Stage | Load | Change |
|---|---|---|
| 1 | ≤ ~20k sockets | single process as-is; raise `ulimit -n` |
| 2 | multi-core / HA | N processes behind an LB with **sticky routing by sessionId**; `sessionId → node` map in Redis |
| 3 | rooms span nodes | move `RoomStore` to Redis (room hash, members set, capped chat `LTRIM 200`, per-room pub/sub for `broadcast()`) |
| 4 | >100k sockets | port the hot path to Go (`nhooyr/websocket`) or uWebSockets.js; shard by sessionId hash |

Operational: add per-socket rate limiting (e.g. 20 msg/s on `updateSession`,
cap rooms per IP), Prometheus metrics (sockets, rooms, msgs/s, handler
latency), and graceful SIGTERM draining (close with 1012; the client's
`reboot` path re-attaches, so set `ROOM_TTL_MS` > restart time).

---

## 10. File map

| Path | What |
|---|---|
| `server/src/server.js` | HTTP + WebSocket + protocol handlers, heartbeat reaper, room GC |
| `server/src/rooms.js` | room model (members, playback state, last 200 messages, presence sets) |
| `server/public/` | reference HTML5 demo client (`index.html`, `client.js`) |
| `server/test/two-clients.test.js` | e2e protocol test |
| `server/tools/patch-extension.js` | re-points a copy of the extension at your backend |
| `server/Dockerfile`, `docker-compose.yml`, `Caddyfile` | deployment |
| `patched-extension/` | extension already re-pointed at `http://localhost:8080` |
| `original/` | untouched copy of the installed extension |
| `PROTOCOL_SPEC.md` | full wire-protocol reference |
| `MODIFICATION_GUIDE.md` | extension UI/branding customization |
