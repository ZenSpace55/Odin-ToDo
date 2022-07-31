function loadPage(){
    const content = document.getElementById("content");
    content.classList.add("content");
    const sideBar = document.createElement("div");
    sideBar.classList.add("sidebar");
    content.appendChild(sideBar);
    alert("page loaded");
}

export default loadPage;