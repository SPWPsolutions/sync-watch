// Disney+ MAIN-world player bridge for Party Sync.
// Communicates with disney/content.js via window.postMessage; uses disney-web-player.mediaPlayer when available.
(() => {
  const SOURCE = 'party-sync-disney';

  function getMediaPlayer() {
    const el = document.querySelector('disney-web-player');
    return el?.mediaPlayer || null;
  }

  function findVideoEl() {
    const host = document.querySelector('disney-web-player');
    if (host?.shadowRoot) {
      const sv = host.shadowRoot.querySelector('video');
      if (sv) return sv;
    }
    return document.querySelector('video');
  }

  const handlers = {
    play() {
      const mp = getMediaPlayer();
      if (mp && typeof mp.play === 'function') return mp.play();
      const v = findVideoEl();
      if (!v) throw new Error('No Disney+ player ready');
      return v.play();
    },
    pause() {
      const mp = getMediaPlayer();
      if (mp && typeof mp.pause === 'function') return mp.pause();
      findVideoEl()?.pause();
    },
    seek({ ms }) {
      const targetMs = Math.max(0, Math.round(Number(ms) || 0));
      const mp = getMediaPlayer();
      if (mp && typeof mp.seek === 'function') return mp.seek(targetMs);
      const v = findVideoEl();
      if (v) v.currentTime = targetMs / 1000;
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
