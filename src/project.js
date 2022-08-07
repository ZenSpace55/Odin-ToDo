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

function createTodo(project, i){
    console.log(project.todos[i].name);
    //let todoArea = document.getElementById("todoArea");
    //todoArea.textContent = project.todos[i].description;
    showTodo(project.todos[i]);
}

function toggleComplete(){
    console.log("hello");
}

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
        let todoItem = document.createElement("div");
        todoItem.classList.add("projectTodo");
        let todoCheck = document.createElement("input");
        todoCheck.setAttribute("type", "checkbox");
        todoCheck.addEventListener("event", toggleComplete());
        let todoName = document.createElement("div");
        todoName.textContent = project.todos[i].name;
        let todoDate = document.createElement("div");
        todoDate.textContent = project.todos[i].dueDate;
        //todoItem.textContent = project.todos[i].name + " | " + project.todos[i].dueDate;
        console.log(project.todos[i].name);
        console.log("i = " + i);
        todoItem.id = i;
        todoItem.addEventListener("click", function() {
            console.log("i = " + i);
            console.log(this);
            if (document.querySelector(".activeTodo")){
                document.querySelector(".activeTodo").classList.toggle("activeTodo");
            }
            this.classList.toggle("activeTodo");
            createTodo(project, this.id);
        });
        todoItem.appendChild(todoCheck);
        todoItem.appendChild(todoName);
        todoItem.appendChild(todoDate);
        projectTab.appendChild(todoItem);
    }
}

export {showProject, projectFactory};