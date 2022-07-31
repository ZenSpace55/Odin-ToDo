import "./styles.css";
import pageLoad from "./pageLoad";
import buildList from "./projectList";
import {projectFactory, showProject} from "./project";

pageLoad();
buildList();

var currentProject;
var daysProject;
var upcomingProject;
var allProjects;

currentProject = projectFactory("Test Project", "A cool project.", []);
showProject(currentProject);