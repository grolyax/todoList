import checkTask from './check-task.js';
import deleteTask from './delete-btn.js';
import editTask from './edit-task.js';
import storageService from '../storage-service.js';

import taskList from '../tasks.js'; 
import { generateId } from './utils.js';

const todoList = document.querySelector('.todo-list ol');


export function createTask(task) {
    const newTodo = document.createElement('li');
  
      newTodo.setAttribute('id', `task-${task.id}`);
  
      todoList.appendChild(newTodo);

      newTodo.innerHTML = `<input type="checkbox"><span>${task.text}</span><button class="edit-btn"><i class="fa fa-edit" aria-hidden="true"></i></button><button class="delete-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>`;
  
      const checkbox = document.querySelector(`#task-${task.id} > input`);
      const deleteBtn = document.querySelector(`#task-${task.id} .delete-btn`); 
      const editBtn = document.querySelector(`#task-${task.id} .edit-btn`); 
      
      checkbox.addEventListener('change', checkTask);
      deleteBtn.addEventListener('click', deleteTask);
      editBtn.addEventListener('click', editTask);

      if (task.checked) {
        newTodo.classList.add('checked');
        checkbox.checked = 'checked';
    }

}


export default function addTask () {
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
          text: todoText,
          checked: false
      };
  
      taskList.add(newTask); // создаётся новый объект с задачей и добавляем в массив

      createTask(newTask);
      
      // очищаем форму
      event.target.reset();

      storageService.set('tasks', JSON.stringify(taskList.tasks));
  }
  