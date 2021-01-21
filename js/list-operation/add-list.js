import checkList from './check-list.js';
import deleteList from './delete-list.js';
import editList from './edit-list.js';
import storageService from '../storage-service.js';

import listsList from '../lists-list.js'; 
import { generateId } from '../utils.js';




export function createList(list) {
    const listsOfList = document.querySelector('.list-of-lists ol');

    const newList = document.createElement('li');
  
      newList.setAttribute('id', `list-${list.id}`);

  
      listsOfList.appendChild(newList);

                                                     //TODO доделать ссылки
      newList.innerHTML = `<input type="checkbox"><a src=" ">${list.name}</a><button class="edit-btn"><i class="fa fa-edit" aria-hidden="true"></i></button><button class="delete-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>`;
  
      const checkbox = document.querySelector(`#list-${list.id} > input`);
      const deleteBtn = document.querySelector(`#list-${list.id} .delete-btn`); 
      const editBtn = document.querySelector(`#list-${list.id} .edit-btn`); 
      
      checkbox.addEventListener('change', checkList);
      deleteBtn.addEventListener('click', deleteList);
      editBtn.addEventListener('click', editList);

      if (list.checked) {
        newList.classList.add('checked');
        checkbox.checked = 'checked';
    }

}


export  function addList (event) {
    
      event.preventDefault();

      const formData = new FormData(event.target);
  
      const listName = formData.get('name');
  
      if (!listName) {
          return;
      }

      const newList = {
        id: generateId(listsList.lists),
        name: listName,
        checked: false
      };
  
      listsList.add(newList);    

      createList(newList);
  
      event.target.reset();

      storageService.set('lists', JSON.stringify(listsList.lists));
  }



 
  

   

       

  