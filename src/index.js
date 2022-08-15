import "./styles.css";
import pageLoad from "./pageLoad";
import {buildList, allProjects} from "./projectList";
import {projectFactory, showProject} from "./project";
import {showTodo, todoFactory} from "./todo";
import {format, compareAsc} from 'date-fns';
import {default as moment, Moment} from 'moment'

pageLoad();


var currentProject;
var daysProject;
var upcomingProject;
var myTodos;

console.log(todoFactory.toString());
console.log("making todo");
currentProject = projectFactory("Test Project", "A cool project.");
const todo1 = todoFactory("Walk the dog", "Take Gabbers for a walk.", new Date(), currentProject);
const todo2 = todoFactory("Make dinner", "Make a pot of chili", new Date(), currentProject);
const todo3 = todoFactory("Clear Room", "Tidy up the room", new Date(), currentProject);
//myTodos = [todo1, todo2, todo3];
//currentProject = projectFactory("Test Project", "A cool project.", myTodos);
currentProject.addTodo(todo1);
currentProject.addTodo(todo2);
currentProject.addTodo(todo3);
//todo1.addToProject();
//todo2.addToProject();
//todo3.addToProject();
allProjects.push(currentProject);
//allProjects.push(currentProject);
console.log("Current todo count: " + currentProject.todos.length);
console.log("First todo name " + currentProject.todos[0].name);
console.log(todo1.project.name + " my first project");

buildList();
showProject(currentProject);
//showTodo(todo1);

export {currentProject};