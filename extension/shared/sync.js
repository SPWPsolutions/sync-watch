(function () {
/**
 * SyncController keeps a <video> on the party's authoritative timeline (PROTOCOL_SPEC.md §4).
 *
 * Authoritative tuple: { state, lastKnownTime (media ms), lastKnownTimeUpdatedAt (server epoch ms) }.
 * Expected position = lastKnownTime + (playing ? serverNow - lastKnownTimeUpdatedAt : 0).
 *
 * Local media events are classified rather than counted: an event whose resulting
 * player state already matches the authoritative tuple is an echo of a remote command
 * and is ignored; anything else is a user action and is broadcast. This is robust to
 * browsers firing extra/missing play, pause and seeked events.
 */

const TOLERANCE_MS = 1000;
const DRIFT_CHECK_MS = 5000;
const QUIET_AFTER_COMMAND_MS = 700;
const PUSH_DEBOUNCE_MS = 120;

class SyncController {
  /** @param video a Player (or any HTMLMediaElement-like EventTarget) */
  constructor(video, socket) {
    this.video = video;
    this.socket = socket;
    this.auth = null;
    this.active = false;
    this.selfBuffering = false;
    this.blocked = false;
    this.mutedAutoplay = false;
    this.quietUntil = 0;
    this.lastCorrectionAt = 0;
    this.listeners = new Map();
    this.pushTimer = null;
    this.driftTimer = null;
    this.status = 'idle';

    const onLocal = () => this.onLocalEvent();
    video.addEventListener('play', onLocal);
    video.addEventListener('pause', onLocal);
    video.addEventListener('seeked', onLocal);
    video.addEventListener('waiting', () => this.setBuffering(true));
    for (const ev of ['playing', 'canplay', 'seeked']) video.addEventListener(ev, () => this.setBuffering(false));
    video.addEventListener('loadedmetadata', () => this.reconcile());
    video.addEventListener('emptied', () => this.updateStatus());
    video.addEventListener('volumechange', () => {
      if (this.mutedAutoplay && !video.muted) {
        this.mutedAutoplay = false;
        this.emit('muted', false);
      }
    });
  }

  on(type, fn) {
    if (!this.listeners.has(type)) this.listeners.set(type, new Set());
    this.listeners.get(type).add(fn);
  }

  emit(type, data) {
    for (const fn of this.listeners.get(type) || []) fn(data);
  }

  // ---------------------------------------------------------------- session lifecycle
  start(snapshot) {
    this.active = true;
    this.blocked = false;
    this.auth = pick(snapshot);
    clearInterval(this.driftTimer);
    this.driftTimer = setInterval(() => this.reconcile({ periodic: true }), DRIFT_CHECK_MS);
    this.reconcile();
  }

  stop() {
    this.active = false;
    this.auth = null;
    clearInterval(this.driftTimer);
    clearTimeout(this.pushTimer);
    this.setBuffering(false);
    this.selfBuffering = false;
    this.blocked = false;
    this.updateStatus();
  }

  /** Apply an authoritative update from the server (updateSession push / snapshot). */
  applyRemote(data) {
    if (!this.active) return;
    this.auth = pick(data);
    this.reconcile();
  }

  // ---------------------------------------------------------------- core sync
  expectedMs() {
    const a = this.auth;
    if (!a) return 0;
    const elapsed = a.state === 'playing' ? Math.max(0, this.socket.serverNow() - a.lastKnownTimeUpdatedAt) : 0;
    let ms = a.lastKnownTime + elapsed;
    const dur = this.video.duration;
    if (Number.isFinite(dur) && dur > 0) ms = Math.min(ms, dur * 1000);
    return ms;
  }

  hasMedia() {
    return this.video.readyState >= HTMLMediaElement.HAVE_METADATA && !this.video.error;
  }

  reconcile({ periodic = false } = {}) {
    if (!this.active || !this.auth || !this.hasMedia()) return this.updateStatus();
    const v = this.video;
    const target = this.expectedMs();
    const drift = Math.abs(v.currentTime * 1000 - target);

    // A buffering player naturally lags; don't fight it with repeated seeks.
    if (drift >= TOLERANCE_MS && !(periodic && this.selfBuffering)) {
      this.quietUntil = performance.now() + QUIET_AFTER_COMMAND_MS;
      this.lastCorrectionAt = performance.now();
      v.currentTime = target / 1000;
    }

    if (this.auth.state === 'playing' && v.paused && !this.blocked) {
      this.quietUntil = performance.now() + QUIET_AFTER_COMMAND_MS;
      this.playWithFallback();
    } else if (this.auth.state === 'paused' && !v.paused) {
      this.quietUntil = performance.now() + QUIET_AFTER_COMMAND_MS;
      v.pause();
    }
    this.updateStatus();
  }

  async playWithFallback() {
    const v = this.video;
    try {
      await v.play();
      this.setBlocked(false);
    } catch (err) {
      if (err?.name !== 'NotAllowedError') return; // AbortError etc: a newer command superseded this one
      // Autoplay with sound is blocked until the user interacts. Muted autoplay is
      // almost always allowed, so stay in sync silently and offer an unmute button.
      if (!v.muted) {
        try {
          v.muted = true;
          await v.play();
          this.mutedAutoplay = true;
          this.emit('muted', true);
          this.setBlocked(false);
          return;
        } catch {
          v.muted = false;
        }
      }
      this.setBlocked(true);
    } finally {
      this.updateStatus();
    }
  }

  /** Snap to the party position now. Call from a user gesture to also clear an autoplay block. */
  resync() {
    this.setBlocked(false);
    this.quietUntil = performance.now() + QUIET_AFTER_COMMAND_MS;
    this.reconcile();
  }

  /** Signed distance from the party position in ms (negative = behind). */
  driftMs() {
    if (!this.active || !this.auth || !this.hasMedia()) return 0;
    return this.video.currentTime * 1000 - this.expectedMs();
  }

  setBlocked(blocked) {
    if (this.blocked === blocked) return;
    this.blocked = blocked;
    this.emit('blocked', blocked);
  }

  isEcho() {
    const v = this.video;
    if (!this.auth) return true;
    const stateMatches = (this.auth.state === 'playing') === !v.paused;
    const drift = Math.abs(v.currentTime * 1000 - this.expectedMs());
    return stateMatches && drift < TOLERANCE_MS;
  }

  onLocalEvent() {
    if (!this.active || !this.hasMedia()) return;
    if (performance.now() < this.quietUntil || this.blocked) return;
    if (this.isEcho()) return;
    clearTimeout(this.pushTimer);
    // Debounce so a scrub (many seeked events) or play+seeked collapses into one update.
    this.pushTimer = setTimeout(() => this.pushLocal(), PUSH_DEBOUNCE_MS);
  }

  pushLocal() {
    if (!this.active) return;
    const v = this.video;
    const update = {
      state: v.paused ? 'paused' : 'playing',
      lastKnownTime: Math.round(v.currentTime * 1000),
      lastKnownTimeUpdatedAt: Math.round(this.socket.serverNow()),
      bufferingState: false,
    };
    this.auth = { ...update };
    this.updateStatus();
    this.emit('local', update);
    this.socket.request('updateSession', update, { timeout: 5000 }).catch((err) => this.emit('error', err));
  }

  setBuffering(on) {
    if (this.selfBuffering === on) return;
    // Only "waiting" while we're supposed to be playing counts as buffering.
    if (on && (!this.active || this.auth?.state !== 'playing')) return;
    this.selfBuffering = on;
    if (this.active) this.socket.fire('setBufferingPresence', { buffering: on });
    this.updateStatus();
  }

  // ---------------------------------------------------------------- status
  updateStatus() {
    let status;
    const v = this.video;
    if (!this.active) status = 'idle';
    else if (v.error) status = 'error';
    else if (!this.hasMedia()) status = 'loading';
    else if (this.blocked) status = 'blocked';
    else if (this.selfBuffering) status = 'buffering';
    else if (performance.now() - this.lastCorrectionAt < 1500) status = 'syncing';
    else status = this.auth?.state === 'playing' ? 'playing' : 'paused';
    if (status !== this.status) {
      this.status = status;
      this.emit('status', status);
    }
    // "syncing" is transient; settle it once the window passes.
    if (status === 'syncing') setTimeout(() => this.updateStatus(), 1600);
  }

}

function pick(d = {}) {
  return {
    state: d.state === 'playing' ? 'playing' : 'paused',
    lastKnownTime: Number(d.lastKnownTime) || 0,
    lastKnownTimeUpdatedAt: Number(d.lastKnownTimeUpdatedAt) || Date.now(),
  };
}

  (globalThis.PartySync ||= {}).SyncController = SyncController;
})();
