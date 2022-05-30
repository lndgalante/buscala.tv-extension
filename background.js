// helpers
function getBuscalaTvUrl(movie) {
  const queryParam = encodeURIComponent(movie);
  return `https://buscala.tv/?search=${queryParam}`;
}

// attach "buscalaMenuContext" menu context to all pages
function handleInstallContextMenu() {
  chrome.contextMenus.create({
    contexts: ['selection'],
    id: 'buscalaMenuContext',
    title: 'Buscala.TV | ¿Dónde miro "%s"?',
  });
}

chrome.runtime.onInstalled.addListener(handleInstallContextMenu);

// attach click event for "buscalaMenuContext" menu context
function handleContextMenuClick({ selectionText }) {
  const url = getBuscalaTvUrl(selectionText);
  chrome.tabs.create({ url });
}

chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
