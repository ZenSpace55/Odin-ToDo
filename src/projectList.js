import { editProject, showProject, projectFactory } from "./project";

function ShowToday(){
    let todayTodo = projectFactory("Today", "Due Today:");
    for (let i = 0; i < allProjects.length; i++){
        for (let x = 0; x < allProjects[i].todos.length; x++){
            if (allProjects[i].todos[x].dueDate == Date.now()){
                todayTodo.todos.push(allProjects[i].todos[x]);
            }
        }
    }
    showProject(todayTodo);
}

function ShowUpcoming(){
    let upcomingTodo = projectFactory("Upcoming", "Due Soon:");
    for (let i = 0; i < allProjects.length; i++){
        for (let x = 0; x < allProjects[i].todos.length; x++){
            if (allProjects[i].todos[x].dueDate == Date.now()){
                todayTodo.todos.push(allProjects[i].todos[x]);
            }
        }
    }
    showProject(upcomingTodo);
}

function makeNewProject(){
    console.log("new project here");
    editProject();
}

let allProjects = [];

function buildList(){
    const sideBar = document.getElementById("sideBar");
    while(sideBar.firstChild){
        sideBar.removeChild(sideBar.firstChild);
    }

    const todayProj = document.createElement("div");
    todayProj.classList.add("sidebarHeader");
    todayProj.textContent = "Today";
    todayProj.addEventListener("click", function(){
        ShowToday()
    });
    sideBar.appendChild(todayProj);

    const weekProj = document.createElement("div");
    weekProj.classList.add("sidebarHeader");
    weekProj.textContent = "Upcoming";
    weekProj.addEventListener("click", function(){
        ShowUpcoming()
    });
    sideBar.appendChild(weekProj);

    const projectHead = document.createElement("div");
    //projectHead.classList.add("sideBarHeader");
    projectHead.textContent = "Projects:";
    //projectHead.addEventListener("click", function(){
    //    makeNewProject();
    //});
    sideBar.appendChild(projectHead);
    console.log("making project tabs");
    for (let i = 0; i < allProjects.length; i++){
        const myProject = document.createElement("div");
        myProject.textContent = allProjects[i].name;
        myProject.classList.add("smallProjectName");
        myProject.addEventListener("click", function(){
            showProject(allProjects[i]);
            console.log("showing project");
        });
        projectHead.appendChild(myProject);
    }
    console.log("PROJECT COUNT" + allProjects.length);
    const projSVG = document.createElement("div");
    projSVG.classList.add("grow");
    projSVG.addEventListener("click", function() {
        makeNewProject();
    });
    projSVG.style.marginLeft = "auto";
    projSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white"><path d="M22.3 38.2V25.7H9.8v-3.4h12.5V9.8h3.4v12.5h12.5v3.4H25.7v12.5Z"/></svg>`;
    sideBar.appendChild(projSVG);
}

export {buildList, allProjects};