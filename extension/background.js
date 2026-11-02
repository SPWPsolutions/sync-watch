chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg?.type !== 'badge' || !sender.tab?.id) return;
  const tabId = sender.tab.id;
  chrome.action.setBadgeBackgroundColor({ tabId, color: '#ef3e3a' }).catch(() => {});
  chrome.action.setBadgeText({ tabId, text: msg.text }).catch(() => {});
});

chrome.runtime.onInstalled.addListener(async () => {
  const { permId } = await chrome.storage.local.get('permId');
  if (!permId) await chrome.storage.local.set({ permId: crypto.randomUUID().replace(/-/g, '') });
});
