// Registered at document_start, before any page script, so these window capture listeners run ahead of
// the player's keyboard shortcuts. Typing and Enter-to-submit are default actions and still happen.
(function () {
  for (const t of ['keydown', 'keypress', 'keyup']) {
    window.addEventListener(
      t,
      (e) => {
        if (e.target instanceof Element && e.target.closest('[data-party-sync-ui]')) e.stopImmediatePropagation();
      },
      true
    );
  }
})();
