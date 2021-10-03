import * as itemsModule from "./tasks.js";
import { createDefault, projectsList } from "./projects.js";
import { defaultList } from "./tasks";
import {
  TaskFormButton,
  createProjectBtn,
  projectsMenu,
  MenuApear,
  CurrentProject,
  DisplayIf,
  AddRemoveBtn,
  DisplayForm,
  IfChecked,
} from "./display.js";
import {
  storeSingle,
  storeProjects,
  getProjects,
  getProjects2,
  RemoveProject,
} from "./storage.js";
import "./style.css";

TaskFormButton();
IfChecked();
//createDefault();
DisplayIf();
//storeSingle(projectsList);
//storeProjects(projectsList);
MenuApear();

CurrentProject("Some-stuff");
