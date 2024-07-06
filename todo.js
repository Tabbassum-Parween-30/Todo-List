let todolist = [];

displayitems();

function addtodo() {
    let inputElement = document.querySelector('#todo_input');
    // for getting input value
    let datelements = document.querySelector('#todo-date');
    let todoitem = inputElement.value;
    let tododdatelement = datelements.value;
    todolist.push({items:todoitem,dueDate:tododdatelement})
    datelements.value = '';
    inputElement.value = '';
    displayitems();


}

function displayitems() {
    let containerElement = document.querySelector(".todo-container");
    let newhtml = '';

    for (let i = 0; i < todolist.length; i++) {
        let item = todolist[i].items;
        let dueDate = todolist[i].dueDate;
        newhtml += `
            <span id="todo_input">${item}</span>
            <span id="todo-date">${dueDate}</span>
            <button class="btn-delete" onclick="todolist.splice(${i},1); displayitems();">Delete</button>
            `;


    }
    containerElement.innerHTML = newhtml;

}