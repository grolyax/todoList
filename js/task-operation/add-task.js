import checkTask from './check-task.js';
import deleteTask from './delete-btn.js';
import editTask from './edit-task.js';

import taskList from '../tasks.js'

const todoList = document.querySelector('.todo-list ol');


function generateId(tasks) {
    const ids = tasks.map(task => {
        // получаем массив со всеми идентификаторами тасков
        return task.id
    });


    // если у нас пустой массив, мы начинаем нумерацию с единицы
    if (!ids.length) {
        return 1;
    }

    //находим максимальный id
    const maxId = Math.max(...ids);


    //возвращаем больший, который больше максимального на 1
    return maxId + 1;
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

      const newTodo = document.createElement('li');
  
      newTodo.setAttribute('id', `task-${newTask.id}`);
  
      todoList.appendChild(newTodo);
      newTodo.innerHTML = `<input type="checkbox"><span>${todoText}</span><button class="edit-btn"><i class="fa fa-edit" aria-hidden="true"></i></button><button class="delete-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>`;
  
      const checkbox = document.querySelector(`#task-${newTask.id} > input`);
      const deleteBtn = document.querySelector(`#task-${newTask.id} .delete-btn`); 
      const editBtn = document.querySelector(`#task-${newTask.id} .edit-btn`); 
      
      checkbox.addEventListener('change', checkTask);
      deleteBtn.addEventListener('click', deleteTask);
      editBtn.addEventListener('click', editTask);
      
      // очищаем форму
      event.target.reset();
  }
  