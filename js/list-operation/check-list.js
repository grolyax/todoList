import listsList from '../lists-list.js';
import { getTaskId } from '../utils.js';
import storageService from '../storage-service.js';

function checkList(event) {  // создали работающую кнопку чек, которая зачёркивает задание, если нажата или снимает зачёркивание, если снят "чек"
    
   
    const { target } = event; // через такую запись можно получить несколько свойств объектаБ здесь только свойство target
                                // вместо   const target = event.target;
    
    const { parentNode: li, checked } = target;
    // const checked =target.checked
    //const li = target.parentNode;

    if (checked) {
        li.classList.add('checked');
    } else {
        li.classList.remove('checked');
    }  
    
    const listId = getTaskId(li);
    listsList.check(listId);

storageService.set('lists', JSON.stringify(listsList.lists));
}

export default checkList;