import checkTask from './check-task.js';
import deleteTask from './delete-btn.js';
import editTask from './edit-task.js';
import logoutUser from '../auth/logout-user.js';
import storageService from '../storage-service.js';
import currentUser from '../current-user.js';

import taskList from '../tasks.js';
import { generateId, getListIdByUrl } from '../utils.js';




export function createTask(task) {
    const todoList = document.querySelector('.todo-list ol');

    const newTodo = document.createElement('li');

    newTodo.setAttribute('id', `task-${task.id}`);

    todoList.appendChild(newTodo);

    newTodo.innerHTML = `
    <input type="checkbox">
    <span>${task.text}</span>
    <button class="edit-btn"><i class="fa fa-edit" aria-hidden="true"></i></button>
    <button class="delete-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>
    `;

    const checkbox = document.querySelector(`#task-${task.id} > input`);
    const deleteBtn = document.querySelector(`#task-${task.id} .delete-btn`);
    const editBtn = document.querySelector(`#task-${task.id} .edit-btn`);
    const logoutBtn = document.querySelector('.logout-btn');
    const loginCurrentUser = document.querySelector('.email-user');

    checkbox.addEventListener('change', checkTask);
    deleteBtn.addEventListener('click', deleteTask);
    editBtn.addEventListener('click', editTask);
    logoutBtn.addEventListener('click', logoutUser);
    loginCurrentUser.textContent = currentUser.userData.email;

    if (task.checked) {
        newTodo.classList.add('checked');
        checkbox.checked = 'checked';
    }
}


export default function addTask(event) {
    // сброс стандатрного поведения отправки формы (очистка засорения адресной строки)
    event.preventDefault();

    // получаем все поля формы
    const formData = new FormData(event.target);

    // получаем текст из инпута
    const todoText = formData.get('text');

    if (!todoText) {
        return;
    }
    // добавляем элементы в массив
    const newTask = {
        id: generateId(taskList.tasks),
        parentListId: getListIdByUrl(),
        text: todoText,
        checked: false,
    };

    taskList.add(newTask); // создаётся новый объект с задачей и добавляем в массив

    createTask(newTask);

    // очищаем форму
    event.target.reset();

    storageService.set('tasks', JSON.stringify(taskList.tasks));
}



