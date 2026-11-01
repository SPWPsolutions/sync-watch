// Runs in the page's main world (manifest "world": "MAIN"). Netflix's player crashes (error M7375)
// if video.currentTime is written directly, and it resumes playback after its own seeks if paused
// only at the <video> level, so seek, play and pause all go through the player's API.
// Protocol: content -> page { source, dir: 'to-page', requestId, cmd, args }
//           page -> content { source, dir: 'to-content', requestId, ok, value?, error? }
//           page -> content { source, dir: 'state', state }   (pushed while on /watch)
(() => {
  const SOURCE = 'party-sync';
  const STATE_INTERVAL_MS = 250;
  // Seeking onto the last frame ends the title and opens Netflix's end-of-title screen.
  const END_GUARD_MS = 250;
  const MEDIA_EVENTS = ['play', 'pause', 'seeked', 'waiting', 'playing', 'loadedmetadata', 'emptied'];

  function videoPlayerApi() {
    return window.netflix?.appContext?.state?.playerApp?.getAPI?.()?.videoPlayer || null;
  }

  function player(vp = videoPlayerApi()) {
    const ids = vp?.getAllPlayerSessionIds?.() || [];
    const id = ids.find((s) => s.startsWith('watch')) || ids[0];
    return id ? vp.getVideoPlayerBySessionId(id) : null;
  }

  function requirePlayer() {
    const p = player();
    if (!p) throw new Error('Netflix player API not found');
    return p;
  }

  function attempt(fn) {
    try {
      return fn();
    } catch {
      return undefined;
    }
  }

  // Walks up from the watch view's React fiber to the first component matching `has`; no fixed depth.
  function findView(has) {
    const el = document.querySelector('.watch-video');
    const key = el && Object.keys(el).find((k) => k.startsWith('__reactFiber$'));
    for (let f = key && el[key]; f; f = f.return) {
      if (attempt(() => has(f.stateNode))) return f.stateNode;
    }
    return null;
  }

  let partyMode = false;
  const skippedSupplementals = new WeakSet();
  const postPlayOriginals = new WeakMap();
  const noPostPlay = () => false;

  // In a party: skip recaps/trailers so everyone reaches the episode together, and suppress post-play
  // on movies, whose end screen autoplays an unrelated title that episode following would chase.
  function applyPartyMode() {
    const view = findView((n) => n.state.activeVideoMetadata);
    if (!view) return;
    const video = attempt(() => view.state.activeVideoMetadata._video);
    if (partyMode && video?.type === 'supplemental' && !skippedSupplementals.has(video)) {
      skippedSupplementals.add(video);
      attempt(() => view.handleFinishPrePlay());
    }
    const isMovie = attempt(() => view.state.playableData.summary.type) === 'movie';
    const saved = postPlayOriginals.get(view);
    if (partyMode && isMovie && !saved) {
      postPlayOriginals.set(view, { own: Object.hasOwn(view, 'hasPostPlay'), fn: view.hasPostPlay });
      view.hasPostPlay = noPostPlay;
    } else if (saved && !(partyMode && isMovie)) {
      if (saved.own) view.hasPostPlay = saved.fn;
      else delete view.hasPostPlay;
      postPlayOriginals.delete(view);
    }
  }

  function readState() {
    const vp = videoPlayerApi();
    const p = attempt(() => player(vp));
    const s = { hasApi: !!vp, hasPlayer: !!p };
    const adBreak = attempt(() => findView((n) => 'currentAdBreak' in n.state.playbackState)?.state.playbackState.currentAdBreak);
    s.inAd = adBreak != null;
    if (!p) return s;
    const el = document.querySelector('.watch-video video') || document.querySelector('video');
    const timeMs = attempt(() => p.getCurrentTime());
    if (Number.isFinite(timeMs)) {
      s.timeMs = timeMs;
      if (el) s.offsetMs = timeMs - el.currentTime * 1000;
    }
    s.paused = attempt(() => p.isPaused());
    s.durationMs = attempt(() => p.getDuration());
    return s;
  }

  function publish() {
    if (!location.pathname.startsWith('/watch')) return;
    window.postMessage({ source: SOURCE, dir: 'state', state: readState() }, location.origin);
  }

  const commands = {
    seek({ ms }) {
      if (!Number.isFinite(ms) || ms < 0) throw new Error('invalid seek target');
      const p = requirePlayer();
      const dur = attempt(() => p.getDuration());
      const target = Number.isFinite(dur) && dur > END_GUARD_MS ? Math.min(ms, dur - END_GUARD_MS) : ms;
      p.seek(Math.round(target));
    },
    play() {
      requirePlayer().play();
    },
    pause() {
      requirePlayer().pause();
    },
    state() {
      return readState();
    },
    partyMode({ active }) {
      partyMode = !!active;
      applyPartyMode();
    },
  };

  window.addEventListener('message', (e) => {
    const msg = e.data;
    if (e.source !== window || msg?.source !== SOURCE || msg.dir !== 'to-page') return;
    const reply = (ok, value, error) => window.postMessage({ source: SOURCE, dir: 'to-content', requestId: msg.requestId, ok, value, error }, location.origin);
    const fn = Object.hasOwn(commands, msg.cmd) && commands[msg.cmd];
    if (!fn) return reply(false, undefined, `unknown command ${msg.cmd}`);
    try {
      reply(true, fn(msg.args || {}));
    } catch (err) {
      reply(false, undefined, err.message);
    }
    publish();
  });

  for (const t of MEDIA_EVENTS) document.addEventListener(t, publish, true);
  setInterval(() => {
    publish();
    if (location.pathname.startsWith('/watch')) attempt(applyPartyMode);
  }, STATE_INTERVAL_MS);
})();
