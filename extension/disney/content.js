// Disney+ content-script adapter for Party Sync.
(() => {
  const SOURCE = 'party-sync-disney';
  const BRIDGE_TIMEOUT_MS = 2500;
  const pending = new Map();
  let seq = 0;
  let media = null;

  window.addEventListener('message', (e) => {
    const msg = e.data;
    if (e.source !== window || msg?.source !== SOURCE || msg.dir !== 'to-content') return;
    const p = pending.get(msg.requestId);
    if (!p) return;
    pending.delete(msg.requestId);
    clearTimeout(p.timer);
    msg.ok ? p.resolve(msg.value) : p.reject(new Error(msg.error || 'Disney+ command failed'));
  });

  function callPage(cmd, args) {
    const requestId = `dp-${++seq}`;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.delete(requestId);
        reject(new Error(`${cmd}: Disney+ bridge timeout`));
      }, BRIDGE_TIMEOUT_MS);
      pending.set(requestId, { resolve, reject, timer });
      window.postMessage({ source: SOURCE, dir: 'to-page', requestId, cmd, args }, location.origin);
    });
  }

  const watchId = () => (location.pathname.match(/\/(?:play|video)\/([A-Za-z0-9_-]+)/) || [])[1] || null;

  function findVideo() {
    if (!watchId()) return null;
    const host = document.querySelector('disney-web-player');
    if (host?.shadowRoot) {
      const sv = host.shadowRoot.querySelector('video');
      if (sv) return sv;
    }
    const videos = [...document.querySelectorAll('video')];
    return videos.find((v) => v.currentSrc || v.src) || videos[0] || null;
  }

  function isHeld() {
    return !!document.querySelector('.ad-badge, [data-testid="ad-badge"], .ad-countdown');
  }

  function followEpisodes({ socket, snapshot, sync }) {
    let partyVideoId = snapshot.videoId || null;
    let last = watchId();

    const go = (id) => {
      if (id && /^[A-Za-z0-9_-]+$/.test(id) && id !== watchId()) location.assign(`/play/${id}`);
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
    service: 'disney',
    getVideoId: watchId,
    createMedia: () =>
      (media = new PartySync.MediaAdapter({
        findVideo,
        isHeld,
        seek: (ms) =>
          callPage('seek', { ms }).catch(() => {
            if (media?.el) media.el.currentTime = ms / 1000;
          }),
        play: () => callPage('play').catch(() => media?.el?.play()),
        pause: () => callPage('pause').catch(() => media?.el?.pause()),
      })),
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
