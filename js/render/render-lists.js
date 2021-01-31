import listsList from '../lists-list.js'
import deleteCheckedLists from '../list-operation/delete-checked-list.js';
import currentUser from '../current-user.js';
import listsTemplate from '../templates/pages/lists/index.js';

import { addList, createList } from '../list-operation/add-list.js';

export default function renderLists() {
    const rootDiv = document.querySelector('.container');

    rootDiv.innerHTML = listsTemplate;


    const addListForm = document.querySelector('.add-form > form');
    const deleteCheckedBtn = document.querySelector('.delete-checked-btn');

    addListForm.addEventListener('submit', addList);
    deleteCheckedBtn.addEventListener('click', deleteCheckedLists);

    //Array.from(listsList.lists).forEach(list => createList(list));
    const currentUserId = currentUser.userData.id;

    listsList.lists
        .filter((list) => list.userId === currentUserId)
        .forEach((list) => {
            createList(list);
        });
}
