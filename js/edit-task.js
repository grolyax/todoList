function editTask(event) {
    /*
    находим span текущего task
    записываем его содержимое в переменную
    создаем текстовый inpyt и вставляем его вместо спан
    задаем валуе инпута сохраненным значением спан
    после повторного нажатия на кнопку едит, сохраняем текущее значение инпута
    заменяем инпут на спан с новым значением
    */

    const { parentNode: editButton } = event.target;
    const { parentNode: li } = editButton;

    const span = li.querySelector('span');
    const { textContent: text } = li.querySelector('span');

   const input = document.createElement('input');
   input.setAttribute('value', text);
   input.setAttribute('type', 'text');

   li.replaceChild(input, span);

}

export default editTask