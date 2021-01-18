import listsTemplate from './templates/pages/lists/index.js';
import { generateId } from './utils.js';
import listsList from './lists-list.js'

const currentUrl = window.location.pathname;

const rootDiv = document.querySelector('.container');

if (currentUrl === '/') {
    rootDiv.innerHTML = listsTemplate;

    const addListForm = document.querySelector('.add-form > form');

    addListForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const listName = formData.get('name');

        const newList = {
            id: generateId(listsList.lists),
            name: listName
        };

        listsList.add(newList);     // (маршрутизация) по аналогии с Task доделать - и добавить на  HTML чтоб генерировался из localStorage и работал на добавление вместо 1, 2, 3, раскидать ивенты по папкам (листоперэйшн. есть уже таскоперайшн)
    })
}