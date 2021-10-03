import { defaultList } from "./tasks.js";
import { getList, storeSingle, storeProjects, getProjects } from "./storage.js";

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.title;
  }
  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }
  getTaskbyDiscr(taskName) {
    let found = this.tasks.find((task) => task.description == taskName);
    return found;
  }
  getTaskbyDate(taskName) {
    let found = this.tasks.find((task) => task.dueDate == taskName);
    return found;
  }
  getTaskbyPrior(taskName) {
    let found = this.tasks.find((task) => task.priority == taskName);
    return found;
  }
  getTask(taskName) {
    let found = this.tasks.find((task) => task.title == taskName);
    return found;
  }
  addTask(newTask) {
    //if (this.tasks.find((task) => task.getName() === newTask.name)) return;
    this.tasks.push(newTask);
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.title !== taskName);
  }
}
let projectsList = [];
const createDefault = () => {
  let defaultProject = new Project("Some-stuff");
  defaultProject.setTasks(defaultList);
  projectsList.push(defaultProject);
  storeSingle(defaultProject);
  console.log(localStorage);
};
const AddProject = (name, tasks) => {
  let retrievedProjects = getProjects();
  let project = new Project(name);
  project.setTasks(tasks);
  projectsList.push(project);

  storeSingle(project);
};
const AddTasky = (project, newTask) => {
  if (project.tasks.find((task) => task.getName() === newTask.name)) return;
  project.tasks.push(newTask);
};
//const CheckStore=()=>{
// listofnums=['']
//if(localStorage.getItem("project"))
//}
//if (localStorage.getItem("project") === null) {
///storeProjects(projectsList);
//}
export { createDefault, projectsList, AddProject, AddTasky };
