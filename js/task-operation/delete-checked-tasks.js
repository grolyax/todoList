import taskList from '../tasks.js';
import { getTaskId } from '../utils.js';
import storageService from '../storage-service.js';

function deleteCheckedTasks(event) {

    const checkedTasks = document.querySelectorAll('li.checked');
    checkedTasks.forEach((checkedTask) => {
        const taskId = getTaskId(checkedTask);
        taskLisr.delete(taskId);
        
        checkedTask.remove();
    });

    storageService.set('tasks', JSON.stringify(taskList.tasks));
}

export default deleteCheckedTasks