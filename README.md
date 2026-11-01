# Sync Watch

Watch Netflix and Crunchyroll in sync with friends. Real-time playback synchronization with chat.

## Features

- **Netflix & Crunchyroll Support** - Watch together on both platforms
- **Real-time Sync** - Play, pause, and seek in sync (<1s drift)
- **Episode Following** - Auto-sync when episodes change
- **Live Chat** - Chat with your watch party
- **Web UI** - Also includes standalone web player for YouTube and direct video URLs

## Components

### Browser Extension
Located in `extension/` - Chrome extension (Manifest V3) for Netflix and Crunchyroll sync.

**Installation:**
1. Open `chrome://extensions`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `extension/` folder
5. Pin to toolbar

### Web Application
Located in `server/` - Node.js WebSocket server + web client for YouTube/direct videos.

**Live at:** https://watch.pwlive.fyi/

**Local development:**
```bash
cd server
npm install
npm start
```

## Architecture

- **Extension:** Chrome MV3, content scripts for Netflix/Crunchyroll
- **Backend:** Node.js WebSocket server (Cloud Run)
- **Sync Protocol:** Custom JSON-over-WebSocket (documented in PROTOCOL_SPEC.md)
- **Web Client:** Vanilla JS, HTML5 video, YouTube IFrame API

## Documentation

- `PROTOCOL_SPEC.md` - WebSocket protocol specification
- `STREAMING_INTEGRATION_PATTERNS.md` - Platform integration guide
- `extension/README.md` - Extension implementation details
- `server/README.md` - Backend setup

## Legal & Compliance

This is a watch-party synchronization tool:
- ✅ Users stream from their own accounts
- ✅ No DRM bypass or content protection defeat
- ✅ No authentication bypass
- ✅ Only controls play/pause/seek via player APIs

## License

See LICENSE file for details.

## Support

- **Backend:** https://watch.pwlive.fyi/
- **Health:** https://watch.pwlive.fyi/health
