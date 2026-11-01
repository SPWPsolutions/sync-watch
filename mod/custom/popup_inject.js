// Runs in the popup page (same origin, CSP script-src 'self' allows it).
// Waits for React to mount into #popup-app, then appends custom UI.
(function () {
  const root = document.getElementById("popup-app");
  if (!root) return;
  const mount = () => {
    if (document.getElementById("custom-footer")) return;
    const el = document.createElement("div");
    el.id = "custom-footer";
    el.style.cssText = "padding:8px 16px;font-size:12px;color:var(--white-25);text-align:center";
    el.textContent = "custom build";
    root.appendChild(el);
  };
  new MutationObserver(() => root.firstElementChild && mount()).observe(root, { childList: true });
})();
