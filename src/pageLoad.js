function loadPage(){
    const content = document.getElementById("content");
    content.classList.add("content");
    const sideBar = document.createElement("div");
    sideBar.id = "sideBar";
    sideBar.classList.add("sidebar");
    content.appendChild(sideBar);
    const projectTab = document.createElement("div");
    projectTab.id = "projectTab";
    projectTab.classList.add("projectTab");
    content.appendChild(projectTab);
    const todoArea = document.createElement("div");
    todoArea.id = "todoArea";
    todoArea.classList.add("todoArea");
    content.appendChild(todoArea);
}

export default loadPage;