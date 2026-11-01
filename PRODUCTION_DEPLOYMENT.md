# Party Sync — Production Deployment & User Guide (pwlive.fyi)

This covers the production clients: the re-pointed extension in
`production-extension/` and the web demo in `server/public/`, both wired to the
`pwlive.fyi` backend with optional Firebase login.

> Scope / licence note unchanged from `MODIFICATION_GUIDE.md` §7: running a
> re-pointed copy against your own backend for personal use is fine;
> redistributing a rebranded build is a separate question. This guide assumes
> personal use between you and one other person.

---

## 0. What is and isn't wired up

| Piece | Status |
|---|---|
| `production-extension/` | Built from `original/`, re-pointed to `wss://pwlive.fyi` + `https://pwlive.fyi`. Manifest `key`/`update_url` dropped; CSP `frame-src` includes `https://pwlive.fyi/`. Parties work **anonymously** (the supported path). |
| Web demo (`server/public/`) | Firebase email/password login UI added (log in / sign up / log out), token sent to the server as `authenticateUser { firebaseToken }` on connect and on every refresh. Falls back to **guest mode** until you paste a real Firebase config. |
| Server auth | `authenticateUser` is **accepted but not verified** (anonymous by design). Optional JWT verification path in §5. |
| Extension Firebase login | **Not** re-pointed. The extension's own sign-in is embedded in the minified bundle and points at Teleparty's Firebase; re-wiring it is out of scope. The extension runs anonymous parties, which is all two-person use needs. Use the web demo if you want real login. |

**Prerequisite that is NOT done for you:** `pwlive.fyi` must actually be
deployed and serving (see §1). Nothing here verifies the live domain — the
clients are configured for it, but you must stand the server up and confirm it.

---

## 1. Deploy the backend to pwlive.fyi

From a VPS (see `SETUP_GUIDE.md` §8 for the full version):

1. Point a DNS A/AAAA record for `pwlive.fyi` at the VPS.
2. Open ports **80** and **443**.
3. From `server/` on the VPS:
   ```bash
   DOMAIN=pwlive.fyi docker compose up -d --build
   ```
   Caddy terminates TLS (Let's Encrypt) and proxies WebSocket upgrades to Node.
4. Verify:
   ```bash
   curl -s https://pwlive.fyi/health      # expect {"ok":true,...}
   ```
   Then open `https://pwlive.fyi` in a browser — the demo page should load.

`wss://` is mandatory off localhost: streaming sites are HTTPS and browsers
block plain `ws://` from an HTTPS page. The Caddy setup gives you `wss://` free.

---

## 2. (Optional) Turn on Firebase login for the web demo

Login is optional — guests can use parties without it. To enable it:

1. Firebase console → create a project (or reuse yours).
2. Authentication → Sign-in method → **Email/Password** → Enable.
3. Project settings → Your apps → Web app → copy the `firebaseConfig` object.
4. Paste it into **`server/public/firebase-config.js`** (replace the
   `PASTE_YOUR_*` placeholders). Redeploy.
5. Add `pwlive.fyi` under Authentication → Settings → **Authorized domains**.

Firebase web API keys are public identifiers, not secrets — shipping them in
`firebase-config.js` is expected. Until the placeholders are replaced, the demo
shows "Firebase not configured — guest mode" and parties still work.

---

## 3. Load the production extension

1. Open `chrome://extensions`.
2. Turn on **Developer mode** (top-right).
3. Click **Load unpacked** and select:
   `/Users/cultistsid/Desktop/sync-watch/production-extension`
4. If you have the real Teleparty extension from the Web Store, **disable it**
   while testing so two overlays don't fight on the same page.

To reload after any change: `chrome://extensions` → the extension's ↻ icon, and
reload the streaming tab for content-script changes.

---

## 4. Sharing with another person + invite-link flow

You have two options. For two people the **web demo is the smoother path**
because the extension's join-link web handoff isn't reproduced by this backend
(`SETUP_GUIDE.md` §6.1 — joining the extension is by session id, not by link).

### Option A — Web demo (recommended, no install)
1. Both of you open `https://pwlive.fyi`.
2. (Optional) each clicks **Log in** / **Sign up** with email + password.
3. Load the same video: paste a direct video URL in the top box, or both pick
   the same local file.
4. You click **Create party** → a party link appears:
   `https://pwlive.fyi/join/<id>`.
5. Send her that link (text/DM). She opens it → it **auto-joins**.
6. Play / pause / seek on either side; the other follows within ~1s. Chat fans
   out to both. User chips show nicknames and who is host.

### Option B — Extension (richer in-page overlay on Netflix/YouTube)
1. Send her the `production-extension/` folder (zip it) and have her load it
   unpacked via §3. Both of you must load the same folder.
2. Both open the **same video on the same service** (e.g. the same Netflix
   title you each have access to — each person still needs their own
   subscription; this only syncs playback timing, it does not share content).
3. You: extension icon → **Create a party** → **Start the party**. Copy the
   session id from the "Party Management" view.
4. She: open the same video, click the extension icon, and **join by session
   id** (paste the id you sent). The link-based handoff is the known gap; the
   session-id path is the reliable one.
5. Play/pause/seek syncs. Note the in-app chat sidebar UI is served by
   teleparty.com and won't render against this backend — use the web demo for
   chat, or the overlay reactions.

---

## 5. (Optional) Verify Firebase tokens on the server

The server currently accepts any `authenticateUser` without checking it
(anonymous). To bind parties to real identities, verify the ID token JWT in
`server/src/server.js` `authenticateUser` against Google's public certs
(`https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com`),
checking `aud === <your projectId>` and `iss === https://securetoken.google.com/<projectId>`.
No service-account secret is needed for verification. On failure, reply with an
`errorMessage` instead of `userAuthenticated`. This is additive and does not
break guest mode unless you also start rejecting tokenless sockets.

---

## 6. Quick production smoke test

```bash
curl -s https://pwlive.fyi/health
# {"ok":true,...}
```
Then open `https://pwlive.fyi` in two windows, create a party in one, open the
`/join/<id>` link in the other, and confirm play/pause/seek and chat sync. The
on-page log should show `socket open`, a `clock offset …ms` line, `in session
<id>`, and — if signed in — `sent authenticateUser` then `server accepted auth`.
```
```
