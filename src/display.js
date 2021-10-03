import {
  defaultList,
  AddToItems,
  AddTasks,
  CreateTask,
  RenameTask,
  ChangeDate,
  ChangePriority,
  ChangeDescription,
} from "./tasks.js";
import {
  getList,
  getProjects,
  getDefault,
  getProjectbyName,
  RemoveProject,
  storeSingle,
} from "./storage.js";
import { projectsList, AddProject } from "./projects.js";
import Project from "./projects.js";

const DisplayProject = (name) => {
  //if (project_name == "somestuff") {
  //}
  const container = document.querySelector("#container");
  const table = document.querySelector("table");
  const project = getProjectbyName(name);

  for (let item in project.tasks) {
    const row = table.insertRow();
    row.classList.add("tr");
    let title = row.insertCell(0);
    title.innerHTML = project.tasks[item].title;
    title.classList.add("label");
    let description = row.insertCell(1);
    description.innerHTML = project.tasks[item].description;
    let due = row.insertCell(2);
    due.innerHTML = project.tasks[item].dueDate;
    let priority = row.insertCell(3);
    priority.innerHTML = project.tasks[item].priority;
    let checklist = row.insertCell(4);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("check-box");
    checkbox.innerHTML = " ";
    checklist.appendChild(checkbox);
  }
};
const DisplayIf = (project) => {
  if (!project) {
    DisplayProject("Some-stuff");
    AddBtns();
  } else {
    const curr_project = getProjectbyName(project);
    let len = curr_project.tasks.length;
    const rows = document.querySelectorAll(".tr");
    rows.forEach((row) => {
      console.log(row);
      row.remove();
    });
    DisplayProject(curr_project.name);
    AddBtns();

    //get current len
    //delete apropriete amout of rows
  }
};

const TaskFormButton = () => {
  const container = document.querySelector("#container");
  const btn = document.querySelector("#form-btn");
  console.log("i'm here");
  btn.addEventListener("click", (e) => {
    btn.classList.add("create");
    let check = document.querySelector("#task-form");
    if (container.contains(check) == false) {
      console.log("wowza");
      const flex = document.createElement("div");
      let form = document.createElement("form");
      form.setAttribute("id", "task-form");
      let title = document.createElement("input");
      title.classList.add("input");
      title.setAttribute("id", "title");
      title.setAttribute("type", "text");
      title.setAttribute("name", "title");
      title.setAttribute("placeholder", "title");
      let desc = document.createElement("input");
      desc.classList.add("input");
      desc.setAttribute("id", "description");
      desc.setAttribute("type", "text");
      desc.setAttribute("name", "description");
      desc.setAttribute("placeholder", "description");
      let due = document.createElement("input");
      due.classList.add("input");
      due.setAttribute("id", "due-date");
      due.setAttribute("type", "text");
      due.setAttribute("name", "Due date");
      due.setAttribute("placeholder", "Due date");
      let prior = document.createElement("input");
      prior.classList.add("input");
      prior.setAttribute("id", "priority");
      prior.setAttribute("type", "text");
      prior.setAttribute("name", "priority");
      prior.setAttribute("placeholder", "priority");
      let submit = document.createElement("input");

      submit.setAttribute("type", "submit");
      submit.setAttribute("value", "Submit");
      container.appendChild(flex);
      flex.appendChild(form);
      form.appendChild(title);
      form.appendChild(desc);
      form.appendChild(due);
      form.appendChild(prior);
      form.appendChild(submit);
      submit.addEventListener("click", (e) => {
        const p = document.querySelector(".current");
        let proj_name = p.innerHTML;
        const item = CreateTask(
          title.value,
          desc.value,
          due.value,
          prior.value
        );
        AddTasks(proj_name, item);
      });
    }
  });
};

const projectsMenu = () => {
  //const container=document.querySelector("#container");
  const container = document.querySelector("#projects-menu");

  const grid = document.createElement("ul");
  grid.classList.add("project-grid");
  const retrievedProjects = getProjects();
  console.log(retrievedProjects);
  for (let project in retrievedProjects) {
    const box = document.createElement("li");
    box.classList.add("list-name");
    box.innerHTML = retrievedProjects[project].name;
    const view = document.createElement("button");
    view.setAttribute("name", retrievedProjects[project].name);

    view.innerHTML = "View";
    view.classList.add("view-btn");
    view.addEventListener("click", View);
    // const add=document.createElement('button')
    grid.appendChild(box);
    grid.appendChild(view);
  }
  container.appendChild(grid);
};
const View = (e) => {
  let name = e.target.name;
  console.log(name);
  CurrentProject(name);
  DisplayIf(name);

  displaynew = true;
};

const createProjectBtn = () => {
  const container = document.querySelector("#projects-menu");
  const btn = document.createElement("button");
  btn.innerHTML = "+";
  btn.classList.add("project-btn");
  btn.addEventListener("click", (e) => {
    btn.classList.add("create");
    let form = document.createElement("form");
    form.classList.add("project-form");
    let name = document.createElement("input");
    name.classList.add("input");

    name.setAttribute("id", "name");
    name.setAttribute("type", "text");
    name.setAttribute("name", "name");
    name.setAttribute("placeholder", "project's name");
    name.classList.add("project-inpt");
    let submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.addEventListener("click", (e) => {
      let tasks = [];
      if (!name.value) {
        alert("You have to name the project!");
        return;
      }
      AddProject(name.value, tasks);
    });
    form.appendChild(name);
    form.appendChild(submit);
    container.appendChild(form);
  });
  container.appendChild(btn);
};
const MenuApear = () => {
  const p = document.querySelector("#projects-title");
  const grid = document.querySelectorAll(".project-grid");
  if (grid.length === 0) {
    p.addEventListener("click", (e) => {
      createProjectBtn();
      projectsMenu();
    });
  }
};
const CurrentProject = (title) => {
  const p = document.querySelector(".current");
  p.innerHTML = title;
};
const AddBtns = () => {
  const container = document.querySelector("#container");
  const rows = container.querySelectorAll("tr");
  const current = GetCurr();
  const curr_project = getProjectbyName(current);
  let new_project = new Project(current);
  new_project.setTasks(curr_project.tasks);
  console.log(new_project);
  rows.forEach((row, index) => {
    if (index > 0) {
      //create new objec get shit from that
      //let name = new_project.tasks[index - 1].title;
      let name = new_project.tasks[index - 1].title;
      console.log(name);
      let btn_div = document.createElement("div");
      btn_div.classList.add("btn-div");
      let edit_btn = document.createElement("button");
      edit_btn.classList.add("edit-btn");
      edit_btn.innerHTML = "EDIT";
      edit_btn.addEventListener("click", Edit.bind(this, row));
      //console.log(name);
      let btn = document.createElement("button");
      btn.classList.add("del-btn");
      btn.innerHTML = "DELETE";
      btn.addEventListener("click", (e) => {
        new_project.deleteTask(name);
        RemoveProject(current);
        storeSingle(new_project);
        DisplayIf(new_project.name);
      });

      btn_div.appendChild(btn);
      btn_div.appendChild(edit_btn);
      row.append(btn_div);
    }
  });
};

const Edit = function (row) {
  const ChooseAction = (e) => {
    e.target.removeEventListener("click", ChooseAction);
    if (e.target.getAttribute("data-idx") == 4) {
      IfChecked();
      return;
    }

    let input = document.createElement("input");
    input.classList.add("input");
    let placeholder = e.target.innerHTML;
    input.setAttribute("placeholder", `"${placeholder}"`);
    input.setAttribute("type", "text");
    input.classList.add("inpt-edit");
    input.setAttribute("data-idx", e.target.getAttribute("data-idx"));

    e.target.appendChild(input);
    const btn = document.createElement("input");
    btn.setAttribute("type", "submit");
    console.log("kill me");
    let indx = e.target.getAttribute("data-idx");
    console.log(indx);

    btn.setAttribute("data-idx", indx);
    let inside_result = e.target.innerHTML;
    let results = inside_result.split("<");
    let the_name = results[0];
    btn.innerHTML = "SUBMIT CHANGES";
    btn.classList.add("edit-btn-submit");
    e.target.appendChild(btn);

    btn.addEventListener("click", (event) => {
      console.log("give it to me");
      let inputs = document.querySelectorAll(".inpt-edit");
      let listOfinputs = [...inputs];
      console.log(event.target.getAttribute("data-idx"));
      let current = GetCurr();
      if (event.target.getAttribute("data-idx") == 0) {
        const found0 = listOfinputs.find(
          (inpt) => inpt.getAttribute("data-idx") == 0
        );
        if (!found0.value) {
          alert("You have to type something in!");
        }
        console.log(the_name);
        console.log(found0.value);
        RenameTask(the_name, found0.value);

        DisplayIf(current);
      }
      if (e.target.getAttribute("data-idx") == 1) {
        const found1 = listOfinputs.find(
          (inpt) => inpt.getAttribute("data-idx") == 1
        );
        if (!found1.value) {
          alert("You have to type something in!");
        }
        console.log(found1.value);
        console.log(the_name);
        ChangeDescription(the_name, found1.value);
        DisplayIf(current);
      }
      if (e.target.getAttribute("data-idx") == 2) {
        const found2 = listOfinputs.find(
          (inpt) => inpt.getAttribute("data-idx") == 2
        );
        if (!found2.value) {
          alert("You have to type something in!");
        }
        console.log(found2.value);
        ChangeDate(the_name, found2.value);
        DisplayIf(current);
      }
      if (e.target.getAttribute("data-idx") == 3) {
        const found3 = listOfinputs.find(
          (inpt) => inpt.getAttribute("data-idx") == 3
        );
        if (!found3.value) {
          alert("You have to type something in!");
        }
        console.log(found3.value);
        ChangePriority(the_name, found3.value);
        DisplayIf(current);
      }
    });
  };

  for (var j = 0, col; (col = row.cells[j]); j++) {
    col.setAttribute("data-idx", j);
    col.addEventListener("click", ChooseAction);
  }
  //if (e.target.getAttribute("data-idx") == 4) {
  // const checkbox = document.querySelector(".check-box");
  //  const check_stem = document.createElement("div");
  // check_stem.classList.add("check-stem");
  //  const check_kick = document.createElement("div");
  // check_kick.classList.add("check-kick");
  // checkbox.appendChild(check_stem);
  //checkbox.appendChild(check_kick);
  //}

  // const submit=document.createElement('input')
  // submit.setAttribute("type", 'submit');
  // submit.innerHTML=" Comit Changes";
};

const GetCurr = () => {
  const p = document.querySelector(".current");
  const current = p.innerHTML;
  return current;
};
const IfChecked = () => {
  const checkboxes = document.querySelectorAll(".check-box");
  const td = document.querySelectorAll("td");
  checkboxes.forEach((box) => {
    if (box.checked) {
      td.forEach((td) => {
        td.classList.add("checked");
      });
    }
  });
};

export {
  TaskFormButton,
  createProjectBtn,
  projectsMenu,
  MenuApear,
  CurrentProject,
  DisplayIf,
  AddBtns,
  GetCurr,
  IfChecked,
};
