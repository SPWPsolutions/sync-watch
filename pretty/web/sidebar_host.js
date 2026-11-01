!(function () {
  const n = new URLSearchParams(window.location.search).get("src"),
    c = document.getElementById("tp-sidebar-inner");
  n && c && (c.src = n);
})();
