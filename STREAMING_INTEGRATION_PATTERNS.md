# Teleparty Streaming Integration Patterns

Analysis of `production-extension/content_scripts/` — how the extension hooks each
platform's video player to coordinate play/pause/seek across a watch party.

**Scope note:** This is playback-synchronization interoperability. The extension
coordinates *player controls* (play, pause, seek, "what's the current time"). It
does **not** touch content protection — DRM-decrypted frames, license exchange,
and the media pipeline are entirely the site's. The "DRM boundary" for every
platform is the same: you can command the player and read its clock; you cannot
move protected bytes. Everything below works on top of the site's own player.

---

## 1. The shared architecture

Every integration is two files per platform:

| File | World | Role |
|---|---|---|
| `<platform>_content_bundled.js` | isolated (extension) world | Chat sidebar UI, party networking, the sync controller. Talks to the extension runtime and to the injected script. |
| `<platform>_injected_bundled.js` | page (main) world | Runs *inside the site's JS context*, so it can reach page globals (`window.netflix`, `_yt_player`, React fibers). Exposes a small command surface. |

**Why two worlds.** Chrome content scripts run in an isolated world that shares
the DOM but not the page's JS objects. Internal player APIs
(`window.netflix.appContext…`, `#movie_player`'s methods, React fiber state) live
in the page world. So the content script *injects* the second bundle into the
page and they communicate over `window.postMessage`.

### The bridge (consistent across platforms)

Content script injects the page-world bundle:

```js
const s = document.createElement("script");
s.src = chrome.runtime.getURL("content_scripts/netflix/netflix_injected_bundled.js");
document.documentElement.appendChild(s);
```

(The injected files are listed in the manifest's `web_accessible_resources`.)

Two directions of messaging:

- **Command → page:** content script calls `window.postMessage({ type, ... }, "*")`
  (or dispatches a `CustomEvent`). The injected script's `message` listener
  (`seekInteraction` / `onMessage`) switches on `data.type`.
- **Result/state → extension:** injected script answers with
  `window.dispatchEvent(new CustomEvent("FromNode", { detail: {...} }))` — or, in
  newer platforms, `window.postMessage({ type: "...", requestId, ... })`. The
  content script listens for `"FromNode"` / those typed messages and feeds its
  sync controller.

Netflix command vocabulary (representative): `PLAY`, `PAUSE`, `SEEK`,
`GetCurrentTime`, `GetState`, `IsPaused`, `NEXT_EPISODE`, `FIX_POST_PLAY`,
`CheckSkipSupplemental`, `GetPageTitle`, `GetVideoType`, `GetEpisodeData`,
`GetVideoLookupData`, `teardown`. Replies come back on `FromNode` as
`UpdateState`, `CurrentTime`, `IsPaused`, etc. Every other platform is a variation
on this same request/reply set.

### The four player-access strategies

The 46 platforms fall into four buckets (see the table in §4):

1. **Plain HTML5 `<video>`** — the content script finds the `<video>` element and
   calls `.play()`, `.pause()`, `.currentTime`, listening to `timeupdate` /
   `play` / `pause` / `seeking`. No real page-world logic needed → the injected
   bundle is an empty stub (5–7 lines). ~15 platforms.
2. **Official page player object** — the site exposes a player API on `window`
   (YouTube `#movie_player`, Netflix `netflix.appContext…videoPlayer`, Amazon's
   player). The injected script calls it directly. Most robust.
3. **React fiber walking** — no public API, so the injected script reads the
   site's React internal instance (`__reactFiber*` / `__reactInternalInstance*` /
   `__reactProps*`) off a DOM node and climbs `.return`/`.child` to reach the
   player/state object. Brittle, version-sensitive. (Netflix, Max, Peacock,
   HBO Max, Disney, Crunchyroll, Spotify, Fubo…)
4. **Shadow-DOM + synthetic input** — web-component players with no reachable API;
   the script reaches into `shadowRoot`s and clicks buttons / dispatches
   `PointerEvent`s on the scrubber. (Disney+.) Most brittle.

Many platforms combine strategies (read state via fiber, control via the HTML5
element, navigate via a React callback).

---

## 2. Per-platform integration guides

### Netflix — `netflix/netflix_injected_bundled.js`
- **Player handle:**
  `window.netflix.appContext.state.playerApp.getAPI().videoPlayer`, then pick the
  session whose id contains `"watch"` → `getVideoPlayerBySessionId(id)`.
- **Controls:** `player.play()`, `player.pause()`, `player.seek(ms)`,
  `player.isPaused()`, `player.getCurrentTime()` / `getSegmentTime()`,
  `getBusy()` (buffering).
- **Metadata/state:** React fiber off `.watch-video`, climbing four–six `.return`
  hops to the player/wrapper `stateNode`. Reads title, year, movie-vs-episode,
  season/episode numbers, ad breaks (`getAdBreaks()`, `currentAdBreak`).
- **Quirks / workarounds:**
  - `checkSkipSupplemental()` — auto-skips pre-play "supplemental" videos
    (recaps/branding) by calling `handleFinishPrePlay()` so all party members land
    on the real feature.
  - `tryDisablePostPlay()` — monkeypatches `wrapperStateNode.hasPostPlay = () =>
    false` for movies to stop the post-credits "next" takeover; restored on
    teardown.
  - Seeks target `time - 100` (ms) and clamp to `duration - 100` to avoid hitting
    the exact end.
  - `showControlsAsync()` fires the wrapper's `onPointerMoveCapture` to reveal
    native controls when needed.

### YouTube — `youtube/youtube_injected_bundled.js`
- **Player handle:** `document.querySelector("#movie_player")` (or
  `#shorts-player`). Uses YouTube's **public** IFrame-style API methods.
- **Controls:** `playVideo()`, `pauseVideo()`, `seekTo(s)`, `getCurrentTime()`,
  `getVideoData()` (`.title`, `.video_id`, `.isLive`).
- **Navigation:** next episode/video via `ytd-app.fire("yt-navigate", {...})`
  (SPA nav) with a hand-built `watchEndpoint`/`reelWatchEndpoint`; falls back to
  `location.href` on YouTube TV.
- **Quirks:** `resizeYoutube()` monkeypatches the player's internal
  `function(a,b){this.width=a;...}` sizer to shrink the video by 304 px when the
  chat sidebar is visible in fullscreen. Theater-mode toggling
  (`setTheater`/`disableTheater`) to make room for chat. Handles `tv.youtube.com`,
  `/watch`, and `/shorts/`.

### Disney+ — `disney/disney_injected_bundled.js`
- **Player handle:** `document.querySelector("disney-web-player").mediaPlayer`
  (a web component).
- **State source (modern):** `mediaPlayer.state.addStateChangedListener(sel, cb)`
  with selector `state => state.player`; reads
  `timeline.info.playheadPositionMs`, `playbackStatus` (playing/paused/buffering/
  ended), seekable range, live flag, and interstitial/ad session.
- **Remote control (modern):** `mediaPlayer.play()`, `.pause()`, `.seek(ms)`,
  `.seekToDate()` for PDT; next-episode via
  `main-app-controls-overlay.commandBus.dispatch({type:"playNext", ...})`.
- **Local-action capture:** it **wraps** `play`/`pause`/`seek`/`quickFastForward`/
  `quickRewind` and `commandBus.dispatch` so a *local* user action (or a Skip
  Intro) is detected and broadcast to the party. `remoteControlDepth` /
  `skipCommandDepth` guards prevent echo loops (don't re-broadcast an action the
  sync engine itself just issued).
- **Legacy/fallback controls (shadow DOM):** click `toggle-play-pause` →
  `shadowRoot .play-button`/`.pause-button`; seek by dispatching
  `pointerdown`/`pointerup` at a computed X on
  `progress-bar shadowRoot .progress-bar__seekable-range`.
- **Quirks:** most defensive integration in the codebase — explicit event
  signatures with 250 ms debounce, ad-badge `MutationObserver`, graceful detach,
  original descriptors restored on teardown. `disneymena` / `starplus` are thin
  variants.

### Max — `max/max_injected_bundled.js`
- **State/metadata:** React fiber walking. `getVideoLookupData()` reads
  `contentMetadata` off `[data-testid='content-metadata']`; ad slots off
  `[data-testid="player-ux-scrubber-track"]`'s `data-ad-slots` or the deep fiber
  chain `…_playbackEngine._player._playerStateTracker._playerState.variant.video
  ._periodMap._storage`.
- **Controls:** primarily the HTML5 element + content-script side.
- **Network workaround (note):** patches `window.fetch` and
  `XMLHttpRequest.prototype.open` for `api.max.com` JSON responses and strips
  `ssaiInfo`, `fallback.ssaiInfo`, and `manifest.url`. This is an SSAI
  (server-side-ad-insertion) normalization hack: with SSAI metadata removed the
  players across party members present a consistent, ad-stitch-free timeline so
  seek positions line up. HBO Max (`hbo_max`) does the same (`nethook=4`).

### Amazon Prime Video — `amazon/amazon_injected_bundled.js`
- **Player handle:** Amazon's page player object; also uses the HTML5 `<video>`.
- **Message surface:** `start`, `poll`, `play`, `pause`, `seek`,
  `refreshWebPlayer`; replies on `"FromNode"`. State machine maps Amazon states
  (`Playing`/`Paused`/`Ready`/`Waiting`/`Advertisement`/`AdTransition`) to the
  common play/pause/buffering/ad model. `onStateChange` listener drives state.
- **Quirks:** explicit `Advertisement`/`AdTransition` handling; `refreshWebPlayer`
  to recover the handle after Amazon re-mounts the player.

### Hulu — `hulu/hulu_injected_bundled.js`
- HTML5-`<video>`-centric (`html5=9`) with a thin page-world helper. Longest
  simple integration (999 lines) due to ad-pod handling and Hulu's frequent
  player re-mounts; uses polling + the `<video>` element for play/pause/seek/time.

### Peacock — `peacock/peacock_injected_bundled.js`
- Heavy React fiber walking (`react=10`) plus HTML5 element. Rich command surface
  (`msg=9`). Same request/reply bridge; reads player state from fiber, controls
  via element/API.

### Crunchyroll — `crunchyroll/*` (note: ships `injected` + `legacy_injected`)
- React fiber for state, HTML5 for control. Two injected bundles: current and a
  `crunchyroll_legacy_injected_bundled.js` for the older player — content script
  picks based on which player is present.

### Sling — `sling/sling_injected_bundled.js`
- Largest injected bundle (1607 lines). Live-TV oriented: HTML5 element plus
  substantial channel/DVR timeline handling. Live streams constrain seeking to the
  DVR window.

### Spotify — `spotify/spotify_injected_bundled.js`
- React fiber (`react=5`), audio rather than `<video>`. Syncs track position /
  play-pause through Spotify's web player internals.

### Paramount+ — `paramount/paramount_injected_bundled.js`
- **Not a player-control bundle.** It's an autoplay-gesture helper: shows a "Click
  to continue watching" overlay so a *trusted* user click can satisfy the
  browser's autoplay policy and let `video.play()` run unmuted after joining a
  party. Actual sync is done from the content script against the HTML5 element.
  (`appletv` has a comparable `activation_fallback` pattern.)

### Stub-injected (HTML5-direct) platforms
`dazn`, `disneymena`, `funimation`, `hotstar`, `hulujp`, `jio_cinema`, `mubi`,
`shahid`, `shudder`, `sonyliv`, `stan`, `unext`, `viki`, `viu`, `vix` ship an
**empty** injected bundle. All sync is done from the content script directly on
the HTML5 `<video>` element — these sites expose a standard media element with no
protection-layer interference on the control surface, so no page-world shim is
needed. This is the template to copy first for any new platform.

### Other live/sports platforms
`espn`, `f1_tv` (+ `webpackhook`), `fubo`, `foxone`, `tsnplus`, `willow`,
`leaguepass`, `plutotv`, `fancode`, `migu`, `canalplus`, `zee5`, `vidio`,
`tubitv`, `crave` — mixtures of HTML5 element + light fiber/API reads. `f1_tv`
ships a `webpackhook` bundle that taps the site's webpack runtime to grab a module
reference to the player.

---

## 3. Common patterns vs. platform differences

**Common to all:**
- Two-world content/injected split with a `postMessage` + `FromNode` bridge.
- A uniform logical command set: play, pause, seek(time), getCurrentTime,
  getState(paused/time/buffering/ad), next-episode, title/metadata, teardown.
- A normalized state object: `{ time, paused, buffering/loading, adState, ... }`
  regardless of how the native player represents it.
- Idempotent load guards (`window.injectScriptLoaded`, `videoIdScriptLoaded`,
  `tpDisneyMediaBridgeLoaded`) and a `teardown` message that removes listeners and
  restores any monkeypatched methods.
- Seek clamping and small offsets to avoid end-of-stream edge cases.

**Where they differ:**
- **Player access:** HTML5 element → public API → React fiber → shadow-DOM
  clicking, in increasing order of brittleness.
- **Echo suppression:** sophisticated integrations (Disney) wrap native control
  methods and use depth counters so locally-initiated vs sync-initiated actions
  don't feed back; simple ones rely on the content-script controller to ignore
  self-induced `timeupdate`/`seeking` events.
- **Ads:** SSAI platforms (Max, HBO Max) normalize ad metadata so timelines match;
  client-side-ad platforms (Netflix, Amazon, Peacock) expose ad state and the
  sync engine pauses coordination during ad breaks.
- **Live content:** live/sports platforms constrain seeking to the seekable/DVR
  window and treat `isLive` specially (Disney, Sling, ESPN, F1 TV).
- **Navigation:** SPA next-episode via framework callbacks (YouTube
  `yt-navigate`, Disney `commandBus.playNext`, Netflix
  `handleSelectorEpisodePlay`) vs. plain URL change.

---

## 4. Strategy matrix (all 46)

| Strategy | Platforms |
|---|---|
| HTML5 `<video>` direct (stub injected) | dazn, disneymena, funimation, hotstar, hulujp, jio_cinema, mubi, shahid, shudder, sonyliv, stan, unext, viki, viu, vix |
| Public page player API | youtube, amazon, netflix* |
| React fiber state (+ element/API control) | netflix, max, peacock, hbo_max, crunchyroll, spotify, fubo, canalplus, fancode, starplus, tsnplus |
| Shadow-DOM / synthetic input | disney (+ legacy path), disneymena/starplus variants |
| HTML5 + light fiber/API, live-oriented | hulu, sling, espn, f1_tv, foxone, plutotv, migu, zee5, vidio, tubitv, crave, willow, leaguepass |
| Gesture/activation helper only | paramount, appletv |
| Network-response normalization (SSAI) | max, hbo_max |

\*Netflix is both: public-ish `netflix.appContext` API **and** React fiber for
metadata.

---

## 5. Implementation recommendations for a web client

A browser-extension watch party has the two-world luxury above. A pure web client
(no extension, running in its own origin) **cannot** reach into a streaming site's
page context cross-origin — same-origin policy and the sites' frame-busting/CSP
prevent iframing their player and reaching its JS. Practical options:

1. **Keep an extension (or a userscript) as the page-world agent.** The web
   client owns party networking + chat UI; a minimal injected agent per platform
   exposes the same command bridge documented here. This is the only way to drive
   first-party players like Netflix/Disney. Reuse the §1 command vocabulary as a
   stable contract so the web client is platform-agnostic.

2. **Abstract behind a `PlayerAdapter` interface.** Define
   `play()`, `pause()`, `seek(ms)`, `getState() -> {timeMs, paused, buffering,
   isLive, ad}`, `onStateChange(cb)`, `next(id)`, `getMetadata()`. Implement one
   adapter per platform; the stub-injected (HTML5) adapter is the default and
   covers ~15 sites immediately.

3. **Sync algorithm (platform-independent):** elect a host (or use server time),
   broadcast `{action, timeMs, atWallClock}`; followers compute drift =
   `localTime - (hostTime + (now - atWallClock))` and *seek* only when
   `|drift| > ~1.5 s`, otherwise nudge `playbackRate` ±5 % to converge smoothly.
   Pause coordination halts during local buffering and during ad breaks (use the
   `adState`/`buffering` fields each adapter reports).

4. **Echo suppression is mandatory.** Tag every programmatic control with a flag
   so the resulting `timeupdate`/`seeking`/state event isn't re-broadcast —
   mirror Disney's `remoteControlDepth` counter rather than the simpler "ignore
   next event" approach, which drops real user events under load.

5. **Resilience:** players re-mount (Hulu, Amazon `refreshWebPlayer`). Re-acquire
   the handle on `MutationObserver` DOM changes and on SPA navigation; guard all
   fiber walks in try/catch with a fallback (every bundle here does). Treat fiber
   paths as the thing most likely to break on a site update and fail soft.

6. **Live vs VOD:** branch on `isLive`; clamp seeks to the seekable window and
   prefer PDT-based alignment (`seekToDate`) for live so party members align to
   wall-clock program time, not stream-relative offset.

7. **Stay on the control surface.** The whole model rides on top of the site's own
   authenticated, DRM-protected playback — each viewer streams from their own
   account. Keep it that way: the adapter issues UI-level commands and reads the
   clock; it never needs, and should never attempt, anything below the player API.
