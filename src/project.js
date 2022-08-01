import {todoFactory, showTodo} from "./todo";

const projectFactory = (name, description, todos) => {
    const removeTodo = (purgedTodo) => {
        var index = todos.indexOf(purgedTodo);
        if (index != -1){
            todos.splice(index, 1);
        }
    };
    const addTodo = (myName, myDescription, myDate) => {
        var newTodo = todoFactory(name, myDescription, myDate);
    };
    return {name, description, todos};
};

function showProject(project){
    const projectTab = document.getElementById("projectTab");
    const projName = document.createElement("div");
    projName.classList.add("projectName");
    projName.textContent = project.name;
    projectTab.appendChild(projName);
    const projDesc = document.createElement("div");
    projDesc.classList.add("projectDescription");
    projDesc.textContent = project.description;
    projectTab.appendChild(projDesc);
    for (var i = 0; i < project.todos.length; i++){
        console.log("creating... " + project.todos[i].name);
        const todoItem = document.createElement("div");
        todoItem.classList.add("projectTodo");
        todoItem.textContent = project.todos[i].name + " | " + project.todos[i].dueDate;
        console.log(project.todos[i].name);
        todoItem.addEventListener("click", function (e){
            console.log(e.target);
        });
        projectTab.appendChild(todoItem);
    }
}

export {showProject, projectFactory};