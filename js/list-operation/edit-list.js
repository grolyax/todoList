import { ENTER_KEY_CODE } from '../constants.js';


import listsList from '../lists-list.js';
import { getTaskId } from '../utils.js';
import storageService from '../storage-service.js';

function submitList(event) {    // эта функция для enter
    if (event.keyCode !== ENTER_KEY_CODE) {
        return;
    }

    const li = event.target.closest('li');

    

    const icon = li.querySelector('.edit-btn i');

    const checkbox = li.querySelector('input[type="checkbox"]');


    saveList (li, icon, checkbox);
}

function saveList(li, icon, checkbox) {
    const input = li.querySelector('input[type="text"]');
    const { value:newName } = input;

    const newLink = document.createElement('a'); // src 
    newLink.textContent = newName;

    li.replaceChild(newLink, input);

    icon.classList.remove('fa-save');
    icon.classList.add('fa-edit');

    checkbox.disabled = false;

    const listId = getTaskId(li); // получаем id утилиты

    listsList.edit(listId, newName); // заменяем текст при правке

    storageService.set('lists', JSON.stringify(listsList.lists)); // заносим в локал сторидж

}

function editList(event) {      // эта функция для edit
    /*
    находим span текущего task
    записываем его содержимое в переменную
    создаем текстовый inpyt и вставляем его вместо спан
    задаем валуе инпута сохраненным значением спан
    после повторного нажатия на кнопку едит, сохраняем текущее значение инпута
    заменяем инпут на спан с новым значением
    */


    const li = event.target.closest('li');

    const link = li.querySelector('a');

    const icon = li.querySelector('.edit-btn i');

    const checkbox = li.querySelector('input[type="checkbox"]')

    if (link) {
        const { textContent: name } = link;

        const input = document.createElement('input');
       
        input.setAttribute('type', 'text');

        input.addEventListener('keydown', submitList)

        li.replaceChild(input, link);

        input.focus();
        //чтобы курсор был в конце при фокусе

        input.value = '';
        input.value = name;

        icon.classList.remove('fa-edit');
        icon.classList.add('fa-save');
    
        checkbox.disabled = true;

        return

}

saveList(li, icon, checkbox);

}

export default editList