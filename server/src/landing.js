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
  disney: {
    name: 'Disney+',
    domain: 'www.disneyplus.com',
    videoId: /^[A-Za-z0-9_-]{1,64}$/,
    watchUrl: (id, sid) => `https://www.disneyplus.com/play/${id}?psSession=${sid}`,
  },
  hulu: {
    name: 'Hulu',
    domain: 'www.hulu.com',
    videoId: /^[A-Za-z0-9_-]{1,64}$/,
    watchUrl: (id, sid) => `https://www.hulu.com/watch/${id}?psSession=${sid}`,
  },
  max: {
    name: 'Max',
    domain: 'play.max.com',
    videoId: /^[A-Za-z0-9_-]{1,64}$/,
    watchUrl: (id, sid) => `https://play.max.com/video/watch/${id}?psSession=${sid}`,
  },
  amazon: {
    name: 'Prime Video',
    domain: 'www.amazon.com',
    videoId: /^[A-Za-z0-9_-]{1,32}$/,
    watchUrl: (id, sid) => `https://www.amazon.com/gp/video/detail/${id}?psSession=${sid}`,
  },
  paramount: {
    name: 'Paramount+',
    domain: 'www.paramountplus.com',
    videoId: /^[A-Za-z0-9_-]{1,64}$/,
    watchUrl: (id, sid) => `https://www.paramountplus.com/watch/${id}?psSession=${sid}`,
  },
  youtube: {
    name: 'YouTube',
    domain: 'www.youtube.com',
    domainOnly: true,
    videoId: /^[\w-]{11}$/,
    watchUrl: (id, sid) => `https://www.youtube.com/watch?v=${id}&psSession=${sid}`,
  },
};

function extensionHandoff(room) {
  if (!room || !/^[a-f0-9]{6,64}$/.test(room.sessionId)) return null;
  const key = Object.keys(SERVICES).find(
    (k) => room.serviceDomain === SERVICES[k].domain || (!SERVICES[k].domainOnly && String(room.videoService || '').toLowerCase() === k)
  );
  if (!key) return null;
  const svc = SERVICES[key];
  const videoId = String(room.videoId ?? '');
  if (!svc.videoId.test(videoId)) return null;
  return { service: key, name: svc.name, videoId, watchUrl: svc.watchUrl(videoId, room.sessionId) };
}

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function renderLanding(room, handoff, { installUrl, publicUrl = 'https://watch.pwlive.fyi' } = {}) {
  const host = room.userList().find((u) => u.isHost)?.userSettings?.userNickname;
  const count = room.members.size;
  const name = esc(handoff.name);
  const baseUrl = esc(String(publicUrl).replace(/\/$/, ''));
  const pageTitle = `Join ${host ? `${esc(host)}'s ` : ''}the ${name} party — Wooper's Party`;
  const pageDesc = `You're invited to watch on ${name} with Wooper's Party (${count} watching). Synchronized playback, group chat, and emoji reactions.`;
  const installHref = installUrl ? esc(installUrl) : '#install';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#ef3e3a">
<title>${pageTitle}</title>
<meta name="description" content="${pageDesc}">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="128x128" href="/icon128.png">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="${baseUrl}/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Wooper's Party">
<meta property="og:title" content="${pageTitle}">
<meta property="og:description" content="${pageDesc}">
<meta property="og:url" content="${baseUrl}/join/${esc(room.sessionId)}">
<meta property="og:image" content="${baseUrl}/og-image.png">
<meta property="og:image:secure_url" content="${baseUrl}/og-image.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${pageTitle}">
<meta name="twitter:description" content="${pageDesc}">
<meta name="twitter:image" content="${baseUrl}/og-image.png">
<style>
:root{color-scheme:dark;--bg:#0f0f10;--card:#18181c;--text:#fafafa;--dim:#a1a1ad;--line:#2d2d35;--accent:#ef3e3a;--accent2:#9e55a0}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px 16px;background:radial-gradient(1200px 600px at 50% -10%,rgba(239,62,58,.24),transparent),var(--bg);color:var(--text);font:15px/1.55 Poppins,Inter,system-ui,-apple-system,Segoe UI,sans-serif}
main{width:100%;max-width:460px;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:28px;position:relative}
.wooper{display:inline-block;width:44px;height:44px;background:url("/wooper.svg") 0 0 / 300% 100% no-repeat;image-rendering:pixelated;animation:wooper-idle 2.24s step-end infinite;vertical-align:middle}
@keyframes wooper-idle{0%{background-position-x:0%}35.71%{background-position-x:50%}50%{background-position-x:0%}85.71%{background-position-x:100%}92.86%{background-position-x:0%}}
.eyebrow{margin:0 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);font-weight:700;display:flex;align-items:center;gap:8px}
h1{margin:0 0 8px;font-size:24px;line-height:1.25}
p{margin:0 0 14px;color:var(--dim)}
.who{display:flex;align-items:center;gap:8px;margin:0 0 18px;font-size:13px;color:var(--dim)}
.who i{width:8px;height:8px;border-radius:50%;background:#34d399;box-shadow:0 0 0 4px rgba(52,211,153,.15)}
.btn{display:block;width:100%;text-align:center;text-decoration:none;font-weight:600;padding:13px 16px;border-radius:12px;border:1px solid var(--line);color:var(--text);background:#22222c;margin-top:10px}
.btn--primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:var(--accent)}
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
<p class="eyebrow"><span>WP · Wooper's Party · ${name}</span><span class="wooper" title="Wooper"></span></p>
<h1>You're invited to watch on ${name}</h1>
<p>Everyone watches on their own ${name} account. The free Wooper's Party browser extension keeps play, pause and seeking in sync.</p>
<p class="who"><i></i>${count} watching${host ? ` · hosted by ${esc(host)}` : ''}</p>
<a class="btn btn--primary" id="open" href="${esc(handoff.watchUrl)}">Open on ${name}</a>
<a class="btn" href="${installHref}">I don't have Wooper's Party yet</a>
<p class="status" id="status" aria-live="polite">Wooper's Party not detected in this browser. Install it first, then press Open on ${name}.</p>
<section id="install">
<h2>Install Wooper's Party (Chrome, Edge, Brave)</h2>
<ol>
<li><a href="/download/woopers-party.zip" download>Download Wooper's Party</a> and unzip it.</li>
<li>Open <code>chrome://extensions</code> and turn on <b>Developer mode</b>.</li>
<li>Click <b>Load unpacked</b> and choose the unzipped <code>woopers-party-…</code> folder.</li>
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
  s.textContent = "Wooper's Party detected. Opening ${name}…";
  setTimeout(function () { location.replace(document.getElementById('open').href); }, 1200);
})();
</script>
</body>
</html>`;
}

module.exports = { extensionHandoff, renderLanding };
