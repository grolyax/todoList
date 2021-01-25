
import renderLists from './list-operation/renderLists.js';
import renderList from './task-operation/renderList.js';


const currentUrl = window.location.pathname;

if (currentUrl === '/' || currentUrl === '/index.html') {
  renderLists();
}

if (currentUrl === '/list/1') {
  renderList();
}

window.addEventListener('popstate', () => {
  if (window.location.pathname === '/list/1') {
    renderList();
  }

  if (window.location.pathname === '/') {
    renderLists();
  }
});