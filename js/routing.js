import renderLists from './list-operation/renderLists.js';
import renderList from './task-operation/renderList.js';

const listRoutePattern = /^\/list\/\d+$/;

const INDEX_URLS = ['/', '/index.html']; //были отдельными аргументами, вынесли в массив, а в ифе проверяем есть ли в массиве те значения - упростили сократили запись

export function renderPage() {
    const { pathname: currentUrl } = window.location;

    if (INDEX_URLS.includes(currentUrl)) {
        renderLists();

        return;
      }
      
      if (listRoutePattern.test(currentUrl)) {
        renderList();
      }
}

export function navigateToUrl(url) {
    window.history.pushState({}, url, window.location.origin + url); // добавили новое состояние в историю браузера

    renderPage();
}