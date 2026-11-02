'use strict';
// End-to-end: two protocol clients, create/join/sync/chat/presence/leave.
// Run: npm test
const test = require('node:test');
const assert = require('node:assert');
const WebSocket = require('ws');

process.env.LOG = '0';
const { httpServer, wss } = require('../src/server');

let port;
test.before(() => new Promise((r) => httpServer.listen(0, '127.0.0.1', () => { port = httpServer.address().port; r(); })));
test.after(() => { for (const c of wss.clients) c.terminate(); wss.close(); httpServer.close(); });

function client() {
  return new Promise((resolve) => {
    const ws = new WebSocket(`ws://127.0.0.1:${port}`);
    const inbox = [];
    const waiters = [];
    let seq = 0;
    const pending = new Map();
    ws.on('message', (raw) => {
      const m = JSON.parse(raw);
      if (m.callbackId && pending.has(m.callbackId)) { pending.get(m.callbackId)(m.data); pending.delete(m.callbackId); return; }
      inbox.push(m);
      for (const w of [...waiters]) if (w.pred(m)) { waiters.splice(waiters.indexOf(w), 1); w.resolve(m); }
      if (m.type === 'userId') resolve(api);
    });
    const api = {
      ws,
      inbox,
      req: (type, data) => new Promise((r) => { const id = String(++seq); pending.set(id, r); ws.send(JSON.stringify({ type, data, callbackId: id })); }),
      fire: (type, data) => ws.send(JSON.stringify({ type, data, callbackId: 'null' })),
      next: (type, pred = () => true, ms = 2000) => new Promise((res, rej) => {
        const hit = inbox.find((m) => m.type === type && pred(m));
        if (hit) { inbox.splice(inbox.indexOf(hit), 1); return res(hit); }
        const t = setTimeout(() => rej(new Error(`timeout waiting for ${type}`)), ms);
        waiters.push({ pred: (m) => m.type === type && pred(m), resolve: (m) => { clearTimeout(t); inbox.splice(inbox.indexOf(m), 1); res(m); } });
      }),
    };
  });
}

test('two clients sync playback', async () => {
  const host = await client();
  const guest = await client();

  const { serverTime } = await host.req('getServerTime', {});
  assert.ok(Math.abs(serverTime - Date.now()) < 1000);

  const created = await host.req('createSession', { videoId: '80057281', videoService: 'netflix', userSettings: { userNickname: 'host' } });
  assert.match(created.sessionId, /^[a-f0-9]{16}$/);
  assert.equal(created.state, 'paused');

  const bad = await guest.req('joinSession', { sessionId: 'deadbeef' });
  assert.ok(bad.errorMessage);

  const joined = await guest.req('joinSession', { sessionId: created.sessionId, userSettings: { userNickname: 'guest' } });
  assert.equal(joined.sessionId, created.sessionId);
  assert.equal(joined.videoId, '80057281');

  // presence: host sees 2 users
  const ul = await host.next('userList', (m) => m.data.length === 2);
  assert.deepEqual(ul.data.map((u) => u.userSettings.userNickname).sort(), ['guest', 'host']);
  await host.next('sendMessage', (m) => m.data.isSystemMessage && m.data.body === 'joined');

  // play from host -> guest
  host.fire('updateSession', { state: 'playing', lastKnownTime: 12_000, lastKnownTimeUpdatedAt: Date.now() });
  const play = await guest.next('updateSession');
  assert.equal(play.data.state, 'playing');
  assert.equal(play.data.lastKnownTime, 12_000);

  // seek + pause from guest -> host
  guest.fire('updateSession', { state: 'paused', lastKnownTime: 95_500, lastKnownTimeUpdatedAt: Date.now() });
  const pause = await host.next('updateSession');
  assert.equal(pause.data.state, 'paused');
  assert.equal(pause.data.lastKnownTime, 95_500);

  // sender does not get its own echo
  await assert.rejects(guest.next('updateSession', () => true, 200));

  // late joiner gets current state in join snapshot
  const late = await client();
  const lj = await late.req('joinSession', { sessionId: created.sessionId });
  assert.equal(lj.state, 'paused');
  assert.equal(lj.lastKnownTime, 95_500);
  assert.ok(lj.messages.length >= 1);

  // chat broadcast to everyone incl. sender
  guest.fire('sendMessage', { body: 'hi' });
  for (const c of [host, guest, late]) assert.equal((await c.next('sendMessage', (m) => m.data.body === 'hi')).data.userNickname, 'guest');

  // buffering presence
  guest.fire('setBufferingPresence', { buffering: true });
  const buf = await host.next('setBufferingPresence', (m) => m.data.usersBuffering.length === 1);
  assert.equal(buf.data.usersBuffering[0], joined.userList.find((u) => u.userSettings.userNickname === 'guest').userId);

  // disconnect -> userList shrinks, host migration
  host.ws.close();
  const after = await guest.next('userList', (m) => m.data.length === 2 && m.data.every((u) => u.userSettings.userNickname !== 'host'));
  assert.ok(after.data.some((u) => u.isHost), 'host role migrated to a remaining member');

  guest.ws.close();
  late.ws.close();
});

test('host controlLock, reactions, and custom profile settings', async () => {
  const host = await client();
  const guest = await client();

  const created = await host.req('createSession', {
    videoId: '80057281',
    videoService: 'netflix',
    controlLock: true,
    reactionsDisabled: false,
    userSettings: { userNickname: 'HostUser', userIcon: '👑', nameColor: '#f472b6', badge: '👑 Host' },
  });
  assert.equal(created.controlLock, 'true');
  assert.equal(created.reactionsDisabled, 'false');

  await guest.req('joinSession', {
    sessionId: created.sessionId,
    userSettings: { userNickname: 'GuestUser', userIcon: '🍿', nameColor: '#34d399', badge: '★ VIP' },
  });

  // Guest attempt to updateSession in locked room is rejected
  const lockedUpdate = await guest.req('updateSession', { state: 'playing', lastKnownTime: 5000 });
  assert.equal(lockedUpdate.errorMessage, 'Locked Session');

  // Guest attempt to nextEpisode in locked room is rejected
  const lockedEp = await guest.req('nextEpisode', { videoId: '80057282', nextEpisode: '80057282' });
  assert.equal(lockedEp.errorMessage, 'Locked Session');

  // Host updateSession succeeds
  const hostUpdate = await host.req('updateSession', { state: 'playing', lastKnownTime: 7000 });
  assert.equal(hostUpdate.ok, true);
  const guestRecv = await guest.next('updateSession');
  assert.equal(guestRecv.data.lastKnownTime, 7000);

  // Reactions work when enabled
  const reactAck = await guest.req('sendReaction', { reactionType: 'fire' });
  assert.equal(reactAck.ok, true);
  const hostReact = await host.next('sendReaction');
  assert.equal(hostReact.data.reactionType, 'fire');
  assert.equal(hostReact.data.userNickname, 'GuestUser');

  // Host disables reactions live
  const settingsRes = await host.req('updatePartySettings', { controlLock: false, reactionsDisabled: true });
  assert.equal(settingsRes.controlLock, 'false');
  assert.equal(settingsRes.reactionsDisabled, 'true');
  const guestSettings = await guest.next('partySettings');
  assert.equal(guestSettings.data.reactionsDisabled, 'true');

  // Reactions are rejected when disabled
  const blockedReact = await guest.req('sendReaction', { reactionType: 'heart' });
  assert.equal(blockedReact.errorMessage, 'Reactions are disabled');

  // Live profile update broadcasts userSettings and enriches chat messages
  await guest.req('broadcastUserSettings', {
    userSettings: { userNickname: 'UpdatedGuest', userIcon: '🚀', nameColor: '#60a5fa', badge: '⚡ Speed' },
  });
  await host.next('updateSettings', (m) => m.data.userSettings.userNickname === 'UpdatedGuest');

  guest.fire('sendMessage', { body: 'styled chat' });
  const chatMsg = await host.next('sendMessage', (m) => m.data.body === 'styled chat');
  assert.equal(chatMsg.data.userNickname, 'UpdatedGuest');
  assert.equal(chatMsg.data.userIcon, '🚀');
  assert.equal(chatMsg.data.nameColor, '#60a5fa');
  assert.equal(chatMsg.data.badge, '⚡ Speed');

  host.ws.close();
  guest.ws.close();
});

