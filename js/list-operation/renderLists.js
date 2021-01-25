import listsTemplate from '../templates/pages/lists/index.js';
import listsList from '../lists-list.js'
import addList, { createList } from './add-list.js';
import deleteCheckedLists from './delete-checked-list.js';


export default function renderLists() {
    const rootDiv = document.querySelector('.container');

    rootDiv.innerHTML = listsTemplate;

    Array.from(listsList.lists).forEach(list => createList(list));

    const addListForm = document.querySelector('.add-form > form');
    const deleteCheckedBtn = document.querySelector('.delete-checked-btn');

    addListForm.addEventListener('submit', addList);
    deleteCheckedBtn.addEventListener('click', deleteCheckedLists);
}