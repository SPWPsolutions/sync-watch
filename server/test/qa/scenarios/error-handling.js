'use strict';
// Scenario: error handling. Invalid session ids, actions issued without a room,
// malformed frames, and unknown message types must fail gracefully without
// crashing the connection.
const { VIDEO_SOURCES, NICKS, INVALID_SESSION_IDS } = require('../fixtures/test-data');

module.exports = async function errorHandling(t, h, assert) {
  await t.test('joining unknown / malformed session ids returns an error, not a crash', async () => {
    const c = await h.client();
    for (const bad of INVALID_SESSION_IDS) {
      const res = await c.req('joinSession', { sessionId: bad });
      assert.ok(res.errorMessage, `expected error for sessionId=${JSON.stringify(bad)}`);
    }
    // socket still usable afterwards
    const ok = await c.req('getServerTime', {});
    assert.equal(typeof ok.serverTime, 'number');
    c.close();
  });

  await t.test('room-scoped action before joining is rejected', async () => {
    const c = await h.client();
    const res = await c.req('sendMessage', { body: 'no room yet' });
    assert.ok(res.errorMessage, 'sendMessage without a room should error');
    assert.match(res.errorMessage, /not in a session/i);
    c.close();
  });

  await t.test('malformed JSON frame is ignored and the socket survives', async () => {
    const c = await h.client();
    c.ws.send('this is not json {');
    c.ws.send('{"type":');
    const ok = await c.req('getServerTime', {});
    assert.equal(typeof ok.serverTime, 'number', 'socket still responds after junk frames');
    c.close();
  });

  await t.test('unknown message type is ignored without error or disconnect', async () => {
    const c = await h.client();
    c.fire('totallyMadeUpType', { foo: 1 });
    const ok = await c.req('getServerTime', {});
    assert.equal(typeof ok.serverTime, 'number');
    c.close();
  });

  await t.test('a request with no callback (fire) produces no reply frame', async () => {
    const host = await h.client();
    const created = await host.req('createSession', { ...VIDEO_SOURCES.directMp4, userSettings: { userNickname: NICKS.host } });
    assert.match(created.sessionId, /^[a-f0-9]{16}$/);
    // fire updateSession (callbackId "null"); there should be no reply addressed back to host
    host.fire('updateSession', { state: 'playing', lastKnownTime: 1, lastKnownTimeUpdatedAt: Date.now() });
    await assert.rejects(host.next('updateSession', () => true, 400), /timeout/);
    host.close();
  });
};
