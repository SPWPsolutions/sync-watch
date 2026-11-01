'use strict';
// Test data and expected-shape helpers shared across QA scenarios.

// Video sources the reference client (server/public/index.html) accepts.
// The server treats videoId/videoService as opaque metadata it relays; it never
// fetches or decodes the media itself. These are freely-licensed / demo sources.
const VIDEO_SOURCES = {
  // Direct MP4 — the demo client's default src (Big Buck Bunny, CC-BY).
  directMp4: {
    videoId: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    videoService: 'html5',
    videoType: 'movie',
  },
  // A YouTube-style id. The server stores it verbatim; playback is the client's concern.
  youtube: {
    videoId: 'dQw4w9WgXcQ',
    videoService: 'youtube',
    videoType: 'video',
    serviceDomain: 'youtube.com',
  },
  // A Netflix-style catalog id, as the extension would supply.
  netflix: {
    videoId: '80057281',
    videoService: 'netflix',
    videoType: 'show',
    serviceDomain: 'netflix.com',
  },
  // Local file upload: the client calls URL.createObjectURL(file); nothing hits
  // the server except an opaque blob: id if the user chooses to share one.
  localFile: {
    videoId: 'blob:local-upload',
    videoService: 'html5',
    videoType: 'movie',
  },
};

const NICKS = { host: 'host-qa', guest: 'guest-qa', late: 'late-qa' };

const CHAT_MESSAGES = [
  'hello from the guest',
  'plain ascii message',
  'unicode: café ☕ 日本語 😀',
  '<script>alert(1)</script>', // must be delivered verbatim in the body and escaped only at render time
  ' '.padEnd(50, 'x'),
];

// Invalid session ids for error-handling checks. Session ids are 16 hex chars.
const INVALID_SESSION_IDS = ['deadbeef', 'notahexstring!!', '', 'z'.repeat(16), '00'];

// Expected shape of a session snapshot returned by createSession/joinSession.
function assertSessionSnapshot(assert, snap, { expectError = false } = {}) {
  if (expectError) {
    assert.ok(snap.errorMessage, 'expected an errorMessage');
    return;
  }
  assert.ok(!snap.errorMessage, `unexpected error: ${snap.errorMessage}`);
  assert.match(snap.sessionId, /^[a-f0-9]{16}$/, 'sessionId is 16 hex chars');
  assert.ok(['playing', 'paused'].includes(snap.state), 'state is playing|paused');
  assert.equal(typeof snap.lastKnownTime, 'number', 'lastKnownTime is numeric');
  assert.ok(Array.isArray(snap.userList), 'userList is an array');
  assert.ok(Array.isArray(snap.messages), 'messages is an array');
  assert.equal(typeof snap.serverTime, 'number', 'serverTime is numeric');
}

module.exports = { VIDEO_SOURCES, NICKS, CHAT_MESSAGES, INVALID_SESSION_IDS, assertSessionSnapshot };
