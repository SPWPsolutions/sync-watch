// Generic mode, document_start. Registered at runtime (background.js) only on sites the user enabled.
// On the top page, takes the ?psSession= invite parameter and hands it to the background worker. The
// video often plays in an embedded frame from another origin, which can't read this page's storage,
// so the background passes the invite to whichever frame of this tab finds the player.
(function () {
  if (window !== window.top) return;
  const url = new URL(location.href);
  const id = url.searchParams.get('psSession');
  if (id === null) return;
  url.searchParams.delete('psSession');
  history.replaceState(history.state, '', url.pathname + url.search + url.hash);
  if (!/^[a-f0-9]{6,64}$/i.test(id)) return;
  chrome.runtime.sendMessage({ type: 'generic-invite', sessionId: id.toLowerCase() }).catch(() => {});
})();
