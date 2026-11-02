// YouTube content-script adapter for Party Sync.
(() => {
  const SOURCE = 'party-sync-youtube';
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
    msg.ok ? p.resolve(msg.value) : p.reject(new Error(msg.error || 'YouTube command failed'));
  });

  function callPage(cmd, args) {
    const requestId = `yt-${++seq}`;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.delete(requestId);
        reject(new Error(`${cmd}: YouTube bridge timeout`));
      }, BRIDGE_TIMEOUT_MS);
      pending.set(requestId, { resolve, reject, timer });
      window.postMessage({ source: SOURCE, dir: 'to-page', requestId, cmd, args }, location.origin);
    });
  }

  function watchId() {
    if (location.pathname === '/watch') {
      const v = new URLSearchParams(location.search).get('v');
      return v && /^[\w-]{11}$/.test(v) ? v : null;
    }
    return (location.pathname.match(/^\/shorts\/([\w-]{11})/) || [])[1] || null;
  }

  function findVideo() {
    if (!watchId()) return null;
    return document.querySelector('#movie_player video.html5-main-video') || document.querySelector('video.html5-main-video') || document.querySelector('video');
  }

  function isHeld() {
    return !!document.querySelector('#movie_player.ad-showing, .ad-showing');
  }

  function followEpisodes({ socket, snapshot, sync }) {
    let partyVideoId = snapshot.videoId || null;
    let last = watchId();

    const go = (id) => {
      if (id && /^[\w-]{11}$/.test(id) && id !== watchId()) location.assign(`/watch?v=${id}`);
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
    service: 'youtube',
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
