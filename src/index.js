import renderUI from './renderUi.js';
import "./style.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";


library.add(faCircleCheck);
dom.watch();

renderUI();