(() => {
  const SOURCE = 'party-sync';
  const BRIDGE_TIMEOUT_MS = 3000;
  const STATE_STALE_MS = 1500;
  const PLAY_CONFIRM_MS = 1500;
  const pending = new Map();
  const stateListeners = new Set();
  let seq = 0;
  let player = null;
  let media = null;

  window.addEventListener('message', (e) => {
    const msg = e.data;
    if (e.source !== window || msg?.source !== SOURCE) return;
    if (msg.dir === 'state') {
      const prev = player;
      player = { ...msg.state, receivedAt: performance.now() };
      for (const fn of stateListeners) fn(player, prev);
      return;
    }
    if (msg.dir !== 'to-content') return;
    const p = pending.get(msg.requestId);
    if (!p) return;
    pending.delete(msg.requestId);
    clearTimeout(p.timer);
    msg.ok ? p.resolve(msg.value) : p.reject(new Error(msg.error || 'player command failed'));
  });

  function callPage(cmd, args) {
    const requestId = `nf-${++seq}`;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.delete(requestId);
        reject(new Error(`${cmd}: page script did not answer`));
      }, BRIDGE_TIMEOUT_MS);
      pending.set(requestId, { resolve, reject, timer });
      window.postMessage({ source: SOURCE, dir: 'to-page', requestId, cmd, args }, location.origin);
    });
  }

  const warn = (err) => console.warn('[party-sync]', err.message);

  const watchId = () => (location.pathname.match(/^\/watch\/(\d+)/) || [])[1] || null;

  const freshPlayer = () => (player && performance.now() - player.receivedAt < STATE_STALE_MS ? player : null);

  // Only the watch-page player counts; /browse autoplays muted trailers in its own <video> elements.
  function findVideo() {
    if (!watchId()) return null;
    return document.querySelector('.watch-video video') || document.querySelector('[data-uia="video-canvas"] video') || document.querySelector('video');
  }

  // Element time plus the last measured player offset stays current between 250 ms state pushes.
  function readTime(el) {
    const s = freshPlayer();
    return s?.hasPlayer && Number.isFinite(s.offsetMs) ? el.currentTime + s.offsetMs / 1000 : NaN;
  }

  function readDuration() {
    const d = freshPlayer()?.durationMs;
    return Number.isFinite(d) ? d / 1000 : NaN;
  }

  // Held during an ad break too: sync pauses for this member and snaps back to party time afterwards.
  function isHeld() {
    const s = freshPlayer();
    return !!(s && ((s.hasApi && !s.hasPlayer) || s.inAd));
  }

  let wasHeld = false;
  stateListeners.add(() => {
    if (!media?.el) return;
    const held = isHeld(media.el);
    if (held !== wasHeld) {
      wasHeld = held;
      media.dispatchEvent(new Event(held ? 'emptied' : 'loadedmetadata'));
    }
  });

  function waitFor(cond, ms) {
    return new Promise((resolve) => {
      const start = performance.now();
      const tick = () => (cond() ? resolve(true) : performance.now() - start >= ms ? resolve(false) : setTimeout(tick, 100));
      tick();
    });
  }

  // The API's play() never rejects when autoplay is blocked; report it as NotAllowedError for SyncController's fallback.
  async function play() {
    await callPage('play');
    if (navigator.userActivation?.hasBeenActive !== false) return;
    const started = await waitFor(() => media.el && !media.el.paused, PLAY_CONFIRM_MS);
    if (!started) throw new DOMException('Playback needs a user gesture', 'NotAllowedError');
  }

  // Keeps everyone on the same episode. A local switch (Netflix's in-app "Next Episode", which
  // does not reload the page) is announced to the party; a remote switch reloads us onto it,
  // and runParty resumes the party after the reload.
  function followEpisodes({ socket, snapshot, sync }) {
    let partyVideoId = snapshot.videoId || null;
    let last = watchId();

    const go = (id) => {
      if (id && /^\d+$/.test(id) && id !== watchId()) location.assign(`/watch/${id}`);
    };

    const off = socket.on('jumpToNextEpisode', (d) => {
      partyVideoId = String(d?.videoId || d?.nextEpisode || partyVideoId || '');
      go(partyVideoId);
    });

    const timer = setInterval(() => {
      const id = watchId();
      if (!id || id === last) return;
      last = id;
      if (id === partyVideoId) return;
      partyVideoId = id;
      // Without this the previous episode's position would be applied to the new one.
      const fresh = { state: 'playing', lastKnownTime: 0, lastKnownTimeUpdatedAt: Math.round(socket.serverNow()), videoId: id };
      socket.fire('nextEpisode', { videoId: id, nextEpisode: id, isNextEpisode: true });
      socket.fire('updateSession', fresh);
      sync.applyRemote(fresh);
    }, 1000);

    go(partyVideoId);
    return () => {
      off();
      clearInterval(timer);
    };
  }

  PartySync.runParty({
    service: 'netflix',
    createMedia: () =>
      (media = new PartySync.MediaAdapter({
        findVideo,
        readTime,
        readDuration,
        isHeld,
        seek: (ms) => callPage('seek', { ms }).catch(warn),
        play,
        pause: () => callPage('pause').catch(warn),
      })),
    onSession(ctx) {
      const stopChat = PartySync.createChat(ctx);
      const stopEpisodes = followEpisodes(ctx);
      callPage('partyMode', { active: true }).catch(warn);
      return () => {
        stopChat();
        stopEpisodes();
        callPage('partyMode', { active: false }).catch(warn);
      };
    },
  });
})();
