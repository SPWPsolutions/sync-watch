// Safari build only. Replaces the manifest's `"world": "MAIN"` content scripts, which Safari may not
// honour, by adding the script to the page as a web-accessible <script src>. The page script and the
// content script still talk over window.postMessage, exactly as in the Chrome build.
// __FILE__ is replaced per site by build.py.
(function () {
  const src = chrome.runtime.getURL('__FILE__');
  const inject = (root) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = () => s.remove();
    root.appendChild(s);
  };
  const root = document.head || document.documentElement;
  if (root) return inject(root);
  new MutationObserver((_, obs) => {
    if (!document.documentElement) return;
    obs.disconnect();
    inject(document.documentElement);
  }).observe(document, { childList: true });
})();
