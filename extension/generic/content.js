// Generic adapter: syncs the main HTML5 <video> on any site the user enabled from the popup.
// Runs in every frame of those sites, including embedded player frames; only the frame that holds
// the player answers the popup (see runParty). No player-specific API, so seeking writes currentTime.
(() => {
  const isTop = window === window.top;
  // Shorter clips are treated as ads or previews, so an ad in the same frame doesn't take over sync.
  const MIN_DURATION_S = 90;
  const MIN_WIDTH = 200;
  const MIN_HEIGHT = 110;
  const INVITE_POLL_MS = 1000;
  const INVITE_GIVE_UP_MS = 10 * 60 * 1000;

  const pageUrl = () => {
    const u = new URL(location.href);
    u.searchParams.delete('psSession');
    u.hash = '';
    return u.href;
  };

  function candidates(root, out) {
    for (const v of root.querySelectorAll('video')) out.push(v);
    // Some players render inside open shadow roots.
    if (!out.length) {
      for (const el of root.querySelectorAll('*')) if (el.shadowRoot) candidates(el.shadowRoot, out);
    }
    return out;
  }

  function usable(v) {
    const r = v.getBoundingClientRect();
    if (r.width < MIN_WIDTH || r.height < MIN_HEIGHT) return false;
    const d = v.duration;
    if (d === Infinity) return false; // live stream: nothing to sync
    return Number.isNaN(d) || d >= MIN_DURATION_S; // NaN: metadata not loaded yet
  }

  function findVideo() {
    let best = null;
    let bestArea = 0;
    for (const v of candidates(document, [])) {
      if (!usable(v)) continue;
      const r = v.getBoundingClientRect();
      const area = r.width * r.height;
      if (area > bestArea) [best, bestArea] = [v, area];
    }
    return best;
  }

  const party = PartySync.runParty({
    service: 'generic',
    // Embedded frames don't know the page URL; the popup or the background worker supplies it.
    getVideoId: () => (isTop ? pageUrl() : null),
    getServiceDomain: (videoId) => {
      try {
        return new URL(videoId).hostname;
      } catch {
        return null;
      }
    },
    createMedia: () => new PartySync.MediaAdapter({ findVideo }),
    onSession: (ctx) => PartySync.createChat(ctx),
  });

  // Invite links: wait until this frame has the player, then claim the tab's pending invite. The
  // background hands it to the first frame that claims it, so only one frame joins.
  let started = Date.now();
  let timer = null;
  async function tryClaim() {
    if (party.inParty() || Date.now() - started > INVITE_GIVE_UP_MS) return stop();
    if (!findVideo()) return;
    stop();
    const res = await chrome.runtime.sendMessage({ type: 'generic-claim' }).catch(() => null);
    if (!res?.sessionId) return;
    const id = await PartySync.storedIdentity();
    party.join({ ...id, sessionId: res.sessionId, videoId: res.pageUrl }).catch((e) => console.warn('[party] invite join failed', e));
  }
  function stop() {
    clearInterval(timer);
    timer = null;
  }
  function watchForInvite() {
    if (timer) return;
    started = Date.now();
    timer = setInterval(tryClaim, INVITE_POLL_MS);
    tryClaim();
  }

  chrome.runtime.onMessage.addListener((msg) => {
    if (msg?.target === 'generic' && msg.type === 'invite') watchForInvite();
  });
  chrome.runtime
    .sendMessage({ type: 'generic-hello' })
    .then((res) => res?.pending && watchForInvite())
    .catch(() => {});
})();
