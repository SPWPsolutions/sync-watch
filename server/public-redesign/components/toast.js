// Toast notifications. window.Toast.show(message, type) — type: success|error|info
window.Toast = (() => {
  let root;
  const ensure = () => {
    if (!root) {
      root = document.createElement('div');
      root.className = 'toasts';
      root.setAttribute('role', 'status');
      root.setAttribute('aria-live', 'polite');
      document.body.appendChild(root);
    }
    return root;
  };
  const glyph = {
    success: (window.Icons && Icons.check) || '✓',
    error: (window.Icons && Icons.x) || '!',
    info: 'i',
  };
  function show(message, type = 'info', ms = 3200) {
    const el = document.createElement('div');
    el.className = `toast toast--${type}`;
    el.innerHTML = `<span class="toast__icon">${glyph[type] || glyph.info}</span><span>${String(message)}</span>`;
    ensure().appendChild(el);
    const kill = () => {
      el.classList.add('is-leaving');
      el.addEventListener('animationend', () => el.remove(), { once: true });
    };
    const t = setTimeout(kill, ms);
    el.addEventListener('click', () => { clearTimeout(t); kill(); });
    return el;
  }
  return { show, success: (m) => show(m, 'success'), error: (m) => show(m, 'error'), info: (m) => show(m, 'info') };
})();
