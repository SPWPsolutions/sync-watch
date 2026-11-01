// Lightweight QR renderer for mobile joining.
//
// Uses the goqr.me image endpoint (no build step, no bundled library). The
// invite URL is a short, non-secret join link, so rendering it via an image
// service is acceptable for a demo. Swap QR.ENDPOINT to self-host (e.g. a
// local `qrcode` route) if you don't want any third-party request.
window.QR = (() => {
  const ENDPOINT = (data, size) =>
    `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=0&data=${encodeURIComponent(data)}`;

  // Render into a container element. Falls back to a plain link on error.
  function render(container, data, size = 180) {
    container.innerHTML = '';
    const img = new Image(size, size);
    img.alt = 'QR code — scan to join the party';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.src = ENDPOINT(data, size);
    img.onerror = () => {
      container.innerHTML = `<p class="muted">QR unavailable — open this link on your phone:<br><a href="${data}">${data}</a></p>`;
    };
    container.appendChild(img);
    const cap = document.createElement('p');
    cap.textContent = 'Scan to join on mobile';
    container.appendChild(cap);
  }
  return { render, ENDPOINT };
})();
