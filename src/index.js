import renderUI from './renderUI.js';
import "./style.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { Project, addProject } from './addProject.js';


library.add(faCircleCheck);
library.add(faPlus);
library.add(faList);
library.add(faXmark);
dom.watch();

renderUI();

const projectList = [];
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