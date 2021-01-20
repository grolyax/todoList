import listsTemplate from './templates/pages/lists/index.js';
import { generateId } from './utils.js';
import listsList from './lists-list.js'
import { addList, createList } from './list-operation/add-list.js';

const currentUrl = window.location.pathname;

const rootDiv = document.querySelector('.container');

if (currentUrl === '/') {
    rootDiv.innerHTML = listsTemplate;

    Array.from(listsList.lists).forEach(list => createList(list)); 

    const addListForm = document.querySelector('.add-form > form');

    addListForm.addEventListener('submit', addList);
}

 // (маршрутизация) по аналогии с Task доделать - и добавить на  HTML чтоб генерировался из localStorage и работал на добавление вместо 1, 2, 3, раскидать ивенты по папкам (listоперэйшн. есть уже Taskоперайшн)