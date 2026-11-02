/**
 * Player: one media surface over two backends — native <video> (direct URLs, local files)
 * and the YouTube IFrame Player API. Exposes the HTMLMediaElement subset SyncController
 * relies on (currentTime, paused, duration, readyState, error, muted, play(), pause())
 * and re-dispatches the same DOM event names, so the sync logic is backend-agnostic.
 */

const FORWARDED = ['play', 'pause', 'seeked', 'waiting', 'playing', 'canplay', 'loadedmetadata', 'emptied', 'volumechange', 'error', 'ended'];

export function parseYouTubeId(input) {
  let url;
  try {
    url = new URL(input);
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^(www|m|music)\./, '');
  let id = null;
  if (host === 'youtu.be') id = url.pathname.split('/')[1];
  else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    if (url.pathname === '/watch') id = url.searchParams.get('v');
    else id = url.pathname.match(/^\/(?:embed|shorts|live|v)\/([\w-]{11})/)?.[1];
  }
  return id && /^[\w-]{11}$/.test(id) ? id : null;
}

/** Map the protocol's { videoId, videoService } onto a player source. */
export function sourceFor(videoId, videoService) {
  if (!videoId) return { kind: 'none' };
  if (videoService === 'youtube') return { kind: 'youtube', id: videoId };
  if (videoService === 'local' || String(videoId).startsWith('local:')) return { kind: 'local', name: String(videoId).replace(/^local:/, '') };
  return { kind: 'html5', url: videoId };
}

export class Player extends EventTarget {
  constructor({ video, ytHost }) {
    super();
    this.video = video;
    this.ytHost = ytHost;
    this.yt = null;
    this.backend = null;
    this.kind = 'none';
    for (const type of FORWARDED) {
      video.addEventListener(type, () => {
        if (this.backend === video) this.dispatchEvent(new Event(type));
      });
    }
  }

  /** source: { kind: 'html5', url } | { kind: 'youtube', id } | { kind: 'none' } */
  load(source) {
    this.kind = source.kind;
    this.source = source;
    if (source.kind === 'youtube') {
      this.unloadVideo();
      this.video.hidden = true;
      this.ytHost.hidden = false;
      if (!this.yt) this.yt = new YouTubeMedia(this.ytHost, (type) => this.backend === this.yt && this.dispatchEvent(new Event(type)));
      this.backend = this.yt;
      this.yt.load(source.id);
    } else if (source.kind === 'html5') {
      this.yt?.stop();
      this.ytHost.hidden = true;
      this.video.hidden = false;
      this.backend = this.video;
      if (this.video.getAttribute('src') !== source.url) {
        this.video.src = source.url;
        this.video.load();
      }
    } else {
      this.yt?.stop();
      this.ytHost.hidden = true;
      this.video.hidden = false;
      this.unloadVideo();
      this.backend = null;
      this.dispatchEvent(new Event('emptied'));
    }
  }

  unloadVideo() {
    if (!this.video.getAttribute('src')) return;
    this.video.pause();
    this.video.removeAttribute('src');
    this.video.load();
  }

  retry() {
    if (this.backend === this.video) this.video.load();
    else if (this.backend === this.yt) this.yt.load(this.source.id);
  }

  get hasSource() {
    return !!this.backend;
  }

  get currentTime() {
    return this.backend?.currentTime ?? 0;
  }

  set currentTime(t) {
    if (this.backend) this.backend.currentTime = t;
  }

  get paused() {
    return this.backend ? this.backend.paused : true;
  }

  get duration() {
    return this.backend?.duration ?? NaN;
  }

  get readyState() {
    return this.backend?.readyState ?? 0;
  }

  get error() {
    return this.backend ? this.backend.error : null;
  }

  get muted() {
    return !!this.backend?.muted;
  }

  set muted(m) {
    if (this.backend) this.backend.muted = m;
  }

  play() {
    return this.backend ? this.backend.play() : Promise.reject(new DOMException('No media', 'AbortError'));
  }

  pause() {
    this.backend?.pause();
  }
}

// ---------------------------------------------------------------- YouTube backend
let apiPromise = null;

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  apiPromise ??= new Promise((resolve, reject) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(window.YT);
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    script.onerror = () => {
      apiPromise = null;
      script.remove();
      reject(new Error('The YouTube player could not be loaded.'));
    };
    document.head.append(script);
  });
  return apiPromise;
}

const YT_STATE = { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 };
const YT_ERRORS = {
  2: 'This YouTube link is invalid.',
  5: 'This YouTube video can’t be played in the browser player.',
  100: 'This YouTube video was removed or is private.',
  101: 'The owner of this YouTube video doesn’t allow it to be embedded.',
  150: 'The owner of this YouTube video doesn’t allow it to be embedded.',
};
const SEEK_DETECT_S = 1.2;
const PLAY_CONFIRM_MS = 2500;
const PENDING_SEEK_MS = 1500;

class YouTubeMedia {
  constructor(host, emit) {
    this.host = host;
    this.emit = emit;
    this.player = null;
    this.ready = false;
    this.state = YT_STATE.UNSTARTED;
    this.intent = 'pause';
    this.playing = false;
    this.error = null;
    this.id = null;
    this.mutedState = false;
    this.last = null;
    this.pendingSeek = null;
    this.pollTimer = null;
    this.playWaiters = [];
  }

  async load(id) {
    this.id = id;
    this.ready = false;
    this.error = null;
    this.intent = 'pause';
    this.playing = false;
    this.state = YT_STATE.UNSTARTED;
    this.emit('emptied');
    let YT;
    try {
      YT = await loadYouTubeApi();
    } catch (e) {
      return this.fail(e.message);
    }
    if (this.id !== id) return;

    if (this.player) {
      this.player.cueVideoById(id);
      return;
    }
    const mount = document.createElement('div');
    this.host.replaceChildren(mount);
    this.player = new YT.Player(mount, {
      videoId: id,
      width: '100%',
      height: '100%',
      playerVars: { playsinline: 1, rel: 0, modestbranding: 1, origin: location.origin },
      events: {
        onReady: () => this.markReady(),
        onStateChange: (e) => this.onState(e.data),
        onError: (e) => this.fail(YT_ERRORS[e.data] || 'This YouTube video can’t be played.', e.data),
      },
    });
  }

  markReady() {
    if (this.ready) return;
    this.ready = true;
    this.mutedState = this.player.isMuted?.() ?? false;
    this.startPolling();
    this.emit('loadedmetadata');
    this.emit('canplay');
  }

  fail(message, code = 0) {
    this.error = { code, message };
    this.emit('error');
  }

  // YouTube goes UNSTARTED/PAUSED -> BUFFERING -> PLAYING. Emit 'play' exactly once per
  // transition into the playing family, like <video> does, tracked by `this.playing`.
  onState(s) {
    this.state = s;
    if (s === YT_STATE.CUED) return this.markReady();
    if (s === YT_STATE.PLAYING) {
      this.markReady();
      this.intent = 'play';
      this.resolvePlay(true);
      this.enterPlaying();
      this.emit('playing');
    } else if (s === YT_STATE.BUFFERING) {
      // Buffering after a play request counts as playing; buffering while paused (a scrub) doesn't.
      if (this.intent === 'play') this.enterPlaying();
      this.emit('waiting');
    } else if (s === YT_STATE.PAUSED || s === YT_STATE.ENDED) {
      this.intent = 'pause';
      if (this.playing) {
        this.playing = false;
        this.emit('pause');
      }
      if (s === YT_STATE.ENDED) this.emit('ended');
    }
    this.resetSeekBaseline();
  }

  enterPlaying() {
    if (this.playing) return;
    this.playing = true;
    this.emit('play');
  }

  // YouTube has no "seeked" event; infer user seeks from position jumps.
  startPolling() {
    clearInterval(this.pollTimer);
    this.resetSeekBaseline();
    this.pollTimer = setInterval(() => {
      if (!this.ready || !this.last) return;
      const now = performance.now();
      const t = this.currentTime;
      const playing = this.state === YT_STATE.PLAYING;
      const expected = this.last.t + (playing ? ((now - this.last.at) / 1000) * (this.player.getPlaybackRate?.() || 1) : 0);
      this.last = { t, at: now };
      if (Math.abs(t - expected) > SEEK_DETECT_S) this.emit('seeked');
    }, 300);
  }

  resetSeekBaseline() {
    if (this.ready) this.last = { t: this.currentTime, at: performance.now() };
  }

  resolvePlay(ok) {
    const waiters = this.playWaiters;
    this.playWaiters = [];
    for (const w of waiters) w(ok);
  }

  stop() {
    clearInterval(this.pollTimer);
    this.intent = 'pause';
    this.playing = false;
    try {
      this.player?.stopVideo();
    } catch {
      /* player not ready */
    }
  }

  get currentTime() {
    if (!this.ready) return 0;
    const actual = this.player.getCurrentTime() || 0;
    if (this.pendingSeek) {
      if (performance.now() - this.pendingSeek.at < PENDING_SEEK_MS) {
        if (Math.abs(actual - this.pendingSeek.target) <= 0.5) {
          this.pendingSeek = null;
          return actual;
        }
        return this.pendingSeek.target;
      }
      this.pendingSeek = null;
    }
    return actual;
  }

  set currentTime(t) {
    if (!this.ready) return;
    this.pendingSeek = { target: t, at: performance.now() };
    this.player.seekTo(t, true);
    this.last = { t, at: performance.now() };
    setTimeout(() => this.emit('seeked'), 0);
  }

  get paused() {
    return !this.playing;
  }

  get duration() {
    const d = this.ready ? this.player.getDuration() : 0;
    return d > 0 ? d : NaN;
  }

  get readyState() {
    return this.ready ? 4 : 0;
  }

  get muted() {
    return this.mutedState;
  }

  set muted(m) {
    if (!this.ready || m === this.mutedState) return;
    this.mutedState = m;
    m ? this.player.mute() : this.player.unMute();
    this.emit('volumechange');
  }

  /** Resolves once YouTube reports PLAYING; rejects like an autoplay block if it never does. */
  play() {
    if (!this.ready) return Promise.reject(new DOMException('Not ready', 'AbortError'));
    this.intent = 'play';
    this.player.playVideo();
    if (this.state === YT_STATE.PLAYING) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.playWaiters = this.playWaiters.filter((w) => w !== done);
        if (this.state === YT_STATE.PLAYING || this.state === YT_STATE.BUFFERING) return resolve();
        this.intent = 'pause';
        reject(new DOMException('Playback was blocked', 'NotAllowedError'));
      }, PLAY_CONFIRM_MS);
      const done = () => {
        clearTimeout(timer);
        resolve();
      };
      this.playWaiters.push(done);
    });
  }

  pause() {
    if (!this.ready) return;
    this.intent = 'pause';
    this.player.pauseVideo();
  }
}
