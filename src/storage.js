const storeList = (list) => {
  localStorage.setItem("list", JSON.stringify(list));

  console.log(localStorage);
};
const getList = () => {
  let localArray = localStorage.getItem("list");

  let retrievedArray = JSON.parse(localArray);

  return retrievedArray;
};
const storeSingle = (project) => {
  let name = project.name;
  localStorage.setItem(name, JSON.stringify(project));
  console.log(localStorage);
};
const storeProjects = (projects) => {
  for (let i = 0; i < projects.length; i++) {
    localStorage.setItem(`"project${i}"`, JSON.stringify(projects[i]));
  }
  console.log(localStorage);
};
const getDefault = () => {
  let item = JSON.parse(localStorage.getItem("Some-stuff"));
  return item;
};
const getProjectbyName = (name) => {
  let item = JSON.parse(localStorage.getItem(name));
  return item;
};
const getProjects = () => {
  let retrievedProjects = [];
  let keys = Object.keys(localStorage);
  let i = keys.length;
  while (i--) {
    retrievedProjects.push(JSON.parse(localStorage.getItem(keys[i])));
  }

  return retrievedProjects;
};
const RemoveProject = (name) => {
  localStorage.removeItem(name);
};

export {
  storeList,
  getList,
  storeProjects,
  getProjects,
  storeSingle,
  getDefault,
  getProjectbyName,
  RemoveProject,
};
