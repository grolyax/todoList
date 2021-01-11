function checkTask(event) {  // создали работающую кнопку чек, которая зачёркивает задание, если нажата или снимает зачёркивание, если снят "чек"
    const li = event.target.parentNode;

    if (event.target.checked) {
        li.classList.add('checked');
    } else {
        li.classList.remove('checked');
    }   
}

export default checkTask;