import storageService from "./storage-service.js";

class TaskList {
    constructor(tasks) {
        this.tasks = tasks;
    }

    add(newTask) {
        this.tasks = [...this.tasks, newTask];
    }

    delete(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    deleteByListId(parentListId) {
        this.tasks = this.tasks.filter(task => task.parentListId !== parentListId);
    }

    edit(id,text) {
        this.tasks = this.tasks.map(task => {   // map а не forEach потому что операция-мутация, а не перебор
            if (task.id === id) {
                return { ...task, text: text }; //обратились к нужному объекту с помощью map, скопировали все его свойства, но заменили текст
            }

            return task;
        });
    }

    check(id) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                return { ...task, checked: !task.checked };
            }

            return task;
        });
    }
}

const tasks = JSON.parse(storageService.get('tasks'));

const taskList = new TaskList(tasks ? tasks : []);

export default taskList; 

