class TaskList {
    constructor() {
        this.tasks = [];
    }

    add(newTask) {
        this.tasks = [...this.tasks, newTask];
    }

    delete(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}

const taskList = new TaskList();

export default taskList; 

