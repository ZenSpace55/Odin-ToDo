import { divide } from "lodash";
import {todoFactory, showTodo, editTodo} from "./todo";
import {format, compareAsc} from 'date-fns';
import {default as moment, Moment} from 'moment';
import { buildList, allProjects } from "./projectList";

const projectFactory = (name, description) => {
    const todos = [];
    let removeTodo = (purgedTodo) => {
        todos.splice(todos.indexOf(purgedTodo), 1);
    };
    const addTodo = (todo) => {
        todos.push(todo);
    };
    return {name, description, todos, removeTodo, addTodo};
};

function displayTodo(project, i){
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

function showProject(project, displayOnly){
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
        todoDate.textContent = moment(project.todos[i].dueDate).format('MMM Do, YYYY');
        //todoItem.textContent = project.todos[i].name + " | " + project.todos[i].dueDate;
        //console.log(project.todos[i].name);
        //console.log("i = " + i);
        todoItem.id = i;
        todoItem.addEventListener("click", function() {
            console.log("i = " + i);
            console.log(this);
            if (document.querySelector(".activeTodo")){
                document.querySelector(".activeTodo").classList.toggle("activeTodo");
            }
            todoItem.classList.toggle("activeTodo");
            displayTodo(project, this.id);
        });
        todoItem.appendChild(todoCheck);
        todoItem.appendChild(todoName);
        todoItem.appendChild(todoDate);
        projectTab.appendChild(todoItem);
        if (i == 0){
            todoItem.classList.toggle("activeTodo");
            showTodo(project.todos[0]);
        }
    }

    if (!displayOnly){
        const newSVG = document.createElement("div");
        newSVG.classList.add("grow");
        newSVG.addEventListener("click", function() {
            makeNewTodo(project);
        });
        newSVG.style.marginLeft = "auto";
        newSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white"><path d="M22.3 38.2V25.7H9.8v-3.4h12.5V9.8h3.4v12.5h12.5v3.4H25.7v12.5Z"/></svg>`;
        projectTab.appendChild(newSVG);

        let editButton = document.createElement("button");
        editButton.textContent = "Edit Project";
        editButton.addEventListener("click", function(){
            editProject(project);
        });
        projectTab.appendChild(editButton);
    }
}

function confirmProject(project){

    if (!project){
        project = projectFactory(document.querySelector("#projName").value, document.querySelector("#projDescriptionBox").value);
        allProjects.push(project);
    }
    else{
        project.name = document.querySelector("#projName").value;
        project.description = document.querySelector("#projDescriptionBox").value;
    }
    const projectTab = document.getElementById("projectTab");
    while(projectTab.firstChild){
        projectTab.removeChild(projectTab.firstChild);
    }

    buildList();
    showProject(project);
}

function editProject(project){
    const todoTab = document.querySelector("#todoArea");
    while(todoTab.firstChild){
        todoTab.removeChild(todoTab.firstChild);
    }

    const projectTab = document.getElementById("projectTab");
    while(projectTab.firstChild){
        projectTab.removeChild(projectTab.firstChild);
    }

    let projectForm = document.createElement("form");
    projectForm.action = "";
    projectForm.method = "get";

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("flexColumn");
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.style.maxWidth = "150px";
    nameInput.id = "projName";
    nameInput.defaultValue = "Name";
    nameInput.required = true;
    let nameLabel = document.createElement("label");
    nameLabel.textContent = "Name your Project:"
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);

    let descriptionDiv = document.createElement("div");
    descriptionDiv.style.paddingTop = "2em";
    descriptionDiv.classList.add("flexColumn");
    descriptionDiv.innerHTML = `<label for="projDescriptionBox" class="flexColumn">Describe your Project:</label>
    <textarea id="projDescriptionBox" style="max-width: 200px" rows="6"></textarea>
    `;

    let confirmButton = document.createElement("button");
    confirmButton.textContent = "Confirm";
    confirmButton.addEventListener("click", function(){
        confirmProject(project);
    });

    projectTab.appendChild(nameDiv);
    projectTab.appendChild(descriptionDiv);
    projectTab.appendChild(confirmButton);

    if (project){
        document.getElementById("projDescriptionBox").value = project.description;
        nameInput.defaultValue = project.name;
    }
}

export {showProject, projectFactory, editProject};