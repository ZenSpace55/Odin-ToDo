function ShowToday(){

}

function ShowUpcoming(){

}

function makeNewProject(){
    console.log("new project here");
}

let allProjects = [];

function buildList(){
    const sideBar = document.getElementById("sideBar");
    const todayProj = document.createElement("div");
    todayProj.classList.add("sidebarHeader");
    todayProj.textContent = "Today";
    todayProj.addEventListener("click", function(){
        ShowToday(todo, currentProject)
    });
    sideBar.appendChild(todayProj);

    const weekProj = document.createElement("div");
    weekProj.classList.add("sidebarHeader");
    weekProj.textContent = "Upcoming";
    weekProj.addEventListener("click", function(){
        ShowUpcoming(todo, currentProject)
    });
    sideBar.appendChild(weekProj);

    const projectHead = document.createElement("div");
    //projectHead.classList.add("sideBarHeader");
    projectHead.textContent = "Projects:";
    projectHead.addEventListener("click", function(){
        makeNewProject();
    });
    sideBar.appendChild(projectHead);
    console.log("making project tabs");
    for (let i = 0; i < allProjects.length; i++){
        const myProject = document.createElement("div");
        myProject.textContent = allProjects[i].name;
        myProject.classList.add("smallProjectName");
        projectHead.appendChild(myProject);
    }
}

export {buildList, allProjects};