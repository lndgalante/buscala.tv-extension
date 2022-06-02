// 🧮 constants
const BASE_URL = 'https://buscala.tv';
const CONTEXT_MENU_ID = 'buscalaTvMenuContext';

// ⚒️ helpers
function getBuscalaTvUrl(movie) {
  const queryParameter = encodeURIComponent(movie);
  return `${BASE_URL}/?search=${queryParameter}`;
}

// 🎬 create "buscalaTvMenuContext" menu context to all pages
function handleInstallContextMenu() {
  chrome.contextMenus.create({
    id: CONTEXT_MENU_ID,
    contexts: ['selection'],
    title: 'Buscala.TV | ¿Dónde miro "%s"?',
  });
}

// 🖱 create click event for "buscalaTvMenuContext" menu context
function handleContextMenuClick({ selectionText }) {
  const url = getBuscalaTvUrl(selectionText);
  chrome.tabs.create({ url });
}

// 📎 attach event listeners to chrome runtime and context menus
chrome.runtime.onInstalled.addListener(handleInstallContextMenu);
chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
