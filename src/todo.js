import { projectFactory } from "./project";

const todoFactory = (name, description, dueDate) => {
    console.log(name + " created");
    return {name, description, dueDate};
};

function showTodo(todo){
    console.log(todo.toString());
    const todoArea = document.getElementById("todoArea");
    while(todoArea.firstChild){
        todoArea.removeChild(todoArea.firstChild);
    }
    const todoPanel = document.createElement("div");
    todoPanel.classList.add("todoPanel");
    todoArea.appendChild(todoPanel);

    let todoName = document.createElement("div");
    todoName.classList.add("todoChild");
    todoName.style.fontSize = "2em";
    todoName.textContent = todo.name;
    let todoDate = document.createElement("div");
    todoDate.classList.add("todoChild");
    todoDate.style.marginLeft = "2em";
    todoDate.style.fontSize = "1.5em";
    todoDate.textContent = todo.dueDate;
    let todoDescription = document.createElement("div");
    todoDescription.style.marginTop = "2em";
    todoDescription.classList.add("todoChild");
    todoDescription.textContent = todo.description;
    todoPanel.appendChild(todoName);
    todoPanel.appendChild(todoDate);
    todoPanel.appendChild(todoDescription);


}

export {todoFactory, showTodo};