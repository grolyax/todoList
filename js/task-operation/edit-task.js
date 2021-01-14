import { ENTER_KEY_CODE } from '../constants.js';

function submitTask(event) {
    if (event.keyCode !== 13) {
        return;
    }

    const li = event.target.closest('li');

    const icon = li.querySelector('.edit-btn i');

    const checkbox = li.querySelector('input[type="checkbox"]');


    saveTask (li, icon, checkbox);
}

function saveTask(li, icon, checkbox) {
    const input = li.querySelector('input[type="checkbox"]');
    const { value:newTask } = input;

    const newSpan = document.createElement('span');
    newSpan.textContent = newText;

    li.replaceChild(newSpan, input);

    icon.classlist.remove('fa-save');
    icon.classlist.add('fa-edit');

    checkbox.disabled = false;

}

function editTask(event) {
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

        icon.classlist.remove('fa-edit');
        icon.classlist.add('fa-save');
    
        checkbox.disabled = true;

        return

}

saveTask(li, icon, checkbox);

}

export default editTask