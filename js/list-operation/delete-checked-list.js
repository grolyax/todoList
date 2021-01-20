import listsList from '../lists-list.js';
import { getTaskId } from '../utils.js';
import storageService from '../storage-service.js';

function deleteCheckedLists() {

    const checkedLists = document.querySelectorAll('li.checked');
    checkedLists.forEach((checkedList) => {
        const listId = getTaskId(checkedList);
        listsList.delete(listId);
        
        checkedList.remove();
    });

    storageService.set('lists', JSON.stringify(listsList.lists));
}

export default deleteCheckedLists