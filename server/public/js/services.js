const EXTENSION_SERVICES = {
  netflix: {
    name: 'Netflix',
    hosts: /(^|\.)netflix\.com$/,
    videoId: /^\d{1,12}$/,
    id(u) {
      const m = u.pathname.match(/^\/(?:[a-z]{2}(?:-[a-z]{2})?\/)?(?:title|watch)\/(\d{1,12})(?:\/|$)/i);
      const jbv = u.searchParams.get('jbv');
      return m ? m[1] : /^\d{1,12}$/.test(jbv || '') ? jbv : null;
    },
    watchUrl: (id, sessionId) => `https://www.netflix.com/watch/${id}${sessionId ? `?psSession=${sessionId}` : ''}`,
    homeUrl: 'https://www.netflix.com/',
  },
  crunchyroll: {
    name: 'Crunchyroll',
    hosts: /(^|\.)crunchyroll\.com$/,
    videoId: /^[A-Z0-9]{1,16}$/i,
    id(u) {
      const m = u.pathname.match(/^\/(?:[a-z]{2}(?:-[a-z]{2})?\/)?watch\/([A-Z0-9]{1,16})(?:\/|$)/i);
      return m ? m[1].toUpperCase() : null;
    },
    watchUrl: (id, sessionId) => `https://www.crunchyroll.com/watch/${id}${sessionId ? `?psSession=${sessionId}` : ''}`,
    homeUrl: 'https://www.crunchyroll.com/',
  },
  // Ids: movie-<n>, tv-<n> (show page) or tv-<n>-s<season>e<episode>. Titles live on detail pages
  // that autoplay with play=1 and open a given episode with season/episode (the site's own deep link).
  movieboxpro: {
    name: 'MovieBox Pro',
    hosts: /(^|\.)movieboxpro\.app$/,
    videoId: /^(?:movie-\d{1,12}|tv-\d{1,12}(?:-s\d{1,4}e\d{1,4})?)$/,
    id(u) {
      const m = u.pathname.match(/^\/(movie|tvshow)\/(\d{1,12})(?:\/|$)/);
      if (!m) return null;
      if (m[1] === 'movie') return `movie-${m[2]}`;
      const season = Number(u.searchParams.get('season'));
      const episode = Number(u.searchParams.get('episode'));
      return season > 0 && episode > 0 ? `tv-${m[2]}-s${season}e${episode}` : `tv-${m[2]}`;
    },
    watchUrl(id, sessionId) {
      const m = /^(movie|tv)-(\d+)(?:-s(\d+)e(\d+))?$/.exec(id);
      const ps = sessionId ? `&psSession=${sessionId}` : '';
      if (m[1] === 'movie') return `https://www.movieboxpro.app/movie/${m[2]}?play=1${ps}`;
      const episode = m[3] ? `season=${m[3]}&episode=${m[4]}&` : '';
      return `https://www.movieboxpro.app/tvshow/${m[2]}?${episode}play=1${ps}`;
    },
    homeUrl: 'https://www.movieboxpro.app/',
  },
};

const UNSUPPORTED = [
  [/(^|\.)disneyplus\.com$/, 'Disney+'],
  [/(^|\.)(primevideo\.com|amazon\.[a-z.]+)$/, 'Prime Video'],
  [/(^|\.)hulu\.com$/, 'Hulu'],
  [/(^|\.)(max\.com|hbomax\.com)$/, 'Max'],
  [/(^|\.)paramountplus\.com$/, 'Paramount+'],
  [/(^|\.)peacocktv\.com$/, 'Peacock'],
  [/(^|\.)tv\.apple\.com$/, 'Apple TV+'],
  [/(^|\.)hotstar\.com$/, 'Hotstar'],
  [/(^|\.)(jiocinema\.com|jiohotstar\.com)$/, 'JioCinema'],
  [/(^|\.)sonyliv\.com$/, 'SonyLIV'],
  [/(^|\.)zee5\.com$/, 'ZEE5'],
  [/(^|\.)mubi\.com$/, 'MUBI'],
  [/(^|\.)(twitch\.tv|kick\.com)$/, 'Twitch'],
  [/(^|\.)vimeo\.com$/, 'Vimeo'],
  [/(^|\.)dailymotion\.com$/, 'Dailymotion'],
  [/(^|\.)(tiktok\.com|instagram\.com|facebook\.com|x\.com|twitter\.com)$/, 'social media'],
  [/(^|\.)(drive\.google\.com|dropbox\.com|onedrive\.live\.com)$/, 'file-sharing'],
];

const MEDIA_EXT = /\.(mp4|m4v|webm|ogv|ogg|mov|mkv|mp3|m4a|aac|wav|flac)$/i;
const PAGE_EXT = /\.(html?|php|aspx?|jsp)$/i;

export function serviceInfo(key) {
  return EXTENSION_SERVICES[key] ? { key, ...EXTENSION_SERVICES[key] } : null;
}

export function extensionServiceFor(videoId, videoService, serviceDomain) {
  for (const [key, svc] of Object.entries(EXTENSION_SERVICES)) {
    if (videoService === key || svc.hosts.test(serviceDomain || '')) {
      const id = String(videoId ?? '');
      return { key, ...svc, videoId: svc.videoId.test(id) ? id : null };
    }
  }
  return null;
}

export function classifyUrl(input) {
  let u;
  try { u = new URL(input); } catch { return { kind: 'invalid' }; }
  const host = u.hostname.toLowerCase();
  for (const [key, svc] of Object.entries(EXTENSION_SERVICES)) {
    if (svc.hosts.test(host)) return { kind: 'extension', key, ...svc, videoId: svc.id(u) };
  }
  const blocked = UNSUPPORTED.find(([re]) => re.test(host));
  if (blocked) return { kind: 'unsupported', name: blocked[1] };
  if (MEDIA_EXT.test(u.pathname)) return { kind: 'media' };
  if (u.pathname === '/' || u.pathname === '' || PAGE_EXT.test(u.pathname)) return { kind: 'page' };
  return { kind: 'unknown' };
}

export function probeMedia(url, timeoutMs = 8000) {
  return new Promise((resolve) => {
    const v = document.createElement('video');
    let settled = false;
    const done = (r) => {
      if (settled) return;
      settled = true;
      clearTimeout(t);
      v.removeAttribute('src');
      v.load();
      resolve(r);
    };
    const t = setTimeout(() => done('timeout'), timeoutMs);
    v.preload = 'metadata';
    v.muted = true;
    v.addEventListener('loadedmetadata', () => done('ok'), { once: true });
    v.addEventListener('error', () => done('bad'), { once: true });
    v.src = url;
  });
}
