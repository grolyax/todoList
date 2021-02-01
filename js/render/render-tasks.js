import taskList from '../tasks.js';
import { createTask } from '../task-operation/add-task.js';
import { getListIdByUrl } from '../utils.js';
import { addDragAndDrop } from './render-list.js';

export default function renderTasks(tasks) {
    const listId = getListIdByUrl();

    const todoList = document.querySelector('.todo-list ol');

    todoList.innerHTML = '';

    taskList.tasks
    .filter((task) => task.parentListId === listId)
    .forEach(task => {
        createTask(task);
    });

    addDragAndDrop();
}



