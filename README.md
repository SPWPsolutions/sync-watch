# Wooper's Party (`WP`)

Watch Netflix, Crunchyroll, Disney+, Hulu, Max, Prime Video, Paramount+, and YouTube in sync with friends. Includes a docked right-hand group chat sidebar, floating emoji reactions, custom avatars/badges/name colors, host playback control lock, and a standalone web player.

**Live Production:** https://watch.pwlive.fyi/

---

## Repository Structure

```text
sync-watch/
├── extension/              # Clean-room Manifest V3 Chrome/Edge/Brave extension
│   ├── manifest.json
│   ├── background.js
│   ├── icons/              # WP & Wooper the Cat toolbar icons and sprite assets
│   ├── popup/              # Extension popup UI (Create Party & Party Management)
│   ├── shared/             # Core sync controller, WebSocket client, media facade, docked sidebar
│   ├── netflix/            # Netflix MAIN + ISOLATED world adapter
│   ├── crunchyroll/        # Crunchyroll adapter
│   ├── disney/             # Disney+ MAIN + ISOLATED world adapter
│   ├── hulu/               # Hulu adapter
│   ├── max/                # Max adapter
│   ├── amazon/             # Prime Video adapter
│   ├── paramount/          # Paramount+ adapter
│   ├── youtube/            # YouTube MAIN + ISOLATED world adapter
│   └── site/               # Invite landing page detector
│
├── server/                 # Node.js WebSocket sync backend + standalone web app
│   ├── src/                # WebSocket & REST server, room store, invite landing page
│   ├── public/             # Web client, Open Graph / iMessage assets, packaged extension zip
│   ├── test/               # Integration & QA test suites
│   └── tools/              # Extension packager (build-extension-zip.js) & health monitor
│
└── docs/                   # Architecture, protocol, and deployment documentation
    ├── DEPLOYMENT_SUMMARY.md
    ├── PRODUCTION_CHECKLIST.md
    ├── PROJECT_STATUS.md
    ├── PROTOCOL_SPEC.md
    ├── STREAMING_INTEGRATION_PATTERNS.md
    ├── UI_DESIGN_SPEC.md
    └── USER_GUIDE.md
```

---

## Quick Start

### 1. Browser Extension (`extension/`)
1. Open `chrome://extensions` in Chrome, Edge, or Brave.
2. Enable **Developer mode** (top right).
3. Click **Load unpacked** and select the `extension/` folder.
4. Pin the red **WP** Wooper icon to your toolbar.

### 2. Local Server & Web App (`server/`)
```bash
cd server
npm install
npm run build:extension
npm test
npm start
```

### 3. Production Deployment (Cloud Run)
```bash
cd server
npm run build:extension
gcloud builds submit --tag gcr.io/YOUR-PROJECT-ID/watch-party:latest --project=YOUR-PROJECT-ID
gcloud run deploy watch-party \
  --image gcr.io/YOUR-PROJECT-ID/watch-party:latest \
  --region=us-central1 \
  --project=YOUR-PROJECT-ID \
  --platform=managed \
  --allow-unauthenticated
```
