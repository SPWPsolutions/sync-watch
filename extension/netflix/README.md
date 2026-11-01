# Party Sync: Netflix

Keeps Netflix playback in sync across a party. Each viewer streams from their own Netflix
account. This adapter only issues play, pause, and seek and reads the playback clock. It never
touches content protection, licenses, manifests, cookies, or sign-in.

## Provenance

This is a clean-room implementation. It contains no code from the Teleparty extension
(`original/`, `production-extension/`, `pretty/`, `unpacked/`, `mod/`).

An intermediate rewrite of this directory (around 12:13–12:16 on 2026-11-01) added features
whose Netflix internals matched Teleparty's decompiled `netflix_injected_bundled.js` and
`netflix_content_bundled.js`:
- supplemental (recap/trailer) skipping with `handleFinishPrePlay()`
- overriding `hasPostPlay` on movies
- ad-break detection through `playbackState.currentAdBreak`
- `getSegmentTime()` and `getBusy()`
- React-fiber walking to the watch view
- treating the `<video>` parent's `id` as the title ID

All of it was removed. On 2026-11-01 the owner approved using the decompiled bundle as a
reference for Netflix's internal API. Three features were reimplemented from it with new code
(no Teleparty code copied):
- recap/trailer skip: `activeVideoMetadata._video.type === 'supplemental'` → `handleFinishPrePlay()`
- movie post-play suppression: `playableData.summary.type === 'movie'` → own `hasPostPlay` override,
  restored on leave
- ad-break detection: `playbackState.currentAdBreak != null`

The watch-view component is found by walking up the React fiber from `.watch-video` until a node
has the needed state, not by a fixed parent count. Recap skip and post-play suppression are active
only while in a party (`partyMode` command); solo viewing is unchanged.

## Netflix surface used

| What | Where it's from |
|---|---|
| `netflix.appContext.state.playerApp.getAPI().videoPlayer` | The widely documented public-page player API. |
| `getAllPlayerSessionIds()`, `getVideoPlayerBySessionId(id)` | Same API. The adapter picks the session id starting with `watch`. |
| `seek(ms)`, `play()`, `pause()`, `isPaused()`, `getCurrentTime()`, `getDuration()` | Same API. |
| `/watch/<digits>` URL | Public URL format, used for the title ID and for episode following. |
| `.watch-video video` | Observed DOM selector for the watch-page `<video>`. It falls back to the first `<video>`. |

Error M7375 was observed directly while testing on netflix.com. Writing `video.currentTime`
crashes the player. If the player is paused only at the `<video>` level, Netflix resumes it after
its own seek. For both reasons, seek, play, and pause all go through the API.

## How it works

- `injected.js` runs in the page's main world (manifest `"world": "MAIN"`, `document_start`).
  It answers `{source:'party-sync', dir:'to-page', requestId, cmd, args}` messages with
  `{dir:'to-content', requestId, ok, value?, error?}`. The commands are `seek`, `play`, `pause`,
  and `state`. On `/watch` pages it also pushes `{dir:'state', state}` every 250 ms and on media
  events.
- `seek` clamps the target to 250 ms before the end. Seeking onto the last frame ends the title.
- `content.js` runs in the isolated world. It bridges to the page with request/response
  correlation and a 3 s timeout. It builds a `MediaAdapter` with API-backed seek, play, and pause,
  and reads time as element time plus the last measured player offset. It holds sync, reporting
  readyState 0, while the API exists but no player session does.
- Episode following: a local `/watch/<id>` change announces `nextEpisode` and resets the party
  clock to 0. A remote `jumpToNextEpisode` navigates to `/watch/<id>`, and `runParty` resumes the
  party after the load.
- Chat (`shared/chat.js`) runs in a shadow root. Its host stops key, click, and pointer event
  propagation so Netflix shortcuts (space, f, m) don't fire while typing.

## Manifest needs (owned by the packager)

```jsonc
[
  { "matches": ["https://www.netflix.com/*"], "js": ["netflix/injected.js"], "world": "MAIN", "run_at": "document_start" },
  { "matches": ["https://www.netflix.com/*"],
    "js": ["shared/socket.js", "shared/sync.js", "shared/media.js", "shared/party.js", "shared/chat.js", "netflix/content.js"],
    "run_at": "document_idle" }
]
```

There are no `web_accessible_resources`.

## Verification status

Tested on netflix.com against `wss://watch.pwlive.fyi` with a scripted second member:
- an API seek from 23 s to 120 s with no M7375 error
- a remote pause at 300 s that held, and a remote play that resumed
- chat, typing indicators, and HTML in messages rendered as plain text
- shortcut isolation
- party resume after a reload

Not yet re-verified after the provenance cleanup: the 250 ms state push, the offset-based
`readTime`, and the end-of-title clamp.

Not yet verified on netflix.com: recap skip, movie post-play suppression, and ad-break holding.
During an ad break the member reports readyState 0, so sync neither applies remote updates nor
broadcasts the ad's play/pause; when the break ends it reconciles to party time. Other members
keep playing. There is no party-wide pause for ads.
