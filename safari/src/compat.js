// Safari compatibility shim, loaded before the extension's own scripts in the Safari build only.
// Safari exposes the WebExtension API as `browser` and mirrors most of it on `chrome`; fill gaps.
(function () {
  const g = globalThis;
  if (typeof g.chrome === 'undefined' && typeof g.browser !== 'undefined') g.chrome = g.browser;
  const storage = g.chrome && g.chrome.storage;
  // Older Safari builds lack storage.sync; settings then stay on this device instead of syncing.
  if (storage && !storage.sync && storage.local) storage.sync = storage.local;
})();
