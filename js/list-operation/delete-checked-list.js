import listsList from '../lists-list.js';
import { getTaskId } from '../utils.js';
import storageService from '../storage-service.js';
import taskList from '../tasks.js';

function deleteCheckedLists(event) {

    const checkedLists = document.querySelectorAll('li.checked');
    checkedLists.forEach((checkedList) => {
        const listId = getTaskId(checkedList);
        listsList.delete(listId);  
        taskList.deleteByListId(listId);

        checkedList.remove();
    });

    storageService.set('lists', JSON.stringify(listsList.lists));
    storageService.set('tasks', JSON.stringify(taskList.tasks));
}

export default deleteCheckedLists