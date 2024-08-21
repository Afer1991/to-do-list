import renderUI from './renderUI.js';
import "./style.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import addProject from './addProject.js';


library.add(faCircleCheck);
library.add(faPlus);
dom.watch();

renderUI();

const addPrjctBtn = document.getElementById("add-project");
const prjctModal = document.getElementById("project-modal");

addPrjctBtn.addEventListener("click", () => {
  prjctModal.showModal();
});