function buildList(){
    const sideBar = document.getElementById("sideBar");
    const todayProj = document.createElement("div");
    todayProj.classList.add("sideBarHeader");
    todayProj.textContent = "Today";
    sideBar.appendChild(todayProj);
    const weekProj = document.createElement("div");
    weekProj.classList.add("sideBarHeader");
    weekProj.textContent = "This Week";
    sideBar.appendChild(weekProj);
    const monthProj = document.createElement("div");
    monthProj.classList.add("sideBarHeader");
    monthProj.textContent = "This Month";
    sideBar.appendChild(monthProj);
}

export default buildList;