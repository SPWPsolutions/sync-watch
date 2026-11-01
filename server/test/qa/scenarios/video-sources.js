'use strict';
// Scenario: video sources. The server treats video identity as opaque metadata
// it stores and relays; it never fetches or decodes media. Verify that each
// source kind round-trips through create -> join snapshot unchanged, and that a
// mid-session source switch (nextEpisode) propagates and resets playback.
const { VIDEO_SOURCES, NICKS } = require('../fixtures/test-data');

module.exports = async function videoSources(t, h, assert) {
  for (const [kind, src] of Object.entries(VIDEO_SOURCES)) {
    await t.test(`${kind} metadata round-trips through create/join`, async () => {
      const host = await h.client();
      const guest = await h.client();
      const created = await host.req('createSession', { ...src, userSettings: { userNickname: NICKS.host } });
      assert.equal(created.videoId, src.videoId);
      assert.equal(created.videoService, src.videoService);
      const joined = await guest.req('joinSession', { sessionId: created.sessionId });
      assert.equal(joined.videoId, src.videoId, 'joiner sees the same videoId');
      assert.equal(joined.videoService, src.videoService, 'joiner sees the same service');
      host.close();
      guest.close();
    });
  }

  await t.test('nextEpisode switches the source and resets playback for everyone', async () => {
    const host = await h.client();
    const guest = await h.client();
    const created = await host.req('createSession', { ...VIDEO_SOURCES.netflix, userSettings: { userNickname: NICKS.host } });
    await guest.req('joinSession', { sessionId: created.sessionId });
    host.fire('updateSession', { state: 'playing', lastKnownTime: 60_000, lastKnownTimeUpdatedAt: Date.now() });
    await guest.next('updateSession');

    host.fire('nextEpisode', { videoId: '80057282' });
    const jump = await guest.next('jumpToNextEpisode');
    assert.equal(jump.data.videoId, '80057282');

    const late = await h.client();
    const snap = await late.req('joinSession', { sessionId: created.sessionId });
    assert.equal(snap.videoId, '80057282', 'room now points at the new episode');
    assert.equal(snap.state, 'paused', 'playback reset to paused on episode change');
    assert.equal(snap.lastKnownTime, 0, 'position reset to 0 on episode change');

    host.close();
    guest.close();
    late.close();
  });
};
