# Party Sync — User Guide

A watch-party tool: synchronized play / pause / seek plus chat across two
browsers, via a browser extension or a no-install web demo.

> **Current live status (verified 2026-11-01):** The clients in this project are
> wired to the **apex domain `https://pwlive.fyi`** (and `wss://pwlive.fyi`) —
> **not** `watch.pwlive.fyi`, which does not resolve and is not referenced
> anywhere in the build. At the time of writing, `pwlive.fyi` resolves to
> Firebase Hosting and is serving an **unrelated static portfolio site**, not the
> Party Sync backend. Until the Node/WebSocket server from `server/` is actually
> deployed and serving (`PRODUCTION_DEPLOYMENT.md` §1), none of the party flows
> below will work end to end. This guide documents how the system is configured
> to be used once the backend is live.

---

## 1. How to access

- **Web demo:** open `https://pwlive.fyi` in a browser. No install required.
  (When live, `GET https://pwlive.fyi/health` returns `{"ok":true,...}`.)
- **Extension:** load unpacked from
  `/Users/cultistsid/Desktop/sync-watch/production-extension` (see §4).

---

## 2. Sign up / sign in

Login is **optional** — guests can use parties without an account.

1. On `https://pwlive.fyi`, click **Log in** or **Sign up**.
2. Enter email + password (Firebase Email/Password auth).
3. The browser sends your Firebase ID token to the server as
   `authenticateUser { firebaseToken }` on connect.

Notes:
- If Firebase config has not been pasted into `server/public/firebase-config.js`,
  the demo shows **"Firebase not configured — guest mode"** and parties still work.
- The server currently **accepts `authenticateUser` without verifying it**
  (anonymous by design). Optional JWT verification is described in
  `PRODUCTION_DEPLOYMENT.md` §5.
- The **extension's own** sign-in is not re-pointed — it still targets Teleparty's
  Firebase. Use the extension for anonymous parties; use the web demo for login.

---

## 3. Create a party (web demo)

1. Open `https://pwlive.fyi` (optionally log in).
2. Load the same video as your partner: paste a direct video URL in the top box,
   or both pick the same local file.
3. Click **Create party** → a link appears: `https://pwlive.fyi/join/<id>`.
4. Send that link to the other person.
5. Play / pause / seek on either side; the other follows within ~1s. Chat fans
   out to both participants.

On-page log, when healthy, shows: `socket open`, a `clock offset …ms` line,
`in session <id>`, and — if signed in — `sent authenticateUser` then
`server accepted auth`.

---

## 4. Installing the extension

1. Open `chrome://extensions`.
2. Enable **Developer mode** (top-right).
3. **Load unpacked** →
   `/Users/cultistsid/Desktop/sync-watch/production-extension`.
4. If you have the real Teleparty extension installed, **disable it** while
   testing so two overlays don't collide.

To reload after changes: `chrome://extensions` → the extension's ↻ icon, then
reload the streaming tab.

The extension is configured for `wss://pwlive.fyi` / `https://pwlive.fyi`; its
manifest CSP `frame-src` includes `https://pwlive.fyi/`.

---

## 5. Joining from another browser / another person

**Web demo (recommended):** the other person opens your
`https://pwlive.fyi/join/<id>` link → it auto-joins.

**Extension:** join **by session id**, not by link. The host opens
extension icon → **Create a party** → **Start the party**, then copies the
session id from the "Party Management" view and sends it. The other person opens
the same video, clicks the extension icon, and pastes the session id. (The
link-based web handoff is a known gap against this backend; session-id is the
reliable path.)

Both people need their own subscription to the streaming service — this syncs
playback timing only; it does not share video content.

---

## 6. Crunchyroll-specific instructions

1. Both participants open the **same Crunchyroll episode** (same series, same
   episode) in their own logged-in Crunchyroll session.
2. Start/join the party (§3 or §5).
3. Play / pause / seek from either side; the other follows.
4. If the overlay doesn't appear: confirm the extension has host access to the
   Crunchyroll tab (it requests `*://*/*` as an optional host permission — you
   may need to grant it on first use), then reload the episode tab.
5. The in-app chat sidebar UI is served by teleparty.com and will **not** render
   against this backend — use the **web demo** for chat, or overlay reactions.

---

## 7. Troubleshooting

| Symptom | Likely cause / fix |
|---|---|
| `pwlive.fyi` shows a portfolio/404 page, not the demo | The Party Sync backend is **not deployed** at this domain yet. Deploy `server/` per `PRODUCTION_DEPLOYMENT.md` §1. |
| `watch.pwlive.fyi` doesn't load | That host is not part of this project; the clients use the **apex** `pwlive.fyi`. |
| "Firebase not configured — guest mode" | Expected until you paste real config into `server/public/firebase-config.js` (§2). Parties still work as guest. |
| Extension overlay never appears | Grant the extension host access to the tab, disable the real Teleparty extension, reload the streaming tab. |
| No sync between two clients | Confirm `GET https://pwlive.fyi/health` returns `{"ok":true}`; both must be on the same video; `wss://pwlive.fyi` must be reachable (plain `ws://` is blocked from HTTPS pages). |
| Chat doesn't show in extension | Known gap — use the web demo for chat. |
| Can't join by link in extension | Use **join by session id** instead. |

---

*For deployment and architecture details see `PRODUCTION_DEPLOYMENT.md`,
`SETUP_GUIDE.md`, and `PROTOCOL_SPEC.md` in the project root.*
