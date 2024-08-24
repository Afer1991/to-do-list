class Project {
  constructor(name) {
    this.name = name;
  }
}

const addProject = (arr) => {
  const projectContainer = document.querySelector(".project-container");
  const projectName = document.getElementById("project-name");
  const newProject = new Project(projectName.value);
  
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project-div");
  projectContainer.appendChild(projectDiv);

  projectDiv.innerHTML = `<div><i class="fas fa-list"></i><span>${newProject.name}</span></div><i class="fas fa-xmark"></i>`;
  arr.push(newProject);
};

export { Project, addProject };