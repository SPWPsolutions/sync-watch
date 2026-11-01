# Party Sync — browser extension

Watch Netflix or Crunchyroll in sync with friends. The extension syncs **playback controls only** (play, pause, seek, and who's watching). Every viewer streams from their own subscription and signs in to their own account. The extension never touches video data, DRM, or login credentials.

Backend: `https://watch.pwlive.fyi` (the `server/` project in this repo). You can change it under **Settings** in the popup.

## Install (unpacked, Chrome / Edge / Brave 111+)

1. Open `chrome://extensions`.
2. Turn on **Developer mode** (top right).
3. Click **Load unpacked** and select this `extension/` folder.
4. Pin **Party Sync** to the toolbar.

To update after pulling changes, click the reload icon on the extension card, then reload any open Netflix or Crunchyroll tabs.

## Use

Netflix and Crunchyroll work the same way:

1. Open an episode or film and start playing it.
2. Click the Party Sync icon, enter a name, and click **Start a party**.
3. Copy the invite link (`https://watch.pwlive.fyi/join/<id>`) and send it to friends.
4. A friend with Party Sync installed opens the link. The page detects the extension and opens the same title on Netflix/Crunchyroll with `?psSession=<id>`; Party Sync joins the party automatically and removes the parameter from the address bar. Without the extension, the page explains how to install it and offers an **Open on Netflix** button.

Pasting the link or party ID into the popup and clicking **Join party** still works.

On the player:
- A pill in the top-right shows how many people are watching and the sync state. If the browser blocks autoplay, click the pill to resync.
- A **Chat** button in the bottom-right opens the party chat.
- When anyone moves to another episode, the rest of the party follows.

## Layout

```
extension/
├── manifest.json        MV3; no broad host access, only "storage" permission
├── background.js        service worker: toolbar badge (member count), per-install permId
├── popup/               toolbar popup (create/join/leave, server setting)
├── shared/              sync layer used by both sites
│   ├── socket.js        PartySocket: JSON-over-WebSocket client, reconnect, NTP-style clock offset
│   ├── sync.js          SyncController: drift correction (>1 s), echo suppression, autoplay fallback
│   ├── media.js         MediaAdapter: stable facade over whichever <video> the SPA is showing
│   ├── party.js         session controller: popup messages, create/join/leave/reboot, resume after reload, invite auto-join, status pill
│   ├── invite.js        document_start: captures ?psSession=<id> into sessionStorage and strips it from the URL
│   └── chat.js          chat overlay with typing indicator
├── site/detect.js       marks watch.pwlive.fyi pages so the join page can skip the install prompt
├── netflix/
│   ├── content.js       Netflix adapter: video lookup, episode following
│   └── injected.js      MAIN-world seek bridge (Netflix errors on direct currentTime writes)
├── crunchyroll/
│   ├── content.js       Crunchyroll adapter: video lookup, episode following (seeks the <video> directly)
│   └── README.md        adapter notes and provenance
└── icons/
```

`shared/socket.js` and `shared/sync.js` are classic-script copies of `server/public/js/connection.js` and `sync.js` (ES `export` removed, classes attached to `globalThis.PartySync`). If you change the originals, regenerate them the same way.

## Permissions

| Permission | Why |
|---|---|
| `storage` | nickname, server URL, anonymous per-install id |
| host `www.netflix.com`, `www.crunchyroll.com` | run the content scripts and read the tab URL (title ID) from the popup |
| host `watch.pwlive.fyi` | the sync server |

There is no `tabs`, `webRequest`, `cookies`, or `<all_urls>` access, and nothing is web-accessible. Netflix's seek bridge runs as a `"world": "MAIN"` content script instead of being injected with a `<script>` tag.

## Troubleshooting

- **"Party Sync is not running in this tab yet"**: the tab was open before the extension was installed or reloaded. Reload the page.
- **"No video found on this page yet"**: start playing the title first, then open the popup.
- **The host is on a different title**: everyone must open the same episode. Party Sync syncs time, not the title.
- Check the server with `curl https://watch.pwlive.fyi/health`.
