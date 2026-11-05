# Party Sync: MovieBox Pro

Keeps MovieBox Pro playback in sync across a party. Each viewer streams from their own
MovieBox Pro account. The adapter only issues play, pause, and seek to the page's own player and reads
the `<video>` clock. It never touches stream URLs or media data.

## What the site looks like (recon, 2026-11-02)

- Titles live on detail pages: `/movie/<n>` and `/tvshow/<n>` on `www.movieboxpro.app`. There is no
  separate watch URL. Playback opens in a jQuery modal (`#my_dialog`) on the detail page.
- The page ships **two players** and lets the viewer pick one (`.player-selector-overlay`,
  `.player-option`, remembered with `#remember`):
  - JW Player (`static/js/jwplayer4/jwplayer.js`), mounted as `jwplayer('player_box')`.
  - Video.js (`static/videojs/video.min.js`) on `video#my-video.video-js` inside `#player_panel`.
  Both play HLS through `hls.min.js`. Underneath each one is a plain top-frame HTML5 `<video>`.
- `init_player()` disposes the old player (`jwplayer('player_box').remove()` or
  `videojs('my-video').dispose()`) and rebuilds it. A `#player_loading` overlay shows while the
  stream starts.
- A **trailer** player also exists: `.video_player_popup` > `video#video_player`, plus an
  `iframe#youtubePlayer`. It must never be treated as the party video.
- No CSP `<meta>` was present. The site is behind a Cloudflare challenge, so plain HTTP fetches return 403.

## How it works

| File | World | Role |
|---|---|---|
| `content.js` | isolated | `findVideo`, `isHeld`, title following, `runParty` wiring |
| `injected.js` | MAIN | Calls the live player's API: JW Player, then Video.js, then the bare `<video>` |

The message flow is the same as YouTube and Disney+:
`content -> page { source: 'party-sync-movieboxpro', dir: 'to-page', requestId, cmd, args }` and
`page -> content { dir: 'to-content', requestId, ok, value?, error? }`. Supported commands are
`play`, `pause`, `seek {ms}`, and `kind` (diagnostic). When a bridge call fails or times out, the
content script falls back to driving the element directly.

Why a MAIN-world script: CSP does not block a content script from touching the element. The reason
is that `jwplayer` and `videojs` live on the page's `window`. Going through their APIs keeps the
players' UI state (play button, progress bar, JW's internal state machine) consistent with the
element.

- **Video ID**: `movie-<n>` or `tv-<n>`, because the two catalogues number independently. The popup's
  `extractId` uses the same mapping.
- **Detection** (`findVideo`): this looks at `#player_box video`, then `#my-video video`, then
  `video#my-video_html5_api`. If the site renames its containers, it falls back to any non-trailer
  `<video>` that has a source. It returns `null` off title pages and while `#my_dialog` is hidden.
- **Hold** (`isHeld`): sync is held while `#player_loading` or the player chooser is visible.
  A 500 ms poll dispatches `emptied`/`loadedmetadata` on transitions, so `SyncController` re-applies
  party state once the stream is ready.
- **Player swaps**: `shared/media.js` re-binds on DOM mutations. A dispose and rebuild, a switch
  between JW and Video.js, or reopening the dialog are all picked up without adapter code.
- **Autoplay**: JW's `play()` does not reject when the browser blocks autoplay. `play()` copies the
  Netflix approach: without a user activation, it confirms that playback started, and otherwise it throws
  `NotAllowedError` so the status pill shows "Click the video to allow playback sync".

## Platform quirks and limits

1. **Deep links.** The detail page autoplays with `?play=1`, and `?season=S&episode=E&play=1` opens
   a given episode (this is what the site's own Next Episode button navigates to). The adapter, the
   `/join/<id>` landing page (`server/src/landing.js`) and the web client's `services.js` all use it.
2. **Episodes are identified from the player resource, not the URL.** The page fetches the player
   markup from `POST /index/index/player?tfid=…`; that response declares `tid`, `current_season`,
   `current_episode` and `seconds` (the viewer's saved position). `injected.js` hooks
   `XMLHttpRequest` to read them, because the in-player episode panel (`.vjs-episodes-button`,
   `playMbpEpisode` → `reloadMbpPlayerResource`) swaps the stream without a navigation. Party IDs are
   therefore `tv-<n>-s<S>e<E>`; `tv-<n>` alone means the show page with no player open.
3. **Following.** A remote switch navigates to the deep link with `partySync.mbp.follow` set in
   sessionStorage so the next load knows it was not the viewer's doing. A local switch (episode
   panel in place, or the site's Next Episode / autoplay-next reload) is announced with
   `nextEpisode` and a reset position once the new episode plays. A reload onto another episode of
   the party's show without the follow flag is treated as the site's navigation, not pulled back.
4. **Resume seek.** The site seeks to the saved `seconds` right after mounting. While a party is
   active (`partySync.session`/`partySync.invite`/`partySync.mbp.follow` in sessionStorage, or the
   `partyMode` command), `injected.js` rewrites `var seconds = N;` to `0` in the response so that
   seek never happens and cannot be broadcast as a user seek. Requests that carry their own
   `seconds=` (quality switches) are left alone. If a resource was fetched before the party existed,
   `isHeld` holds sync for 3 s after mount instead.
5. **Quality picker.** With several files for an episode the site shows `.sidebarbg2` instead of
   autoplaying. After any `play=1` load during a party the adapter clicks the first file, as the site
   does itself when there is only one.
6. **Hosts covered**: `https://www.movieboxpro.app/*` and `https://movieboxpro.app/*`. Mirror domains
   need adding to `manifest.json` (host permissions plus three content-script entries), the popup
   `SERVICES` map, and the server tables.

## Testing

Automated (done during development, not checked into the repo): a fake-DOM harness (Node 22, no dependencies) loaded `shared/media.js`,
`injected.js`, and `content.js` into one `vm` context and checked the following:
- the video ID mapping;
- JW Player and Video.js play/seek/pause through the bridge;
- the HTML5 fallback;
- trailer exclusion, the closed dialog, the unmounted Video.js placeholder, and the fallback for renamed containers;
- `isHeld` during loading;
- title following, which ignores malformed IDs.

**Not yet verified on the live site.** This needs two members' accounts on the real site:
1. JW Player and Video.js selector names inside a *running* player. The selectors were inferred from
   page source and from the standard markup each library generates, not observed mid-playback.
2. Play/pause and seek round-trips for each player choice, and the accuracy of seeks far outside the
   buffer under hls.js.
3. Drift over a full episode, and recovery after a `waiting` stall.
4. Closing and reopening the dialog, switching player type mid-party, and moving between titles.
5. Whether the site has any ad or preroll path. None was seen.
