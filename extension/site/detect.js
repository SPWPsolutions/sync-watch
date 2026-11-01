(function () {
  const mark = () => document.documentElement.setAttribute('data-party-sync', chrome.runtime.getManifest().version);
  if (document.documentElement) return mark();
  new MutationObserver((_, obs) => {
    if (!document.documentElement) return;
    obs.disconnect();
    mark();
  }).observe(document, { childList: true });
})();
