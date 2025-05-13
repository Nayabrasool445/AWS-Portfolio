let todoContainerElement = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");


function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}


let todoList = getTodoListFromLocalStorage();
let todoCount = todoList.length;

function onTodoStatusChange(checkboxId, labelId, todoId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");

    let todoObjectIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    })

    let todoObject = todoList[todoObjectIndex];
    if (todoObject.ischecked === true) {
        todoObject.ischecked = false;
    } else {
        todoObject.ischecked = true;
    }
}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoContainerElement.removeChild(todoElement);

    let deleteIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (todoId === eachTodoId) {
            return true;
        } else {
            return false;
        }
    });
    todoList.splice(deleteIndex, 1);
}


function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoContainerElement.appendChild(todoElement);

    let todoInputElement = document.createElement("input");
    todoInputElement.type = "checkbox";
    todoInputElement.id = checkboxId;
    todoInputElement.checked = todo.ischecked;
    todoInputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId, todoId);
    };
    todoInputElement.classList.add("checkbox-input");
    todoElement.appendChild(todoInputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelInput = document.createElement("label");
    labelInput.setAttribute("for", checkboxId);
    labelInput.classList.add("checkbox-label");
    labelInput.textContent = todo.text;
    labelInput.id = labelId;
    if (todo.ischecked === true) {
        labelInput.classList.add("checked");
    }
    labelContainer.appendChild(labelInput);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}


for (let todo of todoList) {
    createAndAppendTodo(todo);
}


function onTodoStatusChange(checkboxId, labelId, todoId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");

    let todoObjectIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });

    let todoObject = todoList[todoObjectIndex];
    if (todoObject.ischecked === true) {
        todoObject.ischecked = false;
    } else {
        todoObject.ischecked = true;
    }
}
addTodoButton.onclick = function() {
    onAddTodo();
}

saveTodoButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}


function onAddTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if (userInputElement.value === "") {
        alert("Enter Valid Text");
        return;
    }

    todoCount = todoCount + 1;
    let newTodo = {
        text: userInputValue,
        uniqueNo: todoCount,
        ischecked: false
    };
    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    userInputElement.value = "";

}