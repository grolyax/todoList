

function deleteTask(event) {
    const {parentNode} = event.target.closest('.delete-btn');
    parentNode.remove(); // event.target.closest('.delete-btn').parentNode.remove();  две строчки вместо это длинной через деструктуризацию
}

export default deleteTask;