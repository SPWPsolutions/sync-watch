'use strict';
// Scenario: reconnection. A client drops its socket and rejoins via `reboot`,
// recovering the live room state. Empty rooms are kept for ROOM_TTL_MS so a sole
// member can come back.
const { VIDEO_SOURCES, NICKS } = require('../fixtures/test-data');

module.exports = async function reconnection(t, h, assert) {
  const host = await h.client();
  const guest = await h.client();
  const created = await host.req('createSession', {
    ...VIDEO_SOURCES.directMp4,
    userSettings: { userNickname: NICKS.host },
  });
  await guest.req('joinSession', { sessionId: created.sessionId, userSettings: { userNickname: NICKS.guest } });

  // advance playback so there is state to recover
  host.fire('updateSession', { state: 'playing', lastKnownTime: 42_000, lastKnownTimeUpdatedAt: Date.now() });
  await guest.next('updateSession');

  await t.test('reboot after reconnect restores session state', async () => {
    guest.close();
    const reconnected = await h.client();
    const snap = await reconnected.req('reboot', { sessionId: created.sessionId, userSettings: { userNickname: NICKS.guest } });
    assert.ok(!snap.errorMessage, `reboot failed: ${snap.errorMessage}`);
    assert.equal(snap.sessionId, created.sessionId);
    assert.equal(snap.state, 'playing');
    assert.equal(snap.lastKnownTime, 42_000);
    reconnected.close();
  });

  await t.test('reboot into a non-existent session reports expiry', async () => {
    const stray = await h.client();
    const snap = await stray.req('reboot', { sessionId: 'f'.repeat(16) });
    assert.ok(snap.errorMessage, 'expected an error for an unknown session');
    stray.close();
  });

  host.close();
};
