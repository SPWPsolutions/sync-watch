// Hulu content-script adapter for Party Sync.
// Drives Hulu's HTML5 <video> element and pauses sync coordination during ad pods.
(() => {
  const watchId = () => (location.pathname.match(/\/watch\/([A-Za-z0-9_-]+)/) || [])[1] || null;

  function findVideo() {
    if (!watchId()) return null;
    const contentVideo = document.querySelector('#content-video-player, video.content-video-player');
    if (contentVideo) return contentVideo;
    const videos = [...document.querySelectorAll('video')].filter((v) => v.id !== 'ad-video-player');
    return videos.find((v) => v.currentSrc || v.src) || videos[0] || null;
  }

  function isHeld() {
    const adVideo = document.querySelector('#ad-video-player');
    if (adVideo && !adVideo.paused && adVideo.readyState > 1) return true;
    return !!document.querySelector('.AdUnitView, [data-automationid="ad-Overlay"]');
  }

  function followEpisodes({ socket, snapshot, sync }) {
    let partyVideoId = snapshot.videoId || null;
    let last = watchId();

    const go = (id) => {
      if (id && /^[A-Za-z0-9_-]+$/.test(id) && id !== watchId()) location.assign(`/watch/${id}`);
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
    service: 'hulu',
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
