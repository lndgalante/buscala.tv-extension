// 🧮 constants
const BASE_URL = 'https://www.buscala.tv';
const CONTEXT_MENU_ID = 'buscalaTvMenuContext';

// 🔧 helpers
function getQueryParameters(parameters: { [key: string]: string }) {
  return Object.entries(parameters).reduce((accumulator, [key, value]) => `${accumulator}&${key}=${value}`, '');
}

function getBuscalaTvUrl(movie: string) {
  const queryParameters = getQueryParameters({ search: encodeURIComponent(movie), origin: 'addon' });
  return `${BASE_URL}/?${queryParameters}`;
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
