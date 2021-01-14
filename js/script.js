
import addTask from './task-operation/add-task.js';
import deleteCheckedTasks from './task-operation/delete-checked-tasks.js';

const addForm = document.querySelector('.add-form > form');
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');


addForm.addEventListener('submit', addTask);
deleteCheckedBtn.addEventListener('click', deleteCheckedTasks);








// дз 1. добавить анимацию для инпута (из центра растекается линия)  2. добавить функционал удаления 3. добавить имя списка 4. застилизовать элементы списка (отдельные задания) 5. перенести на другую ветвь репозитория



// setInterval
// const btnDel = document.getElementsByClassName('delete-btn'); 
 //   btnDel.addEventListener('onclick', (event) => {})

 //   const Input = document.querySelector('.add-form > input');
//    Input.addEventListener('focus', () => {
//        Input.style.backgroundColor = 'red';
//    }); 
// function deleteTask(event) {event.targe.parentNode.parentNode.remove()}




