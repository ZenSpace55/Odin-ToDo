import { divide } from "lodash";
import {todoFactory, showTodo, editTodo} from "./todo";
import {format, compareAsc} from 'date-fns';

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

function makeNewTodo(project){
    console.log("new todo here");
    let newTodo = todoFactory();
    newTodo.dueDate = format(new Date(), 'MMM dd yyyy');
    editTodo(newTodo, project);
}

function showProject(project){
    const projectTab = document.getElementById("projectTab");
    while(projectTab.firstChild){
        projectTab.removeChild(projectTab.firstChild);
    }
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
    const newSVG = document.createElement("div");
    newSVG.classList.add("grow");
    newSVG.addEventListener("click", function() {
        makeNewTodo(project);
    });
    newSVG.style.marginLeft = "auto";
    newSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white"><path d="M22.3 38.2V25.7H9.8v-3.4h12.5V9.8h3.4v12.5h12.5v3.4H25.7v12.5Z"/></svg>`;
    projectTab.appendChild(newSVG);
}

export {showProject, projectFactory};