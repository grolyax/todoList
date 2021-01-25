import renderLists from './list-operation/renderLists.js';
import renderList from './task-operation/renderList.js';

const listRoutePattern = /^\/list\/\d+$/;

export function renderPage() {
    const { pathname: currentUrl } = window.location;

    if (currentUrl === '/' || currentUrl === '/index.html') {
        renderLists();
      }
      
      if (listRoutePattern.test(currentUrl)) {
        renderList();
      }
}