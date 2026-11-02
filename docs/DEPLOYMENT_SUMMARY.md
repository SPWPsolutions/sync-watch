# Deployment Summary — Party Sync (watch-party)

Last updated: 2026-11-01 · Integration tests: **passing** (1/1, `server/test/two-clients.test.js`)

> **Deployment-target note.** Two deployment paths exist in this repo and they
> disagree on specifics; both are documented so you can pick one:
> - **Cloud Run** (`watch-party` / project `wplive-prod` / `us-central1`) — the
>   target referenced by the ops tasks. The `server/` container listens on
>   `$PORT` and serves `/health`, so it is Cloud-Run-ready, but **this repo
>   contains no `gcloud`/Cloud Run deploy manifest and the live service state
>   cannot be confirmed from here.**
> - **VPS + Docker Compose + Caddy** at `pwlive.fyi` — the fully wired path in
>   `PRODUCTION_DEPLOYMENT.md` and `server/docker-compose.yml`.
>
> Values below marked **[confirm]** are the intended target per the tasks and
> must be verified against the actual running environment.

---

## URLs

| Purpose | URL |
|---|---|
| Production (custom domain, VPS path) | `https://pwlive.fyi` |
| Production (Cloud Run) | `https://watch-party-<hash>-uc.a.run.app` **[confirm]** |
| Health check | `<base>/health` → `{"ok":true,"rooms":N,"users":N,"uptime":S}` |
| Session lookup API | `<base>/api/sessions/<id>` |
| Party join link | `<base>/join/<id>` (302 → `/?session=<id>`) |
| Web demo client | `<base>/` |
| Logs (Cloud Run) | `https://console.cloud.google.com/run/detail/us-central1/watch-party/logs?project=wplive-prod` |
| Admin consoles | GCP: `console.cloud.google.com` (project `wplive-prod`) · Firebase: `console.firebase.google.com/project/wplive-prod` |

There is **no separate admin app**. "Admin" = the GCP + Firebase consoles above.

---

## Credentials — where they live (no secret values in this doc)

| Credential | Location | Notes |
|---|---|---|
| Firebase **admin** service-account key | `server/secrets/firebase-admin-key.json` | project `wplive-prod`, SA `firebase-adminsdk-fbsvc@wplive-prod.iam.gserviceaccount.com`. Perms `600`, dir `700`. **Gitignored + dockerignored — NOT in git, NOT in the image.** Enables server-side ID-token verification when present. |
| Firebase **web** config (public) | `server/public/firebase-config.js` | `apiKey`, `authDomain`, `projectId: wplive-prod`, etc. These are public identifiers, safe to ship. |
| GCP / Firebase console access | Google account that owns project `wplive-prod` | Not stored in repo. |

**For Cloud Run:** do **not** bake the admin key into the image. Store it in
Secret Manager and expose it as a mounted file, then point
`GOOGLE_APPLICATION_CREDENTIALS` at the mount path:

```bash
gcloud secrets create firebase-admin-key --project=wplive-prod \
  --data-file=server/secrets/firebase-admin-key.json

gcloud run services update watch-party --region=us-central1 --project=wplive-prod \
  --update-secrets=/secrets/firebase-admin-key.json=firebase-admin-key:latest \
  --set-env-vars=GOOGLE_APPLICATION_CREDENTIALS=/secrets/firebase-admin-key.json
```

With no credential mounted the server stays **anonymous by design** (tokens
acked, not verified) — which is the supported two-person flow.

---

## Service configuration

| Setting | Value / source |
|---|---|
| Runtime | Node 22 (alpine), `node src/server.js` |
| Listen port | `$PORT` (default 8080); Cloud Run injects `$PORT` |
| Container user | non-root `node` |
| Container healthcheck | `wget /health` every 30s (Dockerfile) |
| Room state | **In-memory** (`server/src/rooms.js` `RoomStore`) — not persisted |
| Empty-room TTL | `ROOM_TTL_MS`, default 10 min |
| WebSocket | `ws` library, `maxPayload` 256 KiB, 30s ping/reap |
| Auth enforcement | `AUTH_REQUIRED=1` forces valid token before create/join (default off) |

### Environment variables

| Var | Default | Purpose |
|---|---|---|
| `PORT` | 8080 | Listen port (Cloud Run sets this). |
| `HOST` | 0.0.0.0 | Bind address. |
| `PUBLIC_URL` | `http://localhost:$PORT` | **Set to the public https URL** so `/join/<id>` links are correct. |
| `ROOM_TTL_MS` | 600000 | How long empty rooms survive for reconnects. |
| `AUTH_REQUIRED` | unset | `1` = reject tokenless create/join. |
| `GOOGLE_APPLICATION_CREDENTIALS` | unset | Path to admin key; enables token verification. |
| `LOG` | on | `0` disables request logging. |

> **Cloud Run architectural caveat (important).** Room state is held in process
> memory. For a watch-party backend on Cloud Run you must pin
> `--min-instances=1 --max-instances=1` (or add session affinity + a shared
> store), otherwise rooms vanish on scale-to-zero/cold-start and two users can
> land on different instances that don't share any room. WebSocket connections
> are long-lived: raise `--timeout` toward the 3600s max and expect to be billed
> for connection duration. The VPS/Caddy path does not have this split-brain
> issue because it is a single long-running process.

---

## DNS records

VPS path (`PRODUCTION_DEPLOYMENT.md` §1):
- `pwlive.fyi` → `A`/`AAAA` → VPS IP; ports 80 + 443 open (Caddy + Let's Encrypt).

Cloud Run custom domain (if used instead):
- Create a domain mapping (`gcloud run domain-mappings create --service=watch-party --domain=pwlive.fyi --region=us-central1`), then add the `CNAME`/`A`/`AAAA` records Google returns. Google manages the certificate.

**[confirm]** which path is live; they are mutually exclusive for a given domain.

---

## Monitoring

### View logs (Cloud Run)
```bash
gcloud run services logs read watch-party \
  --region=us-central1 \
  --project=wplive-prod \
  --limit=50
```
Add `--format=json` for parsing, or tail recent entries via Logs Explorer:
```bash
gcloud logging read \
  'resource.type=cloud_run_revision AND resource.labels.service_name=watch-party AND severity>=ERROR' \
  --project=wplive-prod --limit=50 --freshness=1h
```

### Log-based alerting
Create a log-based metric on errors, then an alert policy on it:
```bash
gcloud logging metrics create watchparty_errors --project=wplive-prod \
  --description="Party server error logs" \
  --log-filter='resource.type=cloud_run_revision AND resource.labels.service_name=watch-party AND severity>=ERROR'
```
Then in Cloud Monitoring (console → Alerting → Create policy) alert when
`logging/user/watchparty_errors` rate > 0 over 5 min, notifying the contact
below. An **uptime check** on `<base>/health` (expecting substring `"ok":true`)
with an alert on failure is the single highest-value monitor — add it under
Monitoring → Uptime checks.

### Metrics to watch (Cloud Run → Metrics tab)
- **Request count** — baseline traffic; sudden drop = outage.
- **Request latency** (p50/p95/p99) — WS upgrade + REST; p95 creeping up = saturation.
- **Container instance count** — should sit at the `min-instances` floor; spikes mean scaling (and the split-brain risk above).
- **Error rate / 5xx** — tie to the log-based metric.
- **Memory & CPU utilization** — in-memory rooms grow with concurrent parties.
- **Container startup latency** — cold starts hurt first-join experience.

### Local / external probe
`server/tools/monitor.sh` checks `/health`, the WebSocket `userId` handshake,
and TLS expiry in one shot (exit 0 = healthy). Run from cron or an external
pinger:
```bash
BASE_URL=https://pwlive.fyi /path/to/server/tools/monitor.sh
# cron, every 5 min:
*/5 * * * * BASE_URL=https://pwlive.fyi /path/to/server/tools/monitor.sh >> /var/log/partysync-monitor.log 2>&1
```

---

## Backup & Recovery

**What there is to back up:** this server keeps **no persistent data** — all
party/room state is in memory and intentionally ephemeral (empty rooms expire
in ~10 min). There is no database. The backup surface is therefore:
1. **Source** — this repository (keep it in version control / a remote).
2. **The Firebase admin key** — `server/secrets/firebase-admin-key.json`. Back
   it up to a password manager / Secret Manager. If lost, mint a new key in the
   Firebase console (Project settings → Service accounts → Generate new key) and
   revoke the old one.
3. **Config** — `server/public/firebase-config.js` and the env-var set above.

### Rollback a deployment
- **Cloud Run** (zero-downtime, revisions are immutable):
  ```bash
  gcloud run revisions list --service=watch-party --region=us-central1 --project=wplive-prod
  gcloud run services update-traffic watch-party --region=us-central1 --project=wplive-prod \
    --to-revisions=<previous-revision>=100
  ```
- **VPS/Docker**: redeploy the previous image/commit:
  ```bash
  cd server && git checkout <previous-commit> && DOMAIN=pwlive.fyi docker compose up -d --build
  ```

### Restore from backup
- Restore the repo, drop the backed-up `firebase-admin-key.json` into
  `server/secrets/` (or Secret Manager), restore env vars, redeploy. No data
  import step exists because there is no datastore.

### Emergency procedures
- **Server down / unhealthy:** `monitor.sh` fails → check logs (command above)
  → if a bad revision, roll back traffic to the last good revision (instant).
- **Suspected key leak:** revoke the service-account key in the Firebase console,
  generate a new one, update Secret Manager, redeploy. Rotate the Firebase web
  API key only if abused (it is public by design; restrict it by HTTP referrer
  and API in GCP → Credentials instead).
- **Abuse / overload:** set `AUTH_REQUIRED=1` to require sign-in, and/or lower
  `--max-instances` / add Cloud Armor rate limiting in front.
- **Total loss:** redeploy from repo (steps in "Restore from backup").

### Contact
- Owner / on-call: **siddheyav2@gmail.com** (project `wplive-prod` owner).
- Escalation: GCP Support (if a support plan is attached to the billing account).

> Update the contact block with the real on-call rotation before launch.

---

## Cost estimation (GCP)

This is a tiny two-person service; expected cost is **~$0/month within the free
tier**, with caveats specific to the pinned-instance WebSocket setup.

**Cloud Run Always Free tier (per month, verify current figures — pricing changes):**
- ~2,000,000 requests
- ~360,000 vCPU-seconds
- ~180,000 GiB-seconds of memory
- ~1 GiB North America network egress

**When costs start accruing:**
- The biggest cost driver here is **`--min-instances=1`** (needed so in-memory
  rooms survive): one always-on instance runs 24/7, which **exceeds the free
  vCPU/memory-second allotment** once it is kept warm continuously. Expect a
  small but non-zero charge — order of a few dollars/month for a minimal
  (e.g. 1 vCPU / 512 MiB) always-on instance, depending on CPU-allocation mode.
  Using CPU-throttled ("CPU only during requests") lowers this but is awkward
  for long-lived WebSockets.
- **Egress** beyond ~1 GiB/month (unlikely for 2 users — this service relays
  small JSON control frames, not video).
- **Artifact Registry** storage for container images (pennies).
- **Secret Manager** access (negligible at this volume).
- Firebase Auth email/password is free at this scale.

**Monitor spending:**
```bash
gcloud billing accounts list
```
Set a **budget + alert** in Billing → Budgets & alerts (e.g. alert at $5 and
$20). Review Billing → Reports filtered to project `wplive-prod` and service
"Cloud Run". If you want strict $0, use the VPS path (fixed monthly VPS cost
instead of per-use) or run Cloud Run with `--min-instances=0` and accept that
rooms reset on cold start.

---

## Security audit

Findings from static review of this repo on 2026-11-01:

| Check | Result | Detail |
|---|---|---|
| HTTPS only (no HTTP) | PASS (deploy-dependent) | Cloud Run is HTTPS-only and redirects HTTP→HTTPS automatically. Caddy path terminates TLS and only needs port 80 for ACME. The Node process speaks plain HTTP on `$PORT` **behind** the proxy/Cloud Run front end — correct. **[verify in prod]** that no plain-HTTP listener is publicly exposed. |
| CORS configuration | NOTE | `server/src/server.js` sets `Access-Control-Allow-Origin: *` on JSON responses. Acceptable here: no cookies/credentials are used and the Firebase ID token is sent inside the WebSocket payload, not via a browser-attached header. If you ever add credentialed/cookie auth, replace `*` with an explicit allow-list. WebSocket connections do not enforce an `Origin` check — add one if you want to prevent other sites' pages from opening sockets. |
| Firebase admin key secured | PASS | Real private key only in `server/secrets/` (`600`, dir `700`), present in both `.gitignore` and `.dockerignore`; Dockerfile copies only `src/` + `public/`, so the key is **not** in the image or in git. On Cloud Run, mount via Secret Manager (see Credentials). |
| Exposed secrets scan | PASS | No private keys, `.env` files, passwords, or service-account JSON found outside `server/secrets/`. The `apiKey` in `firebase-config.js` is a public Firebase web identifier (expected to ship). |
| Authorized domains | **[verify in prod]** | Must be set in Firebase → Authentication → Settings for the live domain(s). Also restrict the public web `apiKey` by HTTP referrer in GCP → Credentials to limit abuse. |
| Auth verification | BY DESIGN | `authenticateUser` is acked-but-not-verified unless a credential is mounted; `AUTH_REQUIRED=1` enforces it. Anonymous is the supported 2-person path. |
| Input hardening | OK | WS `maxPayload` 256 KiB; chat body truncated to 2000 chars; dead-socket reaper every 30s. No rate limiting on message volume — add one if exposed beyond trusted users. |

**Recommended hardening before a wider launch:** add a WebSocket `Origin`
allow-list, add per-socket message rate limiting, restrict the Firebase web
`apiKey` by referrer, and set `AUTH_REQUIRED=1` if parties should be tied to
accounts.

---

## Next steps

1. **[confirm]** which deployment is live (Cloud Run vs VPS) and reconcile the
   two docs to the one you keep.
2. Set `PUBLIC_URL` to the real https URL so `/join/<id>` links work.
3. If Cloud Run: pin `--min-instances=1 --max-instances=1`, raise `--timeout`,
   and mount the admin key via Secret Manager.
4. Enable Email/Password sign-in and set Authorized domains in Firebase.
5. Add the Cloud Monitoring uptime check on `/health` + the error alert policy.
6. Schedule `server/tools/monitor.sh` (cron or external pinger).
7. Set a billing budget + alert on project `wplive-prod`.
8. Run the pre-launch gate in `PRODUCTION_CHECKLIST.md`.

## Maintenance procedures

- **Routine:** watch the Cloud Run metrics tab weekly; confirm `monitor.sh` is
  green; confirm TLS has > 21 days (monitor.sh reports it; Cloud Run / Caddy
  auto-renew, so this is a safety net).
- **Updates:** change code → `npm test` (must stay 1/1) → deploy → roll back
  instantly via revisions if `/health` or `monitor.sh` fails.
- **Key rotation:** rotate the service-account key every ~90 days (revoke old,
  generate new, update Secret Manager, redeploy).
- **Dependency updates:** `npm audit` in `server/`; bump `ws` / `firebase-admin`
  and re-run the integration test.
