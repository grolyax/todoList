import checkTask from './check-task.js';
import deleteTask from './delete-btn.js';

const todoList = document.querySelector('.todo-list ol');

let tasks = []; //создаём массив, где будут сохранятся наши дела



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
          text: todoText,
          checked: false
      };
  
      tasks = [...tasks, newTask]; // создаётся новый объект с задачей и добавляем в массив

      const newTodo = document.createElement('li');
  
      newTodo.setAttribute('id', `task-${tasks.length}`);
  
      todoList.appendChild(newTodo);
      newTodo.innerHTML = `<input type="checkbox" id=${tasks.length - 1}> <span>${todoText}</span> <button class="delete-btn"><i class="fa fa-trash" aria-hidden="true"></i> </button>`;
  
      const checkbox = document.querySelector(`#task-${tasks.length} > input`);
      const deleteBtn = document.querySelector(`#task-${tasks.length} .delete-btn`); 
      
      checkbox.addEventListener('change', checkTask);
      deleteBtn.addEventListener('click', deleteTask);
      
      // очищаем форму
      event.target.reset();
  }
  