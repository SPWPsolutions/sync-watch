# Production Checklist — Party Sync (watch-party)

Last reviewed: 2026-11-01

Checklist state reflects what is verifiable from this repository. Items that
require a live environment (DNS, a running Cloud Run service, a browser) are
marked **[verify in prod]** — they cannot be confirmed from the codebase alone.

| | Item | Status | Notes |
|---|---|---|---|
| [ ] | Domain mapped and SSL working | **[verify in prod]** | Run `server/tools/monitor.sh` against the live URL. Cloud Run serves HTTPS on `*.run.app` automatically; a custom domain (`pwlive.fyi`) needs a Cloud Run domain mapping or the Caddy/VPS path in `PRODUCTION_DEPLOYMENT.md` §1. |
| [ ] | Firebase auth configured | Partial | Web client config is filled for project `wplive-prod` in `server/public/firebase-config.js`. Email/Password sign-in must be **enabled** in the Firebase console. **[verify in prod]** |
| [ ] | Authorized domains set | **[verify in prod]** | Add the serving domain under Firebase → Authentication → Settings → Authorized domains (`pwlive.fyi` and/or the `*.run.app` host). |
| [ ] | Environment variables set correctly | **[verify in prod]** | `PORT` (Cloud Run injects it; server honors `$PORT`), optional `PUBLIC_URL` (sets the `/join/<id>` link base — should be the public URL), `ROOM_TTL_MS`, `AUTH_REQUIRED`, `GOOGLE_APPLICATION_CREDENTIALS`. See DEPLOYMENT_SUMMARY.md. |
| [ ] | Server-side token verification decision made | By design | Without a service-account credential the server runs **anonymous** (tokens acked, not verified). Mount `firebase-admin-key.json` via Secret Manager and/or set `AUTH_REQUIRED=1` only if you want enforced identity. |
| [ ] | Extension tested on Crunchyroll | **[verify in prod]** | `production-extension/` is re-pointed to the prod backend. The repo ships Crunchyroll support under `production-extension/browse_scripts/` (alongside vix/hotstar/hulujp). Load unpacked and test playback sync on a real title. |
| [ ] | Web demo tested with 2 users | Partial | Automated 2-client sync test **passes** (`server/test/two-clients.test.js`, 1/1). Still do a manual 2-browser run against the live URL. **[verify in prod]** |
| [ ] | Monitoring in place | Done (tooling) | `server/tools/monitor.sh` added (health + WebSocket + SSL). Wire it into cron or a Cloud Monitoring uptime check — see DEPLOYMENT_SUMMARY.md §Monitoring. |
| [ ] | Backup procedures documented | Done | See DEPLOYMENT_SUMMARY.md §Backup & Recovery. Note: server state is **in-memory only** (rooms live in `RoomStore`); there is no persistent datastore to back up. The real backup surface is config + the Firebase admin key. |

## Pre-launch gate (do all before sharing the link)

- [ ] `curl -s https://<domain>/health` returns `{"ok":true,...}`
- [ ] `BASE_URL=https://<domain> server/tools/monitor.sh` exits 0
- [ ] Two separate browsers: create party in one, open `/join/<id>` in the other, confirm play/pause/seek + chat sync
- [ ] Firebase admin key is NOT in the container image (confirm: `grep -r secrets server/.dockerignore`)
- [ ] TLS cert has > 21 days remaining (monitor.sh reports this)
