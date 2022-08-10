import "./styles.css";
import pageLoad from "./pageLoad";
import buildList from "./projectList";
import {projectFactory, showProject} from "./project";
import {showTodo, todoFactory} from "./todo";
import {format, compareAsc} from 'date-fns';

pageLoad();
buildList();

var currentProject;
var daysProject;
var upcomingProject;
var allProjects;
var myTodos;

console.log(todoFactory.toString());
console.log("making todo");
const todo1 = todoFactory("Walk the dog", "Take Gabbers for a walk.", format(new Date(), 'yyyy-MM-dd'));
const todo2 = todoFactory("Make dinner", "Make a pot of chili", format(new Date(), 'yyyy-MM-dd'));
myTodos = [todo1, todo2];
currentProject = projectFactory("Test Project", "A cool project.", myTodos);
showProject(currentProject);
showTodo(todo1);

export {currentProject};