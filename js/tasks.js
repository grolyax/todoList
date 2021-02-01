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

    edit(id, text) {
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

    swap(firstId, secondId) {
        let firstIndex = this.tasks.findIndex(task => task.id === firstId);
        let secondIndex = this.tasks.findIndex(task => task.id === secondId);
        
    if (firstIndex > secondIndex) {
        const temp = firstIndex;
        firstIndex = secondIndex;
        secondIndex = temp;
    }

    if (firstIndex == secondIndex) {
        return;
    }


        this.tasks = this.tasks
            .slice(0, firstIndex)
            .concat(
                this.tasks[secondIndex], 
                this.tasks.slice(firstIndex +1, secondIndex),
                this.tasks[firstIndex],
                this.tasks.slice(secondIndex+ 1)
            );
    }
}

const tasks = JSON.parse(storageService.get('tasks'));

const taskList = new TaskList(tasks ? tasks : []);

export default taskList;