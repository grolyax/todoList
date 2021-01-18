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

const tasks = JSON.parse(localStorage.getItem('tasks'));

const taskList = new TaskList(tasks ? tasks : []);

export default taskList; 

