import renderLists from './render/render-lists.js';
import renderList from './render/render-list.js';
import renderRegistration from './render/render-registration.js';
import renderLogin from './render/render-login.js'
import { getListIdByUrl } from './utils.js'
import currentUser from './current-user.js';
import lists from './lists-list.js';


const listRoutePattern = /^\/list\/\d+$/;

const INDEX_URLS = ['/', '/index.html']; //были отдельными аргументами, вынесли в массив, а в ифе проверяем есть ли в массиве те значения - упростили сократили запись

const REGISTRATION_URL = '/registration';
const LOGIN_URL = '/login';

export function renderPage() {
  const { pathname: currentUrl } = window.location;

  if (currentUrl === REGISTRATION_URL) { // можно упростить вынести одинаковые проверки (!currentUser.userData && currentUrl === REGISTRATION_URL), тогда if  уже не нужен - ушёл сюда, а только navigateToUrl('/') поставить в самом конце, чтоб было для null
    if (currentUser.userData !== null) { // здесь могла бы быть или запись (!currentUser.userData) - это тоже самое
      navigateToUrl('/');
    } else {
      renderRegistration();
    }

    return;
  }

  if (currentUrl === LOGIN_URL) { // можно упростить вынести одинаковые проверки (!currentUser.userData && currentUrl === LOGIN_URL)
    if (currentUser.userData !== null) {  // здесь могла бы быть или запись (!currentUser.userData) - это тоже самое
      navigateToUrl('/');
    } else {
      renderLogin();
    }

    return;
  }

  if (!currentUser.userData) {
    navigateToUrl(LOGIN_URL);

    return;
  }


  if (INDEX_URLS.includes(currentUrl)) {
    renderLists();

    return;
  }

  if (listRoutePattern.test(currentUrl)) {
    const listId = getListIdByUrl();

    const list = lists.getListById(listId);

    if (list.userId !== currentUser.userData.id) {
      navigateToUrl('/');
    } else {

      renderList();
    }

  }
}

export function navigateToUrl(url) {
  window.history.pushState({}, url, window.location.origin + url); // добавили новое состояние в историю браузера

  renderPage();
}