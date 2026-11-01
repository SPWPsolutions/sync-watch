/**
 * PartySocket: JSON-over-WebSocket client for the party sync protocol (PROTOCOL_SPEC.md §2–5).
 *
 * - Envelope: { type, data, callbackId }   callbackId === 'null' means fire-and-forget.
 * - The server sends { type: 'userId' } right after open; nothing else is valid before it.
 * - Replies echo our callbackId; everything else is a push dispatched by `type`.
 * - Reconnects with jittered exponential backoff; close code 4500 is a deliberate close.
 * - Keeps an NTP-style server clock offset so playback timestamps share one timebase.
 */

const DELIBERATE_CLOSE = 4500;
const PING_INTERVAL_MS = 15_000;
const CLOCK_INTERVAL_MS = 12_500;
const CLOCK_SAMPLES = 8;
const MAX_BACKOFF_MS = 10_000;

export class RequestError extends Error {
  constructor(message, { type, timeout = false } = {}) {
    super(message);
    this.name = 'RequestError';
    this.type = type;
    this.timeout = timeout;
  }
}

export class PartySocket {
  constructor({ url, debug = false }) {
    this.url = url;
    this.debug = debug;
    this.ws = null;
    this.userId = null;
    this.status = 'idle'; // idle | connecting | open | reconnecting | offline | closed
    this.attempt = 0;
    this.everConnected = false;
    this.handlers = new Map();
    this.pending = new Map();
    this.seq = 0;
    this.timers = {};
    this.samples = [];
    this.clockOffset = 0;
    this.rtt = null;
    this.clockFailures = 0;
    this.readyWaiters = new Set();

    window.addEventListener('online', () => this.reconnectNow());
    window.addEventListener('offline', () => this.status !== 'open' && this.setStatus('offline'));
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') this.reconnectNow();
    });
  }

  // ---------------------------------------------------------------- events
  on(type, fn) {
    if (!this.handlers.has(type)) this.handlers.set(type, new Set());
    this.handlers.get(type).add(fn);
    return () => this.handlers.get(type).delete(fn);
  }

  emit(type, data) {
    for (const fn of this.handlers.get(type) || []) {
      try {
        fn(data);
      } catch (e) {
        console.error(`[socket] handler for "${type}" threw`, e);
      }
    }
  }

  setStatus(status) {
    if (this.status === status) return;
    this.status = status;
    this.emit('status', status);
  }

  // ---------------------------------------------------------------- lifecycle
  connect() {
    clearTimeout(this.timers.reconnect);
    if (this.ws && this.ws.readyState <= WebSocket.OPEN) return;
    this.setStatus(this.everConnected ? 'reconnecting' : 'connecting');

    let ws;
    try {
      ws = new WebSocket(this.url);
    } catch (e) {
      console.error('[socket] failed to construct WebSocket', e);
      this.scheduleReconnect();
      return;
    }
    this.ws = ws;
    this.userId = null;

    ws.onmessage = (e) => {
      if (ws === this.ws) this.handleFrame(e.data);
    };
    ws.onclose = (e) => {
      if (ws !== this.ws) return;
      this.log('close', e.code, e.reason);
      this.teardown();
      if (e.code === DELIBERATE_CLOSE) return this.setStatus('closed');
      this.scheduleReconnect();
    };
    // An error is always followed by close; nothing to do here.
    ws.onerror = () => {};
  }

  /** Close for good (no reconnect). */
  close() {
    clearTimeout(this.timers.reconnect);
    this.ws?.close(DELIBERATE_CLOSE, 'client close');
  }

  /** Drop a socket we believe is half-open and reconnect immediately. */
  forceReconnect() {
    const ws = this.ws;
    if (!ws) return this.connect();
    this.ws = null;
    ws.onclose = null;
    try {
      ws.close();
    } catch {
      /* already closing */
    }
    this.teardown();
    this.attempt = 0;
    this.connect();
  }

  reconnectNow() {
    if (this.status === 'reconnecting' || this.status === 'offline' || this.status === 'connecting') {
      if (!this.ws || this.ws.readyState > WebSocket.OPEN) this.connect();
    }
  }

  scheduleReconnect() {
    if (!navigator.onLine) {
      this.setStatus('offline');
      return; // the 'online' event will reconnect
    }
    const base = Math.min(MAX_BACKOFF_MS, 500 * 2 ** this.attempt);
    const delay = Math.round(base * (0.8 + Math.random() * 0.4));
    this.attempt++;
    this.setStatus('reconnecting');
    this.emit('reconnecting', { attempt: this.attempt, delay });
    this.timers.reconnect = setTimeout(() => this.connect(), delay);
  }

  teardown() {
    clearInterval(this.timers.ping);
    clearInterval(this.timers.clock);
    for (const [, p] of this.pending) {
      clearTimeout(p.timer);
      p.reject(new RequestError('Connection lost', { type: p.type }));
    }
    this.pending.clear();
    this.userId = null;
  }

  // ---------------------------------------------------------------- frames
  handleFrame(raw) {
    let msg;
    try {
      msg = JSON.parse(raw);
    } catch {
      return;
    }
    if (!msg || typeof msg !== 'object') return;
    this.log('←', msg.type, msg.data);

    if (msg.type === 'userId') {
      const reconnected = this.everConnected;
      this.userId = msg.data?.userId;
      this.everConnected = true;
      this.attempt = 0;
      this.clockFailures = 0;
      this.setStatus('open');
      this.startTimers();
      for (const resolve of this.readyWaiters) resolve(this.userId);
      this.readyWaiters.clear();
      this.emit('ready', { userId: this.userId, reconnected });
      return;
    }

    const cb = msg.callbackId;
    if (cb && cb !== 'null' && this.pending.has(cb)) {
      const p = this.pending.get(cb);
      this.pending.delete(cb);
      clearTimeout(p.timer);
      if (msg.data && msg.data.errorMessage) p.reject(new RequestError(msg.data.errorMessage, { type: p.type }));
      else p.resolve(msg.data ?? {});
      return;
    }

    if (msg.type) this.emit(msg.type, msg.data);
  }

  get isOpen() {
    return this.ws?.readyState === WebSocket.OPEN && !!this.userId;
  }

  /** Resolves with our userId once the server has identified this socket. */
  ready(timeout = 20_000) {
    if (this.isOpen) return Promise.resolve(this.userId);
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.readyWaiters.delete(done);
        reject(new RequestError("Can't reach the party server. Check your connection and try again.", { timeout: true }));
      }, timeout);
      const done = (id) => {
        clearTimeout(timer);
        resolve(id);
      };
      this.readyWaiters.add(done);
    });
  }

  /** Send and await the server's callback reply. Rejects on errorMessage, timeout or disconnect. */
  request(type, data = {}, { timeout = 8000 } = {}) {
    if (!this.isOpen) return Promise.reject(new RequestError('Not connected to the party server', { type }));
    const callbackId = (++this.seq).toString(16).padStart(16, '0');
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(callbackId);
        reject(new RequestError('The server took too long to respond', { type, timeout: true }));
      }, timeout);
      this.pending.set(callbackId, { resolve, reject, timer, type });
      this.raw({ type, data, callbackId });
    });
  }

  /** Fire-and-forget. Returns false if not connected. */
  fire(type, data = {}) {
    if (!this.isOpen) return false;
    this.raw({ type, data, callbackId: 'null' });
    return true;
  }

  raw(msg) {
    this.log('→', msg.type, msg.data);
    this.ws.send(JSON.stringify(msg));
  }

  // ---------------------------------------------------------------- clock
  startTimers() {
    clearInterval(this.timers.ping);
    clearInterval(this.timers.clock);
    this.timers.ping = setInterval(() => this.fire('ping'), PING_INTERVAL_MS);
    this.timers.clock = setInterval(() => this.sampleClock(), CLOCK_INTERVAL_MS);
    this.samples = [];
    this.burstClock();
  }

  async burstClock() {
    for (let i = 0; i < 5 && this.isOpen; i++) {
      await this.sampleClock();
    }
  }

  async sampleClock() {
    if (!this.isOpen) return;
    const t0 = performance.now();
    const wall0 = Date.now();
    try {
      const { serverTime } = await this.request('getServerTime', {}, { timeout: 6000 });
      const rtt = performance.now() - t0;
      if (typeof serverTime !== 'number') return;
      this.clockFailures = 0;
      this.samples.push({ rtt, offset: serverTime - (wall0 + rtt / 2) });
      if (this.samples.length > CLOCK_SAMPLES) this.samples.shift();
      // The lowest-RTT sample has the least asymmetric-delay error.
      const best = this.samples.reduce((a, b) => (b.rtt < a.rtt ? b : a));
      this.clockOffset = best.offset;
      this.rtt = this.rtt == null ? rtt : this.rtt * 0.7 + rtt * 0.3;
      this.emit('clock', { offset: this.clockOffset, rtt: this.rtt });
    } catch (e) {
      if (e.timeout && ++this.clockFailures >= 2) {
        // Two missed heartbeats: the socket is probably half-open (sleeping laptop, network switch).
        this.log('heartbeat lost, forcing reconnect');
        this.forceReconnect();
      }
    }
  }

  /** Current time on the server's clock (epoch ms). */
  serverNow() {
    return Date.now() + this.clockOffset;
  }

  log(...args) {
    if (this.debug) console.debug('[socket]', ...args);
  }
}
