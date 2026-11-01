'use strict';
// Scenario: chat delivery. Every message (incl. the sender's own) is broadcast,
// bodies are preserved verbatim (escaping is the client's render-time concern),
// and long bodies are capped at 2000 chars by the server.
const { VIDEO_SOURCES, NICKS, CHAT_MESSAGES } = require('../fixtures/test-data');

module.exports = async function chat(t, h, assert) {
  const host = await h.client();
  const guest = await h.client();
  const created = await host.req('createSession', { ...VIDEO_SOURCES.directMp4, userSettings: { userNickname: NICKS.host } });
  await guest.req('joinSession', { sessionId: created.sessionId, userSettings: { userNickname: NICKS.guest } });
  // drain join system message / userList so chat assertions are isolated
  await host.next('sendMessage', (m) => m.data.isSystemMessage && m.data.body === 'joined').catch(() => {});

  await t.test('message is delivered to all members including sender', async () => {
    guest.fire('sendMessage', { body: CHAT_MESSAGES[0] });
    for (const c of [host, guest]) {
      const m = await c.next('sendMessage', (x) => x.data.body === CHAT_MESSAGES[0]);
      assert.equal(m.data.userNickname, NICKS.guest);
      assert.equal(m.data.isSystemMessage, false);
      assert.ok(m.data.messageId, 'message has an id');
    }
  });

  await t.test('bodies with markup are relayed verbatim (no server-side mangling)', async () => {
    const payload = CHAT_MESSAGES[3];
    guest.fire('sendMessage', { body: payload });
    const m = await host.next('sendMessage', (x) => x.data.body === payload);
    assert.equal(m.data.body, payload, 'server does not alter the body; client escapes at render');
  });

  await t.test('unicode survives the round trip', async () => {
    const payload = CHAT_MESSAGES[2];
    host.fire('sendMessage', { body: payload });
    const m = await guest.next('sendMessage', (x) => x.data.body === payload);
    assert.equal(m.data.body, payload);
  });

  await t.test('overlong bodies are capped at 2000 chars', async () => {
    const huge = 'A'.repeat(5000);
    guest.fire('sendMessage', { body: huge });
    const m = await host.next('sendMessage', (x) => x.data.body.startsWith('AAAA'));
    assert.equal(m.data.body.length, 2000);
  });

  host.close();
  guest.close();
};
