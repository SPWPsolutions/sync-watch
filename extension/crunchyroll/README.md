# Party Sync: Crunchyroll

Keeps Crunchyroll playback in sync across a party. Each viewer streams from their own
Crunchyroll account. This adapter only issues play, pause, and seek on the page's own
`<video>` element and reads its clock. It never touches content protection or media data.

## Provenance

This is a clean-room implementation. It contains no code from the Teleparty extension
(`original/`, `production-extension/`, `mod/`). An earlier draft of this directory copied
React-fiber paths and control-wrapping logic from Teleparty's shipped Crunchyroll bundle.
That draft was deleted, and nothing from it carries over. The adapter relies only on
Crunchyroll's public surface: the standard HTML5 `<video>` element and the public watch-URL
format.

## How it works

`content.js` is a thin platform adapter for the shared stack:

| Piece | Source |
|---|---|
| Socket, clock offset, reconnect | `shared/socket.js` |
| Drift correction, echo handling | `shared/sync.js` |
| `<video>` facade that survives SPA re-mounts | `shared/media.js` |
| Create/join/leave, resume after reload, status pill | `shared/party.js` |

Adapter responsibilities:
- `findVideo()`: the `<video>` on a `/watch/<ID>/…` page, with locale prefixes allowed. It returns `null` everywhere else.
- `followEpisodes()`: when a local in-app episode change happens (autoplay or Next), it announces `nextEpisode` and resets the party clock to 0. When a remote `jumpToNextEpisode` arrives, it navigates to `/watch/<ID>`. `runParty` then resumes the party after the load.

Crunchyroll needs no page-world script.

### Seeking

The player is Bitmovin, in the top frame (`.bitmovinplayer-container`). Writing `video.currentTime`
to an unbuffered position can leave Bitmovin's segment loader parked: `seeking` stays true,
`readyState` stays at 1, and it does not recover from further element writes. Bitmovin's instance is not
exposed (`window.bitmovin` is an empty namespace), and the timeline `<input type=range>` ignores
synthetic events. The seek hook relies on the player's own keyboard seek instead. This behavior was
observed on the live site:
- ArrowRight/ArrowLeft dispatched on `.bitmovinplayer-container` seeks ±10 s through the loader, and presses accumulate.
- A short element seek inside the buffered range lands exactly and does not wedge.

The hook does a coarse move by `round(Δ/10)` presses, then the remainder by an in-buffer element seek.
Sync is held (`isHeld`) while it runs, so intermediate `seeked` events are not broadcast. On release it
dispatches `loadedmetadata`, so `SyncController` re-applies the party's play/pause, which the player may
override mid-seek.

## Manifest needs (owned by the packager)

```jsonc
{
  "matches": ["https://www.crunchyroll.com/*"],
  "js": ["shared/socket.js", "shared/sync.js", "shared/media.js", "shared/party.js", "crunchyroll/content.js"],
  "run_at": "document_idle"
}
```

There is no `web_accessible_resources` entry and no `injected.js`. The popup's service map
needs `'www.crunchyroll.com': { name: 'crunchyroll', videoId: /\/watch\/([A-Z0-9]+)/i }`.

## Not yet verified on the live site

These have not been tested against crunchyroll.com. They need a two-account pass with real subscriptions:
1. The seek hook above. The raw player behavior was verified in-page, but the hook has not yet been validated end to end inside a running party.
2. The top-frame player assumption. This was confirmed on a current episode (Black Clover E1): the player is a single top-frame `<video>` and there is no iframe. Older episodes on the legacy `static.crunchyroll.com` iframe player would still return `null` from `findVideo()`.
3. Autoplay policy. A follower's first remote `play()` can be blocked until they interact with the page. `shared/sync.js` reports this as `blocked`.
