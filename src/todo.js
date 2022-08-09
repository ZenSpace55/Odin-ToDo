import { projectFactory } from "./project";

const todoFactory = (name, description, dueDate) => {
    console.log(name + " created");
    return {name, description, dueDate};
};

function showTodo(todo){
    console.log(todo.toString());
    const todoArea = document.getElementById("todoArea");
    while(todoArea.firstChild){
        todoArea.removeChild(todoArea.firstChild);
    }
    const todoPanel = document.createElement("div");
    todoPanel.classList.add("todoPanel");
    todoArea.appendChild(todoPanel);

    let todoName = document.createElement("div");
    todoName.classList.add("todoChild");
    todoName.style.fontSize = "2em";
    todoName.textContent = todo.name;
    let todoDate = document.createElement("div");
    todoDate.classList.add("todoChild");
    todoDate.style.marginLeft = "2em";
    todoDate.style.fontSize = "1.5em";
    todoDate.textContent = todo.dueDate;
    let todoDescription = document.createElement("div");
    todoDescription.style.marginTop = "2em";
    todoDescription.classList.add("todoChild");
    todoDescription.textContent = todo.description;
    todoPanel.appendChild(todoName);
    todoPanel.appendChild(todoDate);
    todoPanel.appendChild(todoDescription);
}

function editTodo(todo){
    const todoArea = document.getElementById("todoArea");
    while(todoArea.firstChild){
        todoArea.removeChild(todoArea.firstChild);
    }
    const todoPanel = document.createElement("div");
    todoPanel.classList.add("todoPanel");
    todoArea.appendChild(todoPanel);

    let todoForm = document.createElement("form");
    todoForm.action = "";
    todoForm.method = "get";

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("flexColumn");
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.style.maxWidth = "150px";
    nameInput.id = "todoName";
    nameInput.defaultValue = "Name";
    nameInput.required = true;
    let nameLabel = document.createElement("label");
    nameLabel.textContent = "Name your Todo:"
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);

    let dateDiv = document.createElement("div");
    dateDiv.style.paddingTop = ".5em";
    let dateLabel = document.createElement("label");
    dateLabel.htmlFor = "todoDate";
    dateLabel.textContent = "Due Date:"
    let dateInput = document.createElement("input");
    dateInput.id = "todoDate";
    dateInput.type = "date";
    dateInput.required = true;
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);

    let descriptionDiv = document.createElement("div");
    descriptionDiv.style.paddingTop = "2em";
    descriptionDiv.classList.add("flexColumn");
    descriptionDiv.innerHTML = `<label for="descriptionBox">Describe your Todo:</label>
    <textarea id="descriptionBox" style="max-width: 400px" rows="6"></textarea>
    `;
    

    todoPanel.appendChild(nameDiv);
    todoPanel.appendChild(dateDiv);
    todoPanel.appendChild(descriptionDiv);

}

export {todoFactory, showTodo, editTodo};