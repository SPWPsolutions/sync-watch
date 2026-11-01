// Minimal modal controller. Works on any .modal-backdrop element.
// Adds/removes .is-open, traps Escape, closes on backdrop click, restores focus.
window.Modal = (() => {
  let lastFocus = null;
  function open(el) {
    lastFocus = document.activeElement;
    el.classList.add('is-open');
    el.setAttribute('aria-hidden', 'false');
    const focusable = el.querySelector('input, button, [tabindex]');
    if (focusable) setTimeout(() => focusable.focus(), 60);
  }
  function close(el) {
    el.classList.remove('is-open');
    el.setAttribute('aria-hidden', 'true');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function bind(el) {
    el.addEventListener('click', (e) => { if (e.target === el) close(el); });
    el.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', () => close(el)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && el.classList.contains('is-open')) close(el);
    });
  }
  return { open, close, bind };
})();
