// 🧮 constants
const BASE_URL = 'https://www.buscala.tv';
const CONTEXT_MENU_ID = 'buscalaTvMenuContext';

// 🔧 helpers
function getBuscalaTvUrl(movie: string) {
  return `${BASE_URL}/?search=${encodeURIComponent(movie)}`;
}

// 🎬 create "buscalaTvMenuContext" menu context to all pages
function handleInstallContextMenu() {
  chrome.contextMenus.create({ id: CONTEXT_MENU_ID, contexts: ['selection'], title: 'Buscala.TV | ¿Dónde miro "%s"?' });
}

// 🐭 create click event for "buscalaTvMenuContext" menu context
function handleContextMenuClick(data: chrome.contextMenus.OnClickData) {
  chrome.tabs.create({ url: getBuscalaTvUrl(data?.selectionText) });
}

// 📎 attach event listeners to chrome runtime and context menus
chrome.runtime.onInstalled.addListener(handleInstallContextMenu);
chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
