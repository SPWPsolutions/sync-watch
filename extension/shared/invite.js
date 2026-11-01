(function () {
  const PARAM = 'psSession';
  const url = new URL(location.href);
  const id = url.searchParams.get(PARAM);
  if (id === null) return;
  url.searchParams.delete(PARAM);
  history.replaceState(history.state, '', url.pathname + url.search + url.hash);
  if (!/^[a-f0-9]{6,64}$/i.test(id)) return;
  try {
    sessionStorage.setItem('partySync.invite', JSON.stringify({ sessionId: id.toLowerCase(), at: Date.now() }));
  } catch {}
})();
