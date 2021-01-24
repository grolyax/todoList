import { ENTER_KEY_CODE } from '../constants.js';

import taskList from '../tasks.js';
import { getTaskId } from '../utils.js';
import storageService from '../storage-service.js';

function submitTask(event) {    // эта функция для enter
    if (event.keyCode !== ENTER_KEY_CODE) {
        return;
    }

    const li = event.target.closest('li');

    

    const icon = li.querySelector('.edit-btn i');

    const checkbox = li.querySelector('input[type="checkbox"]');


    saveTask (li, icon, checkbox);
}

function saveTask(li, icon, checkbox) {
    const input = li.querySelector('input[type="text"]');
    const { value:newText } = input;

    const newSpan = document.createElement('span');
    newSpan.textContent = newText;

    li.replaceChild(newSpan, input);

    icon.classList.remove('fa-save');
    icon.classList.add('fa-edit');

    checkbox.disabled = false;

    const taskId = getTaskId(li); // получаем id утилиты

    taskList.edit(taskId, newText); // заменяем текст при правке

    storageService.set('tasks', JSON.stringify(taskList.tasks)); // заносим в локал сторидж

}

function editTask(event) {      // эта функция для edit
    /*
    находим span текущего task
    записываем его содержимое в переменную
    создаем текстовый inpyt и вставляем его вместо спан
    задаем валуе инпута сохраненным значением спан
    после повторного нажатия на кнопку едит, сохраняем текущее значение инпута
    заменяем инпут на спан с новым значением
    */


    const li = event.target.closest('li');

    const span = li.querySelector('span');

    const icon = li.querySelector('.edit-btn i');

    const checkbox = li.querySelector('input[type="checkbox"]')

    if (span) {
        const { textContent: text } = span;

        const input = document.createElement('input');
       
        input.setAttribute('type', 'text');

        input.addEventListener('keydown', submitTask)

        li.replaceChild(input, span);

        input.focus();
        //чтобы курсор был в конце при фокусе

        input.value = '';
        input.value = text;

        icon.classList.remove('fa-edit');
        icon.classList.add('fa-save');
    
        checkbox.disabled = true;

        return

}

saveTask(li, icon, checkbox);

}

export default editTask