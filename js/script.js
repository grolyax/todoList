import listsTemplate from './templates/pages/lists/index.js';
import listTemplate from './templates/pages/list/index.js';
import { generateId, getListIdByUrl } from './utils.js';
import listsList from './lists-list.js'

import addList, { createList } from './list-operation/add-list.js';
import taskList from './tasks.js';
import addTask, {createTask} from './task-operation/add-task.js';
import deleteCheckedTasks from './task-operation/delete-checked-tasks.js';
 

const currentUrl = window.location.pathname;

const rootDiv = document.querySelector('.container');

function renderLists() {
    rootDiv.innerHTML = listsTemplate;

    Array.from(listsList.lists).forEach(list => createList(list)); 

    const addListForm = document.querySelector('.add-form > form');

    addListForm.addEventListener('submit', addList);
}

if (currentUrl === '/') {
    renderLists();
}


export  function renderList() {
    rootDiv.innerHTML = listTemplate;
    
    //находим форму добавления
    const addForm = document.querySelector('.add-form > form');
    const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
    
    //вешаем обработчик событий отправки на форму
    addForm.addEventListener('submit', addTask);
    deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);
    
    const listId = getListIdByUrl();
    
    taskList.tasks.filter((task) => task.parentListId === listId).forEach(task => {
        createTask(task);  
    });

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