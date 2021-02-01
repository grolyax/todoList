import listTemplate from '../templates/pages/list/index.js';
import addTask from '../task-operation/add-task.js';
import deleteCheckedTasks from '../task-operation/delete-checked-tasks.js';

import renderTasks from './render-tasks.js';
import taskList from '../tasks.js';
import { getId } from '../utils.js';


export function addDragAndDrop() {
    const listItems = document.querySelectorAll('li');
    let dragging;
    let draggingOver;

    listItems.forEach(listItem => {
        listItem.setAttribute('draggable', true);

        listItem.addEventListener('drag', (event) => {
            dragging = event.target;
        });

        listItem.addEventListener('dragover', (event) => {  

            event.preventDefault();

            draggingOver = event.target.closest('li'); // запомнили элемент над которым сейчас находимся
        });

        listItem.addEventListener('drop', () => {
            taskList.swap(getId(dragging), getId(draggingOver));
        
            renderTasks();
        });
    });
}

export default function renderList() {
    const rootDiv = document.querySelector('.container');

    rootDiv.innerHTML = listTemplate;



    const addForm = document.querySelector('.add-form > form');  //находим форму добавления

    addForm.addEventListener('submit', addTask);    //вешаем обработчик событий отправки на форму

    const deleteCheckedBtn = document.querySelector('.delete-checked-btn');

    deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);

    renderTasks();
}