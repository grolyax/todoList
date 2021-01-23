import taskList from '../tasks.js';
import storageService from '../storage-service.js';
import { getTaskId } from '../utils.js';

function deleteTask(event) {
    const {parentNode} = event.target.closest('.delete-btn');

    const taskId = getTaskId(parentNode);

    taskList.delete(taskId); // 

    parentNode.remove(); // удаляем из HTML саму строку (элемент дома)         event.target.closest('.delete-btn').parentNode.remove();  две строчки вместо это длинной через деструктуризацию

    storageService.set('tasks', JSON.stringify(taskList.tasks));
}

export default deleteTask;