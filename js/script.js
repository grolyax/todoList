import renderLists from './list-operation/renderLists.js';
import renderList from './task-operation/renderList.js';

const currentUrl = window.location.pathname;

const listRoutePattern = /^\/list\/\d+$/;

if (currentUrl === '/' || currentUrl === '/index.html') {
  renderLists();
}

if (listRoutePattern.test(currentUrl)) {
  renderList();
}

window.addEventListener('popstate', () => {
  if (listRoutePattern.test(window.location.pathname)) {
    renderList();
  }

  if (window.location.pathname === '/' || currentUrl === '/index.html') {
    renderLists();
  }
});