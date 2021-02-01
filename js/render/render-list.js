import taskList from '../tasks.js';
import listTemplate from '../templates/pages/list/index.js';
import addTask, { createTask } from '../task-operation/add-task.js';
import deleteCheckedTasks from '../task-operation/delete-checked-tasks.js';

import { getListIdByUrl } from '../utils.js';

export default function renderList() {
    const rootDiv = document.querySelector('.container');

    rootDiv.innerHTML = listTemplate;

    const addForm = document.querySelector('.add-form > form');  //находим форму добавления

    addForm.addEventListener('submit', addTask);    //вешаем обработчик событий отправки на форму

    const deleteCheckedBtn = document.querySelector('.delete-checked-btn');

    deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);

    const listId = getListIdByUrl();

    taskList.tasks
        .filter((task) => task.parentListId === listId)
        .forEach(task => {
            createTask(task);
        });
}