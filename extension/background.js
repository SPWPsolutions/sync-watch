// The Safari build (safari/build.py) rewrites this line to load its compatibility shim first.
const COMPAT = [];

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg?.type === 'badge') return void badge(msg, sender);
  const handler = GENERIC_HANDLERS[msg?.type];
  if (!handler) return;
  handler(msg, sender).then(sendResponse, (e) => sendResponse({ error: e?.message || String(e) }));
  return true;
});

function badge(msg, sender) {
  if (!sender.tab?.id) return;
  const tabId = sender.tab.id;
  chrome.action.setBadgeBackgroundColor({ tabId, color: '#ef3e3a' }).catch(() => {});
  chrome.action.setBadgeText({ tabId, text: msg.text }).catch(() => {});
}

chrome.runtime.onInstalled.addListener(async () => {
  const { permId } = await chrome.storage.local.get('permId');
  if (!permId) await chrome.storage.local.set({ permId: crypto.randomUUID().replace(/-/g, '') });
  await syncGenericScripts();
});
chrome.runtime.onStartup.addListener(() => syncGenericScripts());

// ---- Generic mode: any site the user enables from the popup ----
// storage.local.genericSites = { "<page origin>": ["<origin>", ...] }: the page plus the embedded
// player frames found on it, each granted through optional_host_permissions.

const GENERIC_SCRIPT_IDS = ['generic-start', 'generic-main'];
const GENERIC_START_JS = ['shared/keyguard.js', 'generic/start.js'];
const GENERIC_MAIN_JS = ['shared/socket.js', 'shared/sync.js', 'shared/media.js', 'shared/party.js', 'shared/chat.js', 'generic/content.js'];
const INVITE_MAX_AGE_MS = 30 * 60 * 1000;
const pattern = (origin) => `${origin}/*`;

async function genericSites() {
  return (await chrome.storage.local.get('genericSites')).genericSites || {};
}

// Runs one at a time: overlapping unregister/register calls fail with "Duplicate script ID".
let syncQueue = Promise.resolve();
function syncGenericScripts() {
  const run = syncQueue.then(applyGenericScripts);
  syncQueue = run.catch(() => {});
  return run;
}

async function applyGenericScripts() {
  const sites = await genericSites();
  const origins = [...new Set(Object.values(sites).flat())];
  const existing = await chrome.scripting.getRegisteredContentScripts({ ids: GENERIC_SCRIPT_IDS }).catch(() => []);
  if (existing.length) await chrome.scripting.unregisterContentScripts({ ids: existing.map((s) => s.id) });
  if (!origins.length) return;
  const matches = origins.map(pattern);
  await chrome.scripting.registerContentScripts([
    { id: 'generic-start', matches, js: [...COMPAT, ...GENERIC_START_JS], runAt: 'document_start', allFrames: true },
    { id: 'generic-main', matches, js: [...COMPAT, ...GENERIC_MAIN_JS], runAt: 'document_idle', allFrames: true },
  ]);
}

// Pending invites per tab. storage.session survives the worker being suspended; fall back to memory.
const memoryInvites = new Map();
const inviteStore = {
  async get(tabId) {
    if (!chrome.storage.session) return memoryInvites.get(tabId) || null;
    return (await chrome.storage.session.get(`invite:${tabId}`))[`invite:${tabId}`] || null;
  },
  async set(tabId, value) {
    if (!chrome.storage.session) return void memoryInvites.set(tabId, value);
    await chrome.storage.session.set({ [`invite:${tabId}`]: value });
  },
  async remove(tabId) {
    memoryInvites.delete(tabId);
    await chrome.storage.session?.remove(`invite:${tabId}`);
  },
};

async function pendingInvite(tabId) {
  const inv = await inviteStore.get(tabId);
  if (inv && Date.now() - inv.at < INVITE_MAX_AGE_MS) return inv;
  if (inv) await inviteStore.remove(tabId);
  return null;
}

function stripInvite(url) {
  try {
    const u = new URL(url);
    u.searchParams.delete('psSession');
    u.hash = '';
    return u.href;
  } catch {
    return null;
  }
}

const GENERIC_HANDLERS = {
  // From the popup, after the user granted access to these origins.
  async 'generic-enable'({ site, origins }) {
    const sites = await genericSites();
    sites[site] = [...new Set([...(sites[site] || []), site, ...origins])];
    await chrome.storage.local.set({ genericSites: sites });
    await syncGenericScripts();
    return { ok: true, origins: sites[site] };
  },

  async 'generic-disable'({ site }) {
    const sites = await genericSites();
    const removed = sites[site] || [];
    delete sites[site];
    await chrome.storage.local.set({ genericSites: sites });
    await syncGenericScripts();
    const stillUsed = new Set(Object.values(sites).flat());
    const unused = removed.filter((o) => !stillUsed.has(o));
    if (unused.length) await chrome.permissions.remove({ origins: unused.map(pattern) }).catch(() => {});
    return { ok: true };
  },

  async 'generic-invite'({ sessionId }, sender) {
    const tabId = sender.tab?.id;
    if (tabId === undefined || !/^[a-f0-9]{6,64}$/.test(sessionId || '')) return { ok: false };
    await inviteStore.set(tabId, { sessionId, at: Date.now() });
    chrome.tabs.sendMessage(tabId, { target: 'generic', type: 'invite' }).catch(() => {});
    return { ok: true };
  },

  async 'generic-hello'(_msg, sender) {
    return { pending: !!(sender.tab && (await pendingInvite(sender.tab.id))) };
  },

  // First frame to claim gets the invite, so only the frame holding the player joins.
  async 'generic-claim'(_msg, sender) {
    const tabId = sender.tab?.id;
    if (tabId === undefined) return null;
    const inv = await pendingInvite(tabId);
    if (!inv) return null;
    await inviteStore.remove(tabId);
    return { sessionId: inv.sessionId, pageUrl: stripInvite(sender.tab.url) };
  },
};

chrome.tabs.onRemoved.addListener((tabId) => inviteStore.remove(tabId).catch(() => {}));

// Access revoked in the browser's extension settings: drop the sites that depended on it.
chrome.permissions.onRemoved.addListener(async ({ origins = [] }) => {
  if (!origins.length) return;
  const revoked = new Set(origins.map((p) => p.replace(/\/\*$/, '')));
  const sites = await genericSites();
  let changed = false;
  for (const [site, list] of Object.entries(sites)) {
    if (revoked.has(site)) {
      delete sites[site];
      changed = true;
    } else if (list.some((o) => revoked.has(o))) {
      sites[site] = list.filter((o) => !revoked.has(o));
      changed = true;
    }
  }
  if (!changed) return;
  await chrome.storage.local.set({ genericSites: sites });
  await syncGenericScripts();
});
