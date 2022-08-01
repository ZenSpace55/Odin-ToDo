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
    todoPanel.textContent = todo.description;
    todoArea.appendChild(todoPanel);
}

export {todoFactory, showTodo};