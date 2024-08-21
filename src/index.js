import renderUI from './renderUi.js';
import "./style.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";


library.add(faCircleCheck);
library.add(faPlus);
dom.watch();

renderUI();