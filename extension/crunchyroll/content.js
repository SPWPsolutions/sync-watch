// Crunchyroll adapter for the shared Party Sync stack (shared/socket.js, sync.js, media.js, party.js).
// Drives the page's own HTML5 <video> element; each viewer streams from their own Crunchyroll account.
(() => {
  // Watch URLs look like /watch/<ID>/<slug>, optionally behind a locale prefix such as /fr/.
  const watchId = () => (location.pathname.match(/\/watch\/([A-Z0-9]+)/i) || [])[1] || null;

  // Only the watch-page player counts; elsewhere on the site there is no party video.
  function findVideo() {
    if (!watchId()) return null;
    const videos = [...document.querySelectorAll('video')];
    return videos.find((v) => v.currentSrc || v.src) || videos[0] || null;
  }

  // Writing video.currentTime outside the buffered range can leave Bitmovin's segment loader parked
  // (seeking forever, readyState 1). The player's own arrow-key seek (±10 s, presses accumulate) moves
  // the loader, so coarse moves go through it and only the sub-step remainder is an element seek
  // inside the buffer. Sync is held while this runs and reconciles once it releases.
  const KEY_STEP_S = 10;
  let media = null;
  let pendingTarget = null;
  let seekRunning = false;

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  async function waitFor(cond, ms) {
    const end = performance.now() + ms;
    while (performance.now() < end) {
      if (cond()) return true;
      await sleep(100);
    }
    return false;
  }
  const settled = (v) => !v.seeking && v.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA;
  const buffered = (v, t) => [...Array(v.buffered.length).keys()].some((i) => t >= v.buffered.start(i) && t <= v.buffered.end(i) - 0.5);

  function pressArrows(steps) {
    const host = document.querySelector('.bitmovinplayer-container');
    if (!host) return false;
    const key = steps > 0 ? 'ArrowRight' : 'ArrowLeft';
    const keyCode = steps > 0 ? 39 : 37;
    for (let i = 0; i < Math.abs(steps); i++) {
      for (const type of ['keydown', 'keyup']) host.dispatchEvent(new KeyboardEvent(type, { key, code: key, keyCode, bubbles: true, cancelable: true }));
    }
    return true;
  }

  async function seekTo(target) {
    const v = media?.el;
    if (!v) return;
    const steps = Math.round((target - v.currentTime) / KEY_STEP_S);
    if (steps && pressArrows(steps)) {
      // The player starts the seek a beat after the keypress.
      await waitFor(() => v.seeking, 1000);
      await waitFor(() => settled(v), 8000);
    } else if (steps) {
      v.currentTime = target;
      return;
    }
    if (pendingTarget === null && Math.abs(v.currentTime - target) > 0.25 && buffered(v, target)) {
      v.currentTime = target;
      await waitFor(() => settled(v), 3000);
    }
  }

  async function seek(ms) {
    pendingTarget = ms / 1000;
    if (seekRunning) return;
    seekRunning = true;
    try {
      while (pendingTarget !== null) {
        const target = pendingTarget;
        pendingTarget = null;
        await seekTo(target);
      }
    } finally {
      seekRunning = false;
      // Re-applies party play/pause, which the player may have overridden mid-seek.
      media?.dispatchEvent(new Event('loadedmetadata'));
    }
  }

  // Keeps everyone on the same episode. A local switch (autoplay or "next episode", which is an
  // in-app navigation) is announced to the party; a remote switch navigates us to that episode and
  // runParty resumes the party after the page load.
  function followEpisodes({ socket, snapshot, sync }) {
    let partyVideoId = snapshot.videoId || null;
    let last = watchId();

    const go = (id) => {
      if (id && /^[A-Z0-9]+$/i.test(id) && id !== watchId()) location.assign(`/watch/${id}`);
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
      // Otherwise the previous episode's position would be applied to the new one.
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
    service: 'crunchyroll',
    createMedia: () => (media = new PartySync.MediaAdapter({ findVideo, seek, isHeld: () => seekRunning })),
    onSession(ctx) {
      const stopChat = PartySync.createChat(ctx);
      const stopEpisodes = followEpisodes(ctx);
      return () => {
        stopChat();
        stopEpisodes();
      };
    },
  });
})();
