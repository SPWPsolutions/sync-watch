// YouTube MAIN-world player bridge for Party Sync.
// Uses #movie_player's public player API methods (playVideo, pauseVideo, seekTo, getCurrentTime).
(() => {
  const SOURCE = 'party-sync-youtube';

  function getPlayer() {
    return document.querySelector('#movie_player') || document.querySelector('#shorts-player');
  }

  const handlers = {
    play() {
      const p = getPlayer();
      if (p && typeof p.playVideo === 'function') p.playVideo();
      else document.querySelector('video.html5-main-video, video')?.play();
    },
    pause() {
      const p = getPlayer();
      if (p && typeof p.pauseVideo === 'function') p.pauseVideo();
      else document.querySelector('video.html5-main-video, video')?.pause();
    },
    seek({ ms }) {
      const sec = Math.max(0, (Number(ms) || 0) / 1000);
      const p = getPlayer();
      if (p && typeof p.seekTo === 'function') p.seekTo(sec, true);
      else {
        const v = document.querySelector('video.html5-main-video, video');
        if (v) v.currentTime = sec;
      }
    },
  };

  window.addEventListener('message', async (e) => {
    const msg = e.data;
    if (e.source !== window || msg?.source !== SOURCE || msg.dir !== 'to-page') return;
    const { requestId, cmd, args } = msg;
    try {
      const fn = handlers[cmd];
      if (!fn) throw new Error(`Unknown command: ${cmd}`);
      const value = await fn(args || {});
      window.postMessage({ source: SOURCE, dir: 'to-content', requestId, ok: true, value }, location.origin);
    } catch (err) {
      window.postMessage({ source: SOURCE, dir: 'to-content', requestId, ok: false, error: err?.message || String(err) }, location.origin);
    }
  });
})();
