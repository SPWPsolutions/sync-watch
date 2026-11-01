'use strict';
// Scenario: user presence. Join/leave events, userList updates, buffering/typing
// presence sets, and host migration when the host departs.
const { VIDEO_SOURCES, NICKS } = require('../fixtures/test-data');

module.exports = async function presence(t, h, assert) {
  const host = await h.client();
  const guest = await h.client();
  const created = await host.req('createSession', { ...VIDEO_SOURCES.directMp4, userSettings: { userNickname: NICKS.host } });

  await t.test('join raises a system message and grows the userList', async () => {
    await guest.req('joinSession', { sessionId: created.sessionId, userSettings: { userNickname: NICKS.guest } });
    const sys = await host.next('sendMessage', (m) => m.data.isSystemMessage && m.data.body === 'joined');
    assert.equal(sys.data.userNickname, NICKS.guest);
    const ul = await host.next('userList', (m) => m.data.length === 2);
    assert.ok(ul.data.find((u) => u.userSettings.userNickname === NICKS.host).isHost, 'creator is host');
  });

  await t.test('buffering presence is broadcast to other members', async () => {
    guest.fire('setBufferingPresence', { buffering: true });
    const buf = await host.next('setBufferingPresence', (m) => m.data.usersBuffering.length === 1);
    assert.equal(buf.data.usersBuffering[0], guest.userId);
    guest.fire('setBufferingPresence', { buffering: false });
    await host.next('setBufferingPresence', (m) => m.data.usersBuffering.length === 0);
  });

  await t.test('typing presence is broadcast to other members', async () => {
    guest.fire('setTypingPresence', { typing: true });
    const typ = await host.next('setTypingPresence', (m) => m.data.usersTyping.length === 1);
    assert.equal(typ.data.usersTyping[0], guest.userId);
  });

  await t.test('host departure migrates host role and shrinks userList', async () => {
    host.close();
    const after = await guest.next(
      'userList',
      (m) => m.data.length === 1 && m.data.every((u) => u.userSettings.userNickname !== NICKS.host)
    );
    assert.ok(after.data.some((u) => u.isHost), 'host role migrated to a remaining member');
  });

  guest.close();
};
