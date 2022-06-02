// ⚒️ helpers
function getBuscalaTvUrl(movie) {
  const queryParam = encodeURIComponent(movie);
  return `https://buscala.tv/?search=${queryParam}`;
}

// 🎬 create "buscalaTvMenuContext" menu context to all pages
function handleInstallContextMenu() {
  chrome.contextMenus.create({
    contexts: ['selection'],
    id: 'buscalaTvMenuContext',
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
