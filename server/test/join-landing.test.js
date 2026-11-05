'use strict';
const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');

process.env.LOG = '0';
const { httpServer, wss, store } = require('../src/server');

let port;
test.before(() => new Promise((r) => httpServer.listen(0, '127.0.0.1', () => { port = httpServer.address().port; r(); })));
test.after(() => { wss.close(); httpServer.close(); });

function get(path) {
  return new Promise((resolve, reject) => {
    http.get({ host: '127.0.0.1', port, path }, (res) => {
      let body = '';
      res.on('data', (c) => (body += c));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }));
    }).on('error', reject);
  });
}

function addHost(room, nickname) {
  room.members.set('u1', { userId: 'u1', permId: 'p1', userSettings: { userNickname: nickname }, joinedAt: Date.now() });
  room.hostUserId = 'u1';
}

test('Netflix party link serves the extension landing page', async () => {
  const room = store.create({ videoId: '80057281', videoService: 'netflix', serviceDomain: 'www.netflix.com' });
  addHost(room, '<b>host</b>');
  const res = await get(`/join/${room.sessionId}`);
  assert.equal(res.status, 200);
  assert.match(res.headers['content-type'], /text\/html/);
  assert.ok(res.body.includes(`href="https://www.netflix.com/watch/80057281?psSession=${room.sessionId}"`));
  assert.match(res.body, /Open on Netflix/);
  assert.match(res.body, /Wooper's Party/);
  assert.match(res.body, /id="install"/);
  assert.ok(res.body.includes('hosted by &lt;b&gt;host&lt;/b&gt;'));
  assert.ok(!res.body.includes('<b>host</b>'));

  const api = await get(`/api/sessions/${room.sessionId}`);
  assert.equal(api.status, 200);
  assert.equal(JSON.parse(api.body).videoId, '80057281');
});

test('Crunchyroll party link opens the episode with the session param', async () => {
  const room = store.create({ videoId: 'GRDV0019R', videoService: 'crunchyroll', serviceDomain: 'www.crunchyroll.com' });
  const res = await get(`/join/${room.sessionId}`);
  assert.equal(res.status, 200);
  assert.ok(res.body.includes(`https://www.crunchyroll.com/watch/GRDV0019R?psSession=${room.sessionId}`));
});

test('Netflix room with a malformed videoId falls back to the web app', async () => {
  const room = store.create({ videoId: '"><script>alert(1)</script>', videoService: 'netflix', serviceDomain: 'www.netflix.com' });
  const res = await get(`/join/${room.sessionId}`);
  assert.equal(res.status, 302);
  assert.equal(res.headers.location, `/?session=${room.sessionId}`);
});

test('Disney+, Hulu, Max, Prime Video, Paramount+, and extension YouTube party links serve extension landing page', async () => {
  const cases = [
    { videoId: 'abc-123', videoService: 'disney', serviceDomain: 'www.disneyplus.com', expected: 'https://www.disneyplus.com/play/abc-123' },
    { videoId: 'hulu-99', videoService: 'hulu', serviceDomain: 'www.hulu.com', expected: 'https://www.hulu.com/watch/hulu-99' },
    { videoId: 'max-42', videoService: 'max', serviceDomain: 'play.max.com', expected: 'https://play.max.com/video/watch/max-42' },
    { videoId: 'B08XYZ1234', videoService: 'amazon', serviceDomain: 'www.amazon.com', expected: 'https://www.amazon.com/gp/video/detail/B08XYZ1234' },
    { videoId: 'pplus-77', videoService: 'paramount', serviceDomain: 'www.paramountplus.com', expected: 'https://www.paramountplus.com/watch/pplus-77' },
    { videoId: 'dQw4w9WgXcQ', videoService: 'youtube', serviceDomain: 'www.youtube.com', expected: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  ];
  for (const c of cases) {
    const room = store.create(c);
    const res = await get(`/join/${room.sessionId}`);
    assert.equal(res.status, 200, `${c.videoService} should return 200 landing page`);
    assert.ok(res.body.includes(c.expected), `${c.videoService} landing page should link to ${c.expected}`);
  }
});

test('web-player parties and unknown ids still redirect to the web app', async () => {
  const room = store.create({ videoId: 'dQw4w9WgXcQ', videoService: 'youtube', serviceDomain: 'watch.pwlive.fyi' });
  const yt = await get(`/join/${room.sessionId}`);
  assert.equal(yt.status, 302);
  assert.equal(yt.headers.location, `/?session=${room.sessionId}`);

  const missing = await get('/join/deadbeefdeadbeef');
  assert.equal(missing.status, 302);
  assert.equal(missing.headers.location, '/?session=deadbeefdeadbeef');
});

test('MovieBox Pro film link opens the title with autoplay and the session param', async () => {
  const room = store.create({ videoId: 'movie-80740', videoService: 'movieboxpro', serviceDomain: 'www.movieboxpro.app' });
  const res = await get(`/join/${room.sessionId}`);
  assert.equal(res.status, 200);
  assert.ok(res.body.includes(`href="https://www.movieboxpro.app/movie/80740?play=1&amp;psSession=${room.sessionId}"`));
  assert.match(res.body, /Open on MovieBox Pro/);
});

test('MovieBox Pro episode link opens that season and episode', async () => {
  const room = store.create({ videoId: 'tv-22297-s2e3', videoService: 'movieboxpro', serviceDomain: 'movieboxpro.app' });
  const res = await get(`/join/${room.sessionId}`);
  assert.equal(res.status, 200);
  assert.ok(res.body.includes(`https://www.movieboxpro.app/tvshow/22297?season=2&amp;episode=3&amp;play=1&amp;psSession=${room.sessionId}`));
});

test('MovieBox Pro show link without an episode opens the show page', async () => {
  const room = store.create({ videoId: 'tv-22297', videoService: 'movieboxpro', serviceDomain: 'www.movieboxpro.app' });
  const res = await get(`/join/${room.sessionId}`);
  assert.ok(res.body.includes(`https://www.movieboxpro.app/tvshow/22297?play=1&amp;psSession=${room.sessionId}`));
});

test('MovieBox Pro room with a malformed videoId falls back to the web app', async () => {
  const room = store.create({ videoId: 'tv-22297-s2e3"><script>', videoService: 'movieboxpro', serviceDomain: 'www.movieboxpro.app' });
  const res = await get(`/join/${room.sessionId}`);
  assert.equal(res.status, 302);
});

test('generic party link names the site and does not auto-redirect', async () => {
  const room = store.create({ videoId: 'https://videos.example.org/watch/42?ep=3', videoService: 'generic', serviceDomain: 'videos.example.org' });
  addHost(room, 'host');
  const res = await get(`/join/${room.sessionId}`);
  assert.equal(res.status, 200);
  assert.ok(res.body.includes(`href="https://videos.example.org/watch/42?ep=3&amp;psSession=${room.sessionId}"`));
  assert.match(res.body, /Open on videos\.example\.org/);
  assert.match(res.body, /data-generic="1"/);
});

test('generic party with a non-web or oversized URL falls back to the web app', async () => {
  for (const videoId of ['javascript:alert(1)', 'https://user:pw@example.org/', `https://example.org/${'a'.repeat(3000)}`, 'not a url']) {
    const room = store.create({ videoId, videoService: 'generic', serviceDomain: 'example.org' });
    const res = await get(`/join/${room.sessionId}`);
    assert.equal(res.status, 302, videoId.slice(0, 40));
  }
});

test('generic party escapes the hostname and URL in the page', async () => {
  const room = store.create({ videoId: 'https://example.org/"><script>x</script>', videoService: 'generic', serviceDomain: 'example.org' });
  const res = await get(`/join/${room.sessionId}`);
  assert.equal(res.status, 200);
  assert.ok(!res.body.includes('<script>x</script>'));
});
