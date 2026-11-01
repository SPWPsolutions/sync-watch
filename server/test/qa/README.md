# Party-Sync QA Suite

QA coverage for the watch-party sync server (`server/src/server.js`). Two layers:

1. **Protocol suite** (`chrome-qa.test.js` + `scenarios/`) — deterministic,
   automated regression tests that drive the exact JSON-over-WebSocket protocol
   the browser client and the Teleparty extension speak. This is the source of
   truth and runs in CI.
2. **Browser runbook** (below) — a manual/assisted Chrome walkthrough that spot-checks
   the real web client UI on the live deployment and produces GIF documentation.

The sync server relays playback **timing/state, chat, and presence** between
clients. It never fetches, stores, or decodes video content — each participant's
own browser plays the media. So the protocol tests fully cover sync correctness
without needing a real video to decode.

## Layout

```
test/qa/
  chrome-qa.test.js      # entry point — wires every scenario into node:test
  lib/harness.js         # WebSocket protocol client + in-process/remote target selection
  fixtures/test-data.js  # video sources, chat payloads, invalid ids, snapshot asserts
  scenarios/
    two-user-sync.js     # create/join, play, pause, seek, no self-echo, late-join snapshot
    chat.js              # delivery to all incl. sender, verbatim body, unicode, 2000-char cap
    presence.js          # join/leave system msgs, userList, buffering/typing, host migration
    reconnection.js      # reboot restores live state; unknown session reports expiry
    video-sources.js     # youtube/netflix/mp4/local metadata round-trip; nextEpisode reset
    error-handling.js    # bad session ids, room-less actions, junk frames, unknown types
  REPORT.md              # latest run results + open findings
```

## Running

```bash
cd server

# Deterministic — boots the server in-process on an ephemeral port:
npm run qa

# Against the live Cloud Run deployment:
npm run qa:live
# or any target:
QA_TARGET=wss://host[:port] npm run qa
QA_TARGET=https://host     npm run qa   # wss:// derived from the origin
```

Exit code is non-zero if any assertion fails. Each scenario is a top-level
`node:test` with granular subtests, so the TAP output names the exact check that
failed (e.g. `not ok 3 - seek + pause propagates guest -> host`).

## Interpreting results

- `# pass N / # fail 0` at the end = green.
- A failing subtest prints the assertion and the scenario file + line.
- Timeouts (`timeout waiting for <type>`) mean an expected server push never
  arrived — usually a broadcast/relay regression for that message type.
- Running `qa:live` exercises the deployed server and the public network path;
  running `qa` isolates server logic. A test that passes locally but fails live
  points at deploy/config/network rather than application logic.

## Browser runbook (live UI + GIF documentation)

Prerequisites: a Chrome browser connected to the Claude-in-Chrome extension.
This drives the reference client at the deployment root in two tabs.

1. Open two tabs on `https://<deployment>/` (host + guest). Confirm each logs
   `socket open userId …`.
2. **Host:** type a nickname → **Create party**. Capture the `session id` and the
   `Party link`. The user list shows `<nick> (host)`.
3. **Guest:** paste the session id → **Join**. Both tabs' user lists now show
   both members, and both logs show `* joined`.
4. **Sync:** press play / seek on the host `<video>`. Each guest log shows
   `remote playing @ <t>s` / `remote paused @ <t>s`. (Needs a video source the
   browser can actually decode — see Finding F1 in REPORT.md.)
5. **Chat:** send from the guest. Both tabs log `<guest-nick> <message>`.
6. **Presence:** close the host tab; the guest's user list shrinks and the host
   badge migrates to a remaining member.
7. Record the flow with the extension's GIF recorder (start before step 1, stop
   after step 6, export) for documentation.

Verification during the runbook is most reliable by reading the client's own
state rather than pixels:

```js
// in a tab's console / via javascript_tool
({ users: [...document.querySelectorAll('#users span')].map(s => s.textContent),
   log: document.getElementById('log').textContent.trim().split('\n').slice(-5) })
```
