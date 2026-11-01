chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg?.type !== 'badge' || !sender.tab) return;
  chrome.action.setBadgeBackgroundColor({ tabId: sender.tab.id, color: '#6366f1' });
  chrome.action.setBadgeText({ tabId: sender.tab.id, text: msg.text });
});

chrome.runtime.onInstalled.addListener(async () => {
  const { permId } = await chrome.storage.local.get('permId');
  if (!permId) await chrome.storage.local.set({ permId: crypto.randomUUID().replace(/-/g, '') });
});
