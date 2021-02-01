import storageService from './storage-service.js';

class ListsList {
    constructor(lists) {
        this.lists = lists;
    }

    add(newList) {
        this.lists = [...this.lists, newList];
    }


    delete(id) {
        this.lists = this.lists.filter(list => list.id !== id);
    }

    edit(id, name) {
        this.lists = this.lists.map(list => {   // map а не forEach потому что операция-мутация, а не перебор
            if (list.id === id) {
                return { ...list, name: name }; //обратились к нужному объекту с помощью map, скопировали все его свойства, но заменили текст
            }

            return list;
        });
    }

    check(id) {
        this.lists = this.lists.map(list => {
            if (list.id === id) {
                return { ...list, checked: !list.checked };
            }

            return list;
        });
    }
    getListById(id) {
        return this.lists.find(list => list.id === id);
      }
}
const lists = JSON.parse(storageService.get('lists'));


const listsList = new ListsList(lists || []);

export default listsList;