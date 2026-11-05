// MovieBox Pro MAIN-world player bridge for Party Sync (manifest "world": "MAIN").
// The page mounts JW Player as jwplayer('player_box') or Video.js as videojs('my-video'). Commands go
// through whichever is live so its UI state follows; with neither, the <video> element is driven directly.
//
// The playing episode is not in the URL: the in-player episode panel swaps the stream in place, and the
// detail page's own list mounts a new player. Both fetch the player markup from /index/index/player
// (POST, via XMLHttpRequest), and that response declares the title and episode it plays plus the
// viewer's personal resume position. The XHR hook below reads those and, while a party is active,
// zeroes the resume position so the site's resume seek does not drag the whole party to one member's
// last position.
// Protocol: content -> page { source, dir: 'to-page', requestId, cmd, args }
//           page -> content { source, dir: 'to-content', requestId, ok, value?, error? }
//           page -> content { source, dir: 'state', state }   (pushed periodically and on changes)
(() => {
  const SOURCE = 'party-sync-movieboxpro';
  const STATE_INTERVAL_MS = 500;
  const RESOURCE_PATH = /\/index\/index\/player(?:\?|$)/;
  // sessionStorage keys written by shared/party.js, shared/invite.js and movieboxpro/content.js.
  const PARTY_KEYS = ['partySync.session', 'partySync.invite', 'partySync.mbp.follow'];

  function attempt(fn) {
    try {
      return fn();
    } catch {
      return undefined;
    }
  }

  let partyMode = false;
  // Player resource currently mounted: { tid, season, episode, resumeAt, patched, seq }.
  let resource = null;
  let resourceSeq = 0;

  function partyActive() {
    return partyMode || PARTY_KEYS.some((k) => attempt(() => sessionStorage.getItem(k)) != null);
  }

  const num = (text, name) => {
    const m = text.match(new RegExp(`var\\s+${name}\\s*=\\s*'?(\\d+(?:\\.\\d+)?)'?\\s*;`));
    return m ? Number(m[1]) : null;
  };

  // Reads the title/episode/resume variables from a player resource response. Returns the (possibly
  // patched) text so the caller can hand it to the page.
  function captureResource(requestUrl, text) {
    const tid = num(text, 'tid');
    const season = num(text, 'current_season');
    const episode = num(text, 'current_episode');
    const resumeAt = num(text, 'seconds') || 0;
    // A `seconds=` request parameter is the page restoring its own position (quality switch); keep it.
    const explicitResume = /[?&]seconds=/.test(requestUrl || '');
    let patched = false;
    if (resumeAt > 0 && !explicitResume && partyActive()) {
      const out = text.replace(/var\s+seconds\s*=\s*'?\d+(?:\.\d+)?'?\s*;/, 'var seconds = 0;');
      patched = out !== text;
      text = out;
    }
    resource = { tid, season, episode, resumeAt, patched, seq: ++resourceSeq };
    publish();
    return text;
  }

  const XHR = XMLHttpRequest.prototype;
  const origOpen = XHR.open;
  const origSend = XHR.send;
  XHR.open = function (method, url, ...rest) {
    this.__partySyncUrl = String(url);
    return origOpen.call(this, method, url, ...rest);
  };
  XHR.send = function (...args) {
    const url = this.__partySyncUrl || '';
    if (RESOURCE_PATH.test(url)) {
      // Registered before the page assigns onreadystatechange, so this runs first and the page reads
      // the patched text.
      this.addEventListener('readystatechange', () => {
        if (this.readyState !== 4 || this.status !== 200) return;
        if (this.responseType && this.responseType !== 'text') return;
        const text = attempt(() => this.responseText);
        if (typeof text !== 'string' || !/var\s+seconds\s*=/.test(text)) return;
        const patched = captureResource(url, text);
        if (patched !== text) Object.defineProperty(this, 'responseText', { value: patched, configurable: true });
      });
    }
    return origSend.apply(this, args);
  };

  // jwplayer(id) returns a bare stub before setup(); a set-up instance answers getState().
  function jw() {
    if (typeof window.jwplayer !== 'function' || !document.getElementById('player_box')) return null;
    const p = attempt(() => window.jwplayer('player_box'));
    return p && typeof p.getState === 'function' && attempt(() => p.getState()) ? p : null;
  }

  // Look up only; calling videojs('my-video') would create a player on the placeholder element.
  function vjs() {
    const v = window.videojs;
    if (!v) return null;
    const p = attempt(() => v.getPlayer?.('my-video')) || v.players?.['my-video'];
    return p && !attempt(() => p.isDisposed?.()) ? p : null;
  }

  function videoEl() {
    return (
      document.querySelector('#player_box video, #my-video video, video#my-video_html5_api') ||
      [...document.querySelectorAll('video')].find((v) => v.id !== 'video_player' && !v.closest('.video_player_popup') && (v.currentSrc || v.src)) ||
      null
    );
  }

  function requireVideo() {
    const v = videoEl();
    if (!v) throw new Error('MovieBox Pro player not found');
    return v;
  }

  function kind() {
    return jw() ? 'jwplayer' : vjs() ? 'videojs' : videoEl() ? 'html5' : null;
  }

  function readState() {
    return { kind: kind(), resource, partyMode };
  }

  function publish() {
    window.postMessage({ source: SOURCE, dir: 'state', state: readState() }, location.origin);
  }

  const commands = {
    play() {
      const j = jw();
      if (j) return void j.play(true);
      const p = vjs();
      if (p) return void p.play()?.catch?.(() => {});
      requireVideo().play().catch(() => {});
    },
    pause() {
      const j = jw();
      if (j) return void j.pause(true);
      const p = vjs();
      if (p) return void p.pause();
      requireVideo().pause();
    },
    seek({ ms }) {
      if (!Number.isFinite(ms) || ms < 0) throw new Error('invalid seek target');
      const sec = ms / 1000;
      const j = jw();
      if (j) return void j.seek(sec);
      const p = vjs();
      if (p) return void p.currentTime(sec);
      requireVideo().currentTime = sec;
    },
    kind,
    state: readState,
    partyMode({ active }) {
      partyMode = !!active;
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

  setInterval(publish, STATE_INTERVAL_MS);
})();
