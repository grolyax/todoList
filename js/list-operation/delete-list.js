import listsList from '../lists-list.js';
import storageService from '../storage-service.js';
import { getTaskId } from '../utils.js';
import taskList from '../tasks.js';

function deleteList(event) {
    const {parentNode} = event.target.closest('.delete-btn');

    const listId = getTaskId(parentNode);

    listsList.delete(listId);

    taskList.deleteByListId(listId);

    parentNode.remove(); // event.target.closest('.delete-btn').parentNode.remove();  две строчки вместо это длинной через деструктуризацию

    storageService.set('lists', JSON.stringify(listsList.lists));
    storageService.set('tasks', JSON.stringify(taskList.tasks));
}

export default deleteList;