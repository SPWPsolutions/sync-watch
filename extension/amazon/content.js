// Amazon Prime Video content-script adapter for Party Sync.
(() => {
  const watchId = () => (location.pathname.match(/\/(?:gp\/video\/)?detail\/([A-Za-z0-9_-]+)/) || [])[1] || null;

  function findVideo() {
    if (!watchId()) return null;
    const container = document.querySelector('#dv-web-player, .atvwebplayersdk-video-surface') || document;
    const videos = [...container.querySelectorAll('video')];
    return videos.find((v) => (v.currentSrc || v.src) && Number.isFinite(v.duration) && v.duration > 30) || videos.find((v) => v.currentSrc || v.src) || null;
  }

  function isHeld() {
    return !!document.querySelector('.atvwebplayersdk-adtimeindicator-text, .atvwebplayersdk-ad-timer');
  }

  function followEpisodes({ socket, snapshot, sync }) {
    let partyVideoId = snapshot.videoId || null;
    let last = watchId();

    const go = (id) => {
      if (id && /^[A-Za-z0-9_-]+$/.test(id) && id !== watchId()) location.assign(`/gp/video/detail/${id}`);
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
    service: 'amazon',
    getVideoId: watchId,
    createMedia: () => new PartySync.MediaAdapter({ findVideo, isHeld }),
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
