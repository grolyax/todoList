export function getTaskId(element) {
    return parseInt(element.id.split('-')[1]);
}



export function generateId(tasks) {
    const ids = tasks.map(task => {
        // получаем массив со всеми идентификаторами тасков
        return task.id
    });


    // если у нас пустой массив, мы начинаем нумерацию с единицы
    if (!ids.length) {
        return 1;
    }

    //находим максимальный id
    const maxId = Math.max(...ids);


    //возвращаем больший, который больше максимального на 1
    return maxId + 1;
}


