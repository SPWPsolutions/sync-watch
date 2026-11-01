'use strict';
// Scenario: two-user playback sync (create/join, play, pause, seek, late-join snapshot).
const { VIDEO_SOURCES, NICKS, assertSessionSnapshot } = require('../fixtures/test-data');

module.exports = async function twoUserSync(t, h, assert) {
  const host = await h.client();
  const guest = await h.client();

  await t.test('clock sync returns server time', async () => {
    const { serverTime } = await host.req('getServerTime', {});
    assert.equal(typeof serverTime, 'number');
  });

  let sessionId;
  await t.test('host creates a session', async () => {
    const created = await host.req('createSession', {
      ...VIDEO_SOURCES.directMp4,
      userSettings: { userNickname: NICKS.host },
    });
    assertSessionSnapshot(assert, created);
    assert.equal(created.state, 'paused');
    assert.ok(created.partyUrl && created.partyUrl.includes(`/join/${created.sessionId}`), 'party link present');
    sessionId = created.sessionId;
  });

  await t.test('guest joins and receives current video metadata', async () => {
    const joined = await guest.req('joinSession', { sessionId, userSettings: { userNickname: NICKS.guest } });
    assertSessionSnapshot(assert, joined);
    assert.equal(joined.videoId, VIDEO_SOURCES.directMp4.videoId);
    const ul = await host.next('userList', (m) => m.data.length === 2);
    assert.deepEqual(ul.data.map((u) => u.userSettings.userNickname).sort(), [NICKS.guest, NICKS.host]);
  });

  await t.test('play propagates host -> guest', async () => {
    host.fire('updateSession', { state: 'playing', lastKnownTime: 12_000, lastKnownTimeUpdatedAt: Date.now() });
    const play = await guest.next('updateSession');
    assert.equal(play.data.state, 'playing');
    assert.equal(play.data.lastKnownTime, 12_000);
    assert.equal(typeof play.data.lastKnownTimeUpdatedAt, 'number');
  });

  await t.test('seek + pause propagates guest -> host', async () => {
    guest.fire('updateSession', { state: 'paused', lastKnownTime: 95_500, lastKnownTimeUpdatedAt: Date.now() });
    const pause = await host.next('updateSession');
    assert.equal(pause.data.state, 'paused');
    assert.equal(pause.data.lastKnownTime, 95_500);
  });

  await t.test('sender receives no echo of its own update', async () => {
    guest.fire('updateSession', { state: 'playing', lastKnownTime: 1000, lastKnownTimeUpdatedAt: Date.now() });
    await assert.rejects(guest.next('updateSession', () => true, 400), /timeout/);
    // drain the host's copy so later assertions start clean
    await host.next('updateSession');
  });

  await t.test('late joiner gets current playback state in snapshot', async () => {
    const late = await h.client();
    const lj = await late.req('joinSession', { sessionId, userSettings: { userNickname: NICKS.late } });
    assertSessionSnapshot(assert, lj);
    assert.equal(lj.state, 'playing');
    assert.equal(lj.lastKnownTime, 1000);
    late.close();
  });

  host.close();
  guest.close();
};
