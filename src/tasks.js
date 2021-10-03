import { storeList, getList } from "./storage.js";
import Project from "./projects.js";
import { AddTasky } from "./projects.js";
import { RemoveProject, getProjectbyName, storeSingle } from "./storage.js";
import { GetCurr } from "./display.js";

const Taskfactory = (title, description, dueDate, priority) => {
  let checklist = false;
  return { title, description, dueDate, priority, checklist };
};

let defaultList = [];
let someitem = Taskfactory(
  "something to do",
  "what do i want do do?",
  "when do i need to get it done by?",
  "How bad do i need to get it done?"
);
defaultList.push(someitem);

//if (localStorage.getItem("list") === null) {
//  storeList(defaultList);
//}

console.log(localStorage);
const AddToItems = (title_inp, description_inp, dueDate_inp, priority_inp) => {
  const retrievedArray = getList();
  const item = Taskfactory(
    title_inp,
    description_inp,
    dueDate_inp,
    priority_inp
  );

  retrievedArray.push(item);
  storeList(retrievedArray);
  console.log(localStorage);
};
const CreateTask = (title_inp, description_inp, dueDate_inp, priority_inp) => {
  const item = Taskfactory(
    title_inp,
    description_inp,
    dueDate_inp,
    priority_inp
  );
  return item;
};
const AddTasks = (project_name, task) => {
  const project = getProjectbyName(project_name);
  let new_project = new Project(project_name);
  new_project.setTasks(project.tasks);
  new_project.addTask(task);
  RemoveProject(project_name);
  storeSingle(new_project);
};
const RenameTask = (old_tname, new_tname) => {
  let project_name = GetCurr();
  const current = getProjectbyName(project_name);

  let new_project = new Project(project_name);
  new_project.setTasks(current.tasks);
  console.log(new_project);
  const old_task = new_project.getTask(old_tname);
  console.log(old_task);
  let new_task = CreateTask(
    new_tname,
    old_task.description,
    old_task.dueDate,
    old_task.priority
  );
  new_project.deleteTask(old_tname);
  new_project.addTask(new_task);
  RemoveProject(project_name);
  storeSingle(new_project);
  console.log(localStorage);
};
const ChangeDate = (task_name, new_date) => {
  let project_name = GetCurr();
  const current = getProjectbyName(project_name);

  let new_project = new Project(project_name);
  new_project.setTasks(current.tasks);

  const old_task = new_project.getTaskbyDate(task_name);
  console.log(old_task);
  let new_task = CreateTask(
    old_task.title,
    old_task.description,
    new_date,
    old_task.priority
  );
  new_project.deleteTask(old_tname);
  new_project.addTask(new_task);
  RemoveProject(project_name);
  storeSingle(new_project);
};
const ChangePriority = (task_name, new_prior) => {
  let project_name = GetCurr();
  const current = getProjectbyName(project_name);

  let new_project = new Project(project_name);
  new_project.setTasks(current.tasks);

  const old_task = new_project.getTaskbyPrior(task_name);
  console.log(old_task);
  let new_task = CreateTask(
    old_task.title,
    old_task.description,
    old_task.dueDate,
    new_prior
  );
  new_project.deleteTask(old_tname);
  new_project.addTask(new_task);
  RemoveProject(project_name);
  storeSingle(new_project);
};
const ChangeDescription = (task_name, new_description) => {
  let project_name = GetCurr();
  const current = getProjectbyName(project_name);

  let new_project = new Project(project_name);
  new_project.setTasks(current.tasks);

  const old_task = new_project.getTaskbyDiscr(task_name);
  console.log(old_task);

  let new_task = CreateTask(
    old_task.title,
    new_description,
    old_task.dueDate,
    old_task.priority
  );
  new_project.deleteTask(old_task.title);
  new_project.addTask(new_task);
  RemoveProject(project_name);
  storeSingle(new_project);
};
export {
  AddToItems,
  defaultList,
  AddTasks,
  CreateTask,
  RenameTask,
  ChangeDate,
  ChangePriority,
  ChangeDescription,
};
