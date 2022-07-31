function buildList(){
    const sideBar = document.getElementById("sideBar");
    const todayProj = document.createElement("div");
    todayProj.classList.add("sideBarHeader");
    todayProj.textContent = "Today";
    sideBar.appendChild(todayProj);
}

export default buildList;