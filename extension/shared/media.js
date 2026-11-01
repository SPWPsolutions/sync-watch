(function () {
  const FORWARDED = ['play', 'pause', 'seeked', 'waiting', 'playing', 'canplay', 'loadedmetadata', 'emptied', 'volumechange'];

  // A stable HTMLMediaElement-like facade over whichever <video> the page currently shows.
  // Streaming SPAs replace the element between episodes; SyncController keeps one reference.
  class MediaAdapter extends EventTarget {
    // Hooks are for players with their own state machine; a non-finite readTime/readDuration falls back to the element.
    constructor({ findVideo = () => document.querySelector('video'), seek = null, play = null, pause = null, readTime = null, readDuration = null, isHeld = null } = {}) {
      super();
      this.findVideo = findVideo;
      this.seekImpl = seek;
      this.playImpl = play;
      this.pauseImpl = pause;
      this.readTime = readTime;
      this.readDuration = readDuration;
      this.isHeld = isHeld;
      this.el = null;
      this.forward = (e) => this.dispatchEvent(new Event(e.type));
      this.rebindQueued = false;
      new MutationObserver(() => {
        if (this.rebindQueued) return;
        this.rebindQueued = true;
        setTimeout(() => {
          this.rebindQueued = false;
          this.rebind();
        }, 250);
      }).observe(document.documentElement, { childList: true, subtree: true });
      this.rebind();
    }

    rebind() {
      const v = this.findVideo();
      if (v === this.el) return;
      for (const t of FORWARDED) this.el?.removeEventListener(t, this.forward);
      this.el = v;
      for (const t of FORWARDED) v?.addEventListener(t, this.forward);
      this.dispatchEvent(new Event(v ? 'loadedmetadata' : 'emptied'));
    }

    hasVideo() {
      this.rebind();
      return !!this.el;
    }

    get currentTime() {
      if (!this.el) return 0;
      const t = this.readTime?.(this.el);
      return Number.isFinite(t) ? t : this.el.currentTime;
    }
    set currentTime(seconds) {
      if (!this.el) return;
      if (this.seekImpl) this.seekImpl(seconds * 1000);
      else this.el.currentTime = seconds;
    }
    get paused() {
      return this.el ? this.el.paused : true;
    }
    get duration() {
      if (!this.el) return NaN;
      const d = this.readDuration?.(this.el);
      return Number.isFinite(d) && d > 0 ? d : this.el.duration;
    }
    get readyState() {
      if (!this.el || this.isHeld?.(this.el)) return 0;
      return this.el.readyState;
    }
    get error() {
      return this.el?.error ?? null;
    }
    get muted() {
      return this.el?.muted ?? false;
    }
    set muted(m) {
      if (this.el) this.el.muted = m;
    }
    play() {
      if (!this.el) return Promise.reject(new DOMException('No video element', 'AbortError'));
      return this.playImpl ? this.playImpl() : this.el.play();
    }
    pause() {
      if (!this.el) return;
      if (this.pauseImpl) this.pauseImpl();
      else this.el.pause();
    }
  }

  (globalThis.PartySync ||= {}).MediaAdapter = MediaAdapter;
})();
