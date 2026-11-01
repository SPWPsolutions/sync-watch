'use strict';
// Party-sync QA suite.
//
// Protocol-level, deterministic regression coverage for every QA scenario in the
// brief: two-user sync, chat, presence, reconnection, video sources, and error
// handling. These assertions drive the exact JSON-over-WebSocket protocol the
// browser client and the Teleparty extension speak, so they are the source of
// truth that the Chrome UI runbook (see README.md) spot-checks visually.
//
// Run locally (boots the server in-process on an ephemeral port):
//   node --test test/qa/chrome-qa.test.js
//   npm run qa
//
// Run against a deployment:
//   QA_TARGET=https://watch-party-pw57bakb5a-uc.a.run.app node --test test/qa/chrome-qa.test.js
//
// Note: the file is named *.test.js so `node --test` discovers it. It does not
// drive a browser itself — browser flows are executed from README.md's runbook
// and recorded as GIFs for documentation.

const test = require('node:test');
const assert = require('node:assert');
const { createHarness } = require('./lib/harness');

const scenarios = {
  'Two-user playback sync': require('./scenarios/two-user-sync'),
  'Chat delivery': require('./scenarios/chat'),
  'User presence & host migration': require('./scenarios/presence'),
  'Reconnection / reboot': require('./scenarios/reconnection'),
  'Video sources': require('./scenarios/video-sources'),
  'Error handling': require('./scenarios/error-handling'),
};

let harness;

test.before(async () => {
  harness = await createHarness();
  // eslint-disable-next-line no-console
  console.error(`[qa] target: ${harness.mode} (${harness.wsUrl})`);
});

test.after(() => harness && harness.closeAll());

for (const [name, run] of Object.entries(scenarios)) {
  test(name, async (t) => {
    await run(t, harness, assert);
  });
}
