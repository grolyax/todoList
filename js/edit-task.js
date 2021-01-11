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

    if (span) {
        const { textContent: text } = li.querySelector('span');

        const input = document.createElement('input');
        input.setAttribute('value', text);
        input.setAttribute('type', 'text');

        li.replaceChild(input, span);

        return
    }

    const input = li.querySelector('input[type="text"]');
    const { value: newText } = input;

    const newSpan = document.createElement('span');
    newSpan.textContent = newText;

    li.replaceChild(newSpan, input);

}

export default editTask