import renderUI from './renderUI.js';
import "./style.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faCircle } from "@fortawesome/free-regular-svg-icons/faCircle";
import { addProject, renderProject, renderToDoList } from './addProject.js';


library.add(faCircleCheck);
library.add(faPlus);
library.add(faList);
library.add(faXmark);
library.add(faCircle);
dom.watch();

renderUI();

const defaultProject = {
  name: "Build Shack",
  todos: [
    {
      title: "Buy Materials",
      description: "Budget: $10,000",
      dueDate: "2024-08-31",
      priority: "2",
    }
  ],
};

const projectList = [defaultProject];

const projectContainer = document.querySelector(".project-container");
const addPrjctBtn = document.getElementById("add-project");
const prjctModal = document.getElementById("project-modal");
const prjctForm = document.getElementById("project-form");

const projectDiv = document.createElement("div");
projectDiv.classList.add("project-div");
projectContainer.appendChild(projectDiv);

projectDiv.innerHTML = `<div><i class="fas fa-list"></i><span>${defaultProject.name}</span></div><i class="fas fa-xmark"></i>`;

projectDiv.addEventListener("click", () => {
  renderProject(defaultProject);
  renderToDoList(defaultProject);
});

addPrjctBtn.addEventListener("click", () => {
  prjctModal.showModal();
});

prjctForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addProject(projectList);
  prjctForm.reset();
  prjctModal.close();
});

prjctForm.addEventListener("reset", () => {
  prjctModal.close();
});

renderProject(defaultProject);
renderToDoList(defaultProject);