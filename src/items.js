const Itemsfactory = (title, description, dueDate, priority) => {
  let checklist = false;
  return { title, description, dueDate, priority, checklist };
};

let projectList = [];
let someitem = Itemsfactory(
  "something to do",
  "what do i want do do?",
  "when do i need to get it done by?",
  "How bad do i need to get it done?"
);
projectList.push(someitem);
const FormButton = () => {
  const container = document.querySelector("#container");
  const btn = document.querySelector("#form-btn");
  console.log("i'm here");
  btn.addEventListener("click", (e) => {
    console.log("wowza");
    const flex = document.createElement("div");
    let form = document.createElement("form");
    let title = document.createElement("input");
    title.setAttribute("id", "title");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "title");
    let desc = document.createElement("input");
    desc.setAttribute("id", "description");
    desc.setAttribute("type", "text");
    desc.setAttribute("name", "description");
    desc.setAttribute("placeholder", "description");
    let due = document.createElement("input");
    due.setAttribute("id", "due-date");
    due.setAttribute("type", "text");
    due.setAttribute("name", "Due date");
    due.setAttribute("placeholder", "Due date");
    let prior = document.createElement("input");
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
      AddToItems(
        title.innerHTML,
        desc.innerHTML,
        due.innerHTML,
        prior.innerHTML
      );
      console.log(projectList);
    });
  });
};

const AddToItems = (title_inp, description_inp, dueDate_inp, priority_inp) => {
  const item = Itemsfactory(
    title_inp,
    description_inp,
    dueDate_inp,
    priority_inp
  );
  projectList.push(item);
};
export { AddToItems, projectList };
