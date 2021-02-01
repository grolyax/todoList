export function getId(element) {
    return parseInt(element.id.split('-')[1]);
} //"task-1" -> 1 (split разбивает на части и делает из них массив, и из массива мы берём второй элемент, а parseInt делает из значения число)



export function generateId(tasks) {

    if (!tasks.length) {
        return 1;
    }  // если у нас пустой массив, мы начинаем нумерацию с единицы

    const ids = tasks.map(task => {
        // получаем массив со всеми идентификаторами тасков
        return task.id
    });

    //находим максимальный id
    const maxId = Math.max(...ids);


    //возвращаем больший, который больше максимального на 1
    return maxId + 1;
}

export function getListIdByUrl() {
    const currentUrl = window.location.pathname;

    const splittedCyrrentUrl = currentUrl.split('/');

    return parseInt(splittedCyrrentUrl[splittedCyrrentUrl.length - 1], 10);
}

export function showErrors(errors) {
    for (let key in errors) {
        const span = document.querySelector(`input[name="${key}"] + span`);

        if (errors[key].length > 0) {

            const errorStr = errors[key].join('<br>'); //перебрали  одной строкой и каждую новую строку с абзаца

            span.innerHTML = errorStr;
        } else {
            span.innerHTML = '';
        }
    }
}

export function checkIfHasErrors(errors) {
    return Object.keys(errors).some((key) => errors[key].length > 0);
}





