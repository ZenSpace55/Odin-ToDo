import todoFactory from "./todo";

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
    projDesc.classList.add("projectName");
    projDesc.textContent = project.description;
    projectTab.appendChild(projDesc);
}

export {showProject, projectFactory};