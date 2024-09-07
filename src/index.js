import renderUI from './renderUI.js';
import "./style.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faCircle } from "@fortawesome/free-regular-svg-icons/faCircle";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { addProject, renderProject, renderToDoList, deleteProject, renderProjectList } from './addProject.js';


library.add(faCircleCheck);
library.add(faPlus);
library.add(faList);
library.add(faXmark);
library.add(faCircle);
library.add(faGithub);
dom.watch();

renderUI();

const defaultProject = {
  name: "Build Shack",
  todos: [
    {
      title: "Buy Materials",
      description: "Budget: $10,000",
      dueDate: "2024-08-31",
      priority: "Middle",
      complete: false,
    }
  ],
};

const project2 = {
  name: "Project 2",
  todos: [
    {
      title: "Buy Materials",
      description: "Budget: $10,000",
      dueDate: "2024-08-31",
      priority: "Middle",
      complete: false,
    }
  ],
};

const project3 = {
  name: "Project 3",
  todos: [
    {
      title: "Buy Materials",
      description: "Budget: $10,000",
      dueDate: "2024-08-31",
      priority: "Middle",
      complete: false,
    }
  ],
};

const projectList = JSON.parse(localStorage.getItem("data")) || [defaultProject, project2, project3];

const addPrjctBtn = document.getElementById("add-project");
const prjctModal = document.getElementById("project-modal");
const prjctForm = document.getElementById("project-form");

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

renderProjectList(projectList);
renderProject(projectList[0]);
renderToDoList(projectList[0]);