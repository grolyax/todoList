import checkTask from './check-task.js';

//находим форму добавления
const addForm = document.querySelector('.add-form > form');
const todoList = document.querySelector('.todo-list ol');

let tasks = []; //создаём массив, где будут сохранятся наши дела



function deleteTask(event) {
    event.target.closest('.delete-btn').parentNode.remove();
}


// вешаем обработчик события submit (отправки) на форму
addForm.addEventListener('submit', (event) => {
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

    //newTodo.setAttribute('id', task.length - 1);

    todoList.appendChild(newTodo);
    newTodo.innerHTML = `<input type="checkbox" id=${tasks.length - 1}> <span>${todoText}</span> <button class="delete-btn"><i class="fa fa-trash" aria-hidden="true"></i> </button>`;

    const checkbox = document.getElementById(`${tasks.length-1}`);
    const deleteBtn = document.getElementsByClassName('delete-btn'); 
    // deleteBtn.addEventListener('click', deleteTask);
    checkbox.addEventListener('change', checkTask);
    

 
    // очищаем форму
    event.target.reset();
});








// дз 1. добавить анимацию для инпута (из центра растекается линия)  2. добавить функционал удаления 3. добавить имя списка 4. застилизовать элементы списка (отдельные задания) 5. перенести на другую ветвь репозитория



// setInterval
// const btnDel = document.getElementsByClassName('delete-btn'); 
 //   btnDel.addEventListener('onclick', (event) => {})

 //   const Input = document.querySelector('.add-form > input');
//    Input.addEventListener('focus', () => {
//        Input.style.backgroundColor = 'red';
//    }); 
// function deleteTask(event) {event.targe.parentNode.parentNode.remove()}




