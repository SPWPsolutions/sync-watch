'use strict';

const SERVICES = {
  netflix: {
    name: 'Netflix',
    domain: 'www.netflix.com',
    videoId: /^\d{1,12}$/,
    watchUrl: (id, sid) => `https://www.netflix.com/watch/${id}?psSession=${sid}`,
  },
  crunchyroll: {
    name: 'Crunchyroll',
    domain: 'www.crunchyroll.com',
    videoId: /^[A-Z0-9]{1,16}$/i,
    watchUrl: (id, sid) => `https://www.crunchyroll.com/watch/${id}?psSession=${sid}`,
  },
};

function extensionHandoff(room) {
  if (!room || !/^[a-f0-9]{6,64}$/.test(room.sessionId)) return null;
  const key = Object.keys(SERVICES).find(
    (k) => room.serviceDomain === SERVICES[k].domain || String(room.videoService || '').toLowerCase() === k
  );
  if (!key) return null;
  const svc = SERVICES[key];
  const videoId = String(room.videoId ?? '');
  if (!svc.videoId.test(videoId)) return null;
  return { service: key, name: svc.name, videoId, watchUrl: svc.watchUrl(videoId, room.sessionId) };
}

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function renderLanding(room, handoff, { installUrl } = {}) {
  const host = room.userList().find((u) => u.isHost)?.userSettings?.userNickname;
  const count = room.members.size;
  const name = esc(handoff.name);
  const installHref = installUrl ? esc(installUrl) : '#install';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Join the ${name} party — Party Sync</title>
<style>
:root{color-scheme:dark;--bg:#0b0b10;--card:#15151d;--text:#f4f4f7;--dim:#a1a1ad;--line:#2a2a36;--accent:#e50914;--accent2:#6366f1}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px 16px;background:radial-gradient(1200px 600px at 50% -10%,#1d1b3a,transparent),var(--bg);color:var(--text);font:15px/1.55 Inter,system-ui,-apple-system,Segoe UI,sans-serif}
main{width:100%;max-width:460px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:28px}
.eyebrow{margin:0 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--dim)}
h1{margin:0 0 8px;font-size:24px;line-height:1.25}
p{margin:0 0 14px;color:var(--dim)}
.who{display:flex;align-items:center;gap:8px;margin:0 0 18px;font-size:13px;color:var(--dim)}
.who i{width:8px;height:8px;border-radius:50%;background:#34d399;box-shadow:0 0 0 4px rgba(52,211,153,.15)}
.btn{display:block;width:100%;text-align:center;text-decoration:none;font-weight:600;padding:13px 16px;border-radius:12px;border:1px solid var(--line);color:var(--text);background:#22222c;margin-top:10px}
.btn--primary{background:var(--accent);border-color:var(--accent)}
.status{min-height:20px;margin:14px 0 0;font-size:13px;color:var(--dim)}
.status[data-on]{color:#34d399}
ol{margin:0;padding-left:20px;color:var(--dim)}
li{margin:6px 0}
li a{color:var(--text);font-weight:600}
section{margin-top:22px;padding-top:18px;border-top:1px solid var(--line)}
h2{margin:0 0 10px;font-size:15px}
code{background:#22222c;padding:1px 6px;border-radius:6px;color:var(--text)}
</style>
</head>
<body>
<main>
<p class="eyebrow">Party Sync · ${name}</p>
<h1>You're invited to watch on ${name}</h1>
<p>Everyone watches on their own ${name} account. The free Party Sync browser extension keeps play, pause and seeking in sync.</p>
<p class="who"><i></i>${count} watching${host ? ` · hosted by ${esc(host)}` : ''}</p>
<a class="btn btn--primary" id="open" href="${esc(handoff.watchUrl)}">Open on ${name}</a>
<a class="btn" href="${installHref}">I don't have Party Sync yet</a>
<p class="status" id="status" aria-live="polite">Party Sync not detected in this browser. Install it first, then press Open on ${name}.</p>
<section id="install">
<h2>Install Party Sync (Chrome, Edge, Brave)</h2>
<ol>
<li><a href="/download/party-sync.zip" download>Download Party Sync</a> and unzip it.</li>
<li>Open <code>chrome://extensions</code> and turn on <b>Developer mode</b>.</li>
<li>Click <b>Load unpacked</b> and choose the unzipped <code>party-sync-…</code> folder.</li>
<li>Turn off other watch-party extensions such as Teleparty. Both run on ${name}.</li>
<li>Come back to this page and press <b>Open on ${name}</b>. You join the party automatically.</li>
</ol>
</section>
</main>
<script>
(function () {
  var v = document.documentElement.getAttribute('data-party-sync');
  if (!v) return;
  var s = document.getElementById('status');
  s.setAttribute('data-on', '');
  s.textContent = 'Party Sync detected. Opening ${name}…';
  setTimeout(function () { location.replace(document.getElementById('open').href); }, 1200);
})();
</script>
</body>
</html>`;
}

module.exports = { extensionHandoff, renderLanding };
