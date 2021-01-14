import taskList from '../tasks.js';

function deleteTask(event) {
    const {parentNode} = event.target.closest('.delete-btn');

    const taskId = parseInt(parentNode.id.split('-')[1],10);

    taskList.delete(taskId);

    parentNode.remove(); // event.target.closest('.delete-btn').parentNode.remove();  две строчки вместо это длинной через деструктуризацию

    localStorage.setItem('tasks', JSON.stringify(taskList.tasks));
}

export default deleteTask;