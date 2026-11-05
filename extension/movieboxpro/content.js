// MovieBox Pro content-script adapter for Party Sync.
// The site plays titles in a modal on the /movie/<id> and /tvshow/<id> detail pages, through either
// JW Player (#player_box) or Video.js (#my-video), whichever the viewer picked. Both sit on hls.js and
// a plain <video>, so events and the clock come from the element; commands go through injected.js.
//
// Party video IDs: "movie-<n>" for films, "tv-<n>-s<season>e<episode>" for episodes ("tv-<n>" alone
// is a show page with no player open yet). The episode comes from injected.js, which reads it off the
// player resource the page fetches, since the in-player episode panel changes it without touching the
// URL. Episodes are opened with the site's own deep link, /tvshow/<n>?season=S&episode=E&play=1, which
// is also what its Next Episode button navigates to.
(() => {
  const SOURCE = 'party-sync-movieboxpro';
  const BRIDGE_TIMEOUT_MS = 2500;
  const PLAY_CONFIRM_MS = 1500;
  const STATE_STALE_MS = 2000;
  // The site seeks to the viewer's saved position right after mounting a player; hold sync past it.
  const RESUME_HOLD_MS = 3000;
  // Written before navigating for the party; tells the next page load the switch was not the viewer's.
  const FOLLOW_KEY = 'partySync.mbp.follow';
  const pending = new Map();
  let seq = 0;
  let media = null;
  let pageState = null;

  window.addEventListener('message', (e) => {
    const msg = e.data;
    if (e.source !== window || msg?.source !== SOURCE) return;
    if (msg.dir === 'state') {
      pageState = { ...msg.state, receivedAt: performance.now() };
      return;
    }
    if (msg.dir !== 'to-content') return;
    const p = pending.get(msg.requestId);
    if (!p) return;
    pending.delete(msg.requestId);
    clearTimeout(p.timer);
    msg.ok ? p.resolve(msg.value) : p.reject(new Error(msg.error || 'MovieBox Pro command failed'));
  });

  function callPage(cmd, args) {
    const requestId = `mbp-${++seq}`;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.delete(requestId);
        reject(new Error(`${cmd}: MovieBox Pro bridge timeout`));
      }, BRIDGE_TIMEOUT_MS);
      pending.set(requestId, { resolve, reject, timer });
      window.postMessage({ source: SOURCE, dir: 'to-page', requestId, cmd, args }, location.origin);
    });
  }

  const warn = (err) => console.warn('[party-sync]', err.message);

  const freshState = () => (pageState && performance.now() - pageState.receivedAt < STATE_STALE_MS ? pageState : null);

  // ------------------------------------------------------------------ video ids

  function titleFromPath() {
    const m = location.pathname.match(/^\/(movie|tvshow)\/(\d+)(?:\/|$)/);
    return m ? { type: m[1] === 'movie' ? 'movie' : 'tv', id: m[2] } : null;
  }

  // Id implied by the URL alone: the episode when the page was opened by deep link, else the title.
  function urlId() {
    const t = titleFromPath();
    if (!t) return null;
    if (t.type === 'movie') return `movie-${t.id}`;
    const q = new URLSearchParams(location.search);
    const season = Number(q.get('season'));
    const episode = Number(q.get('episode'));
    return season > 0 && episode > 0 ? `tv-${t.id}-s${season}e${episode}` : `tv-${t.id}`;
  }

  // Id of the episode the mounted player is actually playing, from the player resource.
  function resourceId() {
    const t = titleFromPath();
    const r = freshState()?.resource;
    if (!t || t.type !== 'tv' || !r) return null;
    if (!(r.season > 0 && r.episode > 0) || (r.tid && String(r.tid) !== t.id)) return null;
    return `tv-${t.id}-s${r.season}e${r.episode}`;
  }

  // What is playing now, or null while no player is open.
  const watchId = () => (findVideo() ? resourceId() || urlId() : null);

  function parseId(id) {
    const m = /^(movie|tv)-(\d+)(?:-s(\d+)e(\d+))?$/.exec(id || '');
    return m ? { type: m[1], id: m[2], season: m[3] ? Number(m[3]) : null, episode: m[4] ? Number(m[4]) : null } : null;
  }

  // Deep link that opens the title and starts playing (play=1 is the site's own autoplay flag).
  function watchUrl(id) {
    const p = parseId(id);
    if (!p) return null;
    if (p.type === 'movie') return `/movie/${p.id}?play=1`;
    return p.season ? `/tvshow/${p.id}?season=${p.season}&episode=${p.episode}&play=1` : `/tvshow/${p.id}?play=1`;
  }

  const sameTitle = (a, b) => {
    const pa = parseId(a);
    const pb = parseId(b);
    return !!pa && !!pb && pa.type === pb.type && pa.id === pb.id;
  };

  // ------------------------------------------------------------------ player element

  const visible = (el) => !!el && el.getClientRects().length > 0 && getComputedStyle(el).visibility !== 'hidden';

  // The trailer popup (.video_player_popup, video#video_player) is never the party video.
  const isTrailer = (v) => v.id === 'video_player' || !!v.closest('.video_player_popup');

  const PLAYER_VIDEOS = ['#player_box video', '#my-video video', 'video#my-video_html5_api'];

  function findVideo() {
    if (!titleFromPath()) return null;
    // Closing the player dialog disposes the player; treat a hidden dialog as no video.
    const dialog = document.getElementById('my_dialog');
    if (dialog && !visible(dialog)) return null;
    for (const sel of PLAYER_VIDEOS) {
      const v = document.querySelector(sel);
      if (v && !isTrailer(v)) return v;
    }
    // Fallback if the site renames its player containers: any loaded, non-trailer <video>.
    // The bare video#my-video placeholder has no source until Video.js mounts, so it is skipped.
    return [...document.querySelectorAll('video')].find((v) => !isTrailer(v) && (v.currentSrc || v.src)) || null;
  }

  let lastEl = null;
  let elSince = 0;
  function trackMount() {
    const el = media?.el || null;
    if (el !== lastEl) {
      lastEl = el;
      elSince = performance.now();
    }
  }

  // Held while the viewer is still choosing a player, the stream is loading, or the site may still
  // apply its own resume seek (only when the resource was fetched before the party was active;
  // otherwise injected.js has already zeroed the resume position).
  function isHeld() {
    if (visible(document.getElementById('player_loading')) || visible(document.querySelector('.player-selector-overlay'))) return true;
    const r = freshState()?.resource;
    return !!(r && r.resumeAt > 0 && !r.patched && media?.el && performance.now() - elSince < RESUME_HOLD_MS);
  }

  let wasHeld = false;
  setInterval(() => {
    trackMount();
    if (!media?.el) return;
    const held = isHeld();
    if (held !== wasHeld) {
      wasHeld = held;
      media.dispatchEvent(new Event(held ? 'emptied' : 'loadedmetadata'));
    }
  }, 500);

  function waitFor(cond, ms) {
    return new Promise((resolve) => {
      const start = performance.now();
      const tick = () => (cond() ? resolve(true) : performance.now() - start >= ms ? resolve(false) : setTimeout(tick, 100));
      tick();
    });
  }

  // JW Player's play() never rejects when autoplay is blocked; report it as NotAllowedError for SyncController's fallback.
  async function play() {
    try {
      await callPage('play');
    } catch {
      return media?.el?.play();
    }
    if (navigator.userActivation?.hasBeenActive !== false) return;
    const started = await waitFor(() => media.el && !media.el.paused, PLAY_CONFIRM_MS);
    if (!started) throw new DOMException('Playback needs a user gesture', 'NotAllowedError');
  }

  // ------------------------------------------------------------------ episode following

  // With several files for an episode the site shows a quality picker instead of autoplaying. After a
  // deep link (play=1: our own navigation, an invite link, or the site's Next Episode) nobody chose a
  // quality, so take the first file as the site itself does when there is only one.
  let autoPicked = false;
  function autoPickFile() {
    if (autoPicked || media?.el || !/[?&]play=1/.test(location.search)) return;
    const picker = document.querySelector('.sidebarbg2');
    const file = picker?.querySelector('ul li');
    if (!visible(picker) || !file) return;
    autoPicked = true;
    file.click();
  }

  // Keeps everyone on the same film or episode. A remote switch navigates us to the party's deep
  // link; runParty resumes the party after the load. A local switch is either in place (the player's
  // episode panel) or a reload the site made (Next Episode, autoplay next); both are announced once
  // the new episode is playing, and the party's position is reset so the previous episode's time is
  // not applied to it.
  function followTitles({ socket, snapshot, sync }) {
    let partyVideoId = snapshot.videoId || null;
    let followed = null;
    try {
      followed = sessionStorage.getItem(FOLLOW_KEY);
      sessionStorage.removeItem(FOLLOW_KEY);
    } catch {}

    const go = (id) => {
      const url = watchUrl(id);
      if (!url || id === watchId() || id === urlId()) return;
      try {
        sessionStorage.setItem(FOLLOW_KEY, id);
      } catch {}
      location.assign(url);
    };

    const off = socket.on('jumpToNextEpisode', (d) => {
      partyVideoId = String(d?.videoId || d?.nextEpisode || partyVideoId || '');
      go(partyVideoId);
    });

    let last = watchId();
    const timer = setInterval(() => {
      autoPickFile();
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

    // A deep link to another episode of the party's show that we did not request is the site's own
    // navigation (Next Episode); let the interval announce it instead of pulling the viewer back.
    const here = urlId();
    const localSwitch = !followed && here && here !== partyVideoId && sameTitle(here, partyVideoId) && !!parseId(here).season;
    if (!localSwitch) go(partyVideoId);

    return () => {
      off();
      clearInterval(timer);
    };
  }

  PartySync.runParty({
    service: 'movieboxpro',
    getVideoId: () => watchId() || urlId(),
    createMedia: () =>
      (media = new PartySync.MediaAdapter({
        findVideo,
        isHeld,
        seek: (ms) =>
          callPage('seek', { ms }).catch(() => {
            if (media?.el) media.el.currentTime = ms / 1000;
          }),
        play,
        pause: () => callPage('pause').catch(() => media?.el?.pause()),
      })),
    onSession(ctx) {
      const stopChat = PartySync.createChat(ctx);
      const stopTitles = followTitles(ctx);
      callPage('partyMode', { active: true }).catch(warn);
      return () => {
        stopChat();
        stopTitles();
        callPage('partyMode', { active: false }).catch(warn);
      };
    },
  });
})();
