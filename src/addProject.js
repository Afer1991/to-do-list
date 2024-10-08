class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
}

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false;
  }
}

const addProject = (arr) => {
  const projectContainer = document.querySelector(".project-container");
  const projectName = document.getElementById("project-name");

  const newProject = new Project(projectName.value);

  const repeatName = arr.some(el => el.name === newProject.name);
  
  if (repeatName) {
    alert("Project names must be different");
  } else {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    projectContainer.appendChild(projectDiv);

    projectDiv.innerHTML = `<div>
                              <i class="fas fa-list"></i><span>${newProject.name}</span>
                            </div>
                            <button id="remove-project-${arr.length}"><i class="fas fa-xmark"></i></button>`;

    const removeProject = document.getElementById(`remove-project-${arr.length}`);

    removeProject.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteProject(removeProject, arr);
    });

    projectDiv.addEventListener("click", () => {
      renderProject(newProject, arr);
      renderToDoList(newProject, arr);
    });

    arr.push(newProject);
    projectDiv.dataset.id = arr.length - 1;
    localStorage.setItem("data", JSON.stringify(arr));
  };
};

const renderProjectList = (arr) => {
  const projectContainer = document.querySelector(".project-container");

  for (let i = 0; i < arr.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    projectDiv.dataset.id = i;
    projectContainer.appendChild(projectDiv);

    projectDiv.innerHTML = `<div><i class="fas fa-list"></i><span>${arr[i].name}</span></div>
                            <button id="remove-project-${i}"><i class="fas fa-xmark"></i></button>`;
    
    const removeProject = document.getElementById(`remove-project-${i}`);

    removeProject.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteProject(removeProject, arr);
    });

    projectDiv.addEventListener("click", () => {
      renderProject(arr[i], arr);
      renderToDoList(arr[i], arr);
    });
  };
};

const renderProject = (project, arr) => {
  const content = document.querySelector(".content");

  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  };

  const header = document.createElement("h1");
  header.textContent = `${project.name}`;
  content.appendChild(header);

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("to-do-list");
  content.appendChild(toDoDiv);

  const toDoModal = document.createElement("dialog");
  toDoModal.setAttribute("id", "to-do-modal");
  content.appendChild(toDoModal);

  const toDoForm = document.createElement("form");
  toDoForm.setAttribute("id", "to-do-form");
  toDoModal.appendChild(toDoForm);

  const toDoModalPara1 = document.createElement("p");
  toDoForm.appendChild(toDoModalPara1);

  const toDoModalLbl1 = document.createElement("label");
  toDoModalLbl1.setAttribute("for", "to-do-title");
  toDoModalLbl1.textContent = "Title";
  toDoModalPara1.appendChild(toDoModalLbl1);

  const toDoModalInput1 = document.createElement("input");
  toDoModalInput1.setAttribute("type", "text");
  toDoModalInput1.setAttribute("id", "to-do-title");
  toDoModalInput1.setAttribute("placeholder", "Title");
  toDoModalInput1.required = true;
  toDoModalPara1.appendChild(toDoModalInput1);

  const toDoModalPara2 = document.createElement("p");
  toDoForm.appendChild(toDoModalPara2);

  const toDoModalLbl2 = document.createElement("label");
  toDoModalLbl2.setAttribute("for", "to-do-description");
  toDoModalLbl2.textContent = "Description";
  toDoModalPara2.appendChild(toDoModalLbl2);

  const toDoModalTxt = document.createElement("textarea");
  toDoModalTxt.setAttribute("id", "to-do-description");
  toDoModalTxt.setAttribute("placeholder", "Task details...");
  toDoModalTxt.setAttribute("rows", "3");
  toDoModalTxt.setAttribute("cols", "20");
  toDoModalPara2.appendChild(toDoModalTxt);

  const toDoModalPara3 = document.createElement("p");
  toDoForm.appendChild(toDoModalPara3);

  const toDoModalLbl3 = document.createElement("label");
  toDoModalLbl3.setAttribute("for", "to-do-due-date");
  toDoModalLbl3.textContent = "Due date";
  toDoModalPara3.appendChild(toDoModalLbl3);

  const toDoModalInput2 = document.createElement("input");
  toDoModalInput2.setAttribute("type", "date");
  toDoModalInput2.setAttribute("id", "to-do-due-date");
  toDoModalPara3.appendChild(toDoModalInput2);

  const toDoModalPara4 = document.createElement("p");
  toDoForm.appendChild(toDoModalPara4);

  const toDoModalLbl4 = document.createElement("label");
  toDoModalLbl4.setAttribute("for", "to-do-priority");
  toDoModalLbl4.textContent = "Priority";
  toDoModalPara4.appendChild(toDoModalLbl4);

  const toDoModalDD = document.createElement("select");
  toDoModalDD.setAttribute("id", "to-do-priority");
  toDoModalPara4.appendChild(toDoModalDD);

  const option1 = document.createElement("option");
  option1.setAttribute("value", "");
  option1.textContent = "Select a priority";
  toDoModalDD.appendChild(option1);

  const option2 = document.createElement("option");
  option2.setAttribute("value", "High");
  option2.textContent = "High";
  toDoModalDD.appendChild(option2);
  
  const option3 = document.createElement("option");
  option3.setAttribute("value", "Middle");
  option3.textContent = "Middle";
  toDoModalDD.appendChild(option3);

  const option4 = document.createElement("option");
  option4.setAttribute("value", "Low");
  option4.textContent = "Low";
  toDoModalDD.appendChild(option4);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");
  toDoForm.appendChild(btnContainer);

  const addToDoBtn = document.createElement("button");
  addToDoBtn.setAttribute("id", "add-to-do");
  addToDoBtn.setAttribute("type", "submit");
  addToDoBtn.textContent = "Add";
  btnContainer.appendChild(addToDoBtn);

  const cnlToDoBtn = document.createElement("button");
  cnlToDoBtn.setAttribute("id", "cnl-to-do");
  cnlToDoBtn.setAttribute("type", "reset");
  cnlToDoBtn.textContent = "Cancel";
  btnContainer.appendChild(cnlToDoBtn);

  const btn = document.createElement("button");
  btn.classList.add("add-task");
  btn.innerHTML = '<i class="fas fa-plus"></i> Add Task';
  content.appendChild(btn);

  btn.addEventListener("click", () => {
    toDoModal.showModal();
  });

  toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addToDo(project, arr);
    renderToDoList(project, arr);
    toDoForm.reset();
    toDoModal.close();
  });

  toDoForm.addEventListener("reset", () => {
    toDoModal.close();
  });
};

const addToDo = (project, arr) => {
  const toDoTitle = document.getElementById("to-do-title");
  const toDoDescription = document.getElementById("to-do-description");
  const toDoDueDate = document.getElementById("to-do-due-date");
  const toDoPriority = document.getElementById("to-do-priority");

  const newToDo = new Todo(toDoTitle.value, toDoDescription.value, toDoDueDate.value, toDoPriority.value);

  const repeatToDo = project.todos.some(el => el.title === newToDo.title);
  
  if (repeatToDo) {
    alert("To-Dos must be different");
  } else {
    project.todos.push(newToDo);
    localStorage.setItem("data", JSON.stringify(arr));
  };
};

const renderToDoList = (project, arr) => {
  const toDoList = document.querySelector(".to-do-list");

  const uncomplete = '<i class="far fa-circle"></i>';
  const complete = '<i class="fas fa-circle-check"></i>';
  const completeCls = 'class="complete"';
  const uncompleteCls = "";
  const noDueDate = "No Due Date";

  while (toDoList.hasChildNodes()) {
    toDoList.removeChild(toDoList.firstChild);
  };
  
  for (let i = 0; i < project.todos.length; i++) {
    const toDoContainer = document.createElement("div");
    toDoContainer.dataset.todo = i;
    toDoList.appendChild(toDoContainer);
    
    toDoContainer.innerHTML = `<dialog id="modal-${i}">
                                 <h2>${project.todos[i].title}</h2>
                                 <p>Description: <span>${project.todos[i].description}</span></p>
                                 <p>Due date: <span>${project.todos[i].dueDate ? project.todos[i].dueDate : noDueDate}</span></p>
                                 <p>Priority: <span class="${project.todos[i].priority.toLowerCase()}">${project.todos[i].priority}</span></p>
                                 <div><button id="close-${i}" class="cls-btn">Close</button></div>
                               </dialog>
                               <div>
                                 <button id="mark-complete-${i}" class="mark-complete">${project.todos[i].complete ? complete : uncomplete}</button><span ${project.todos[i].complete ? completeCls : uncompleteCls}>${project.todos[i].title}</span>
                               </div>
                               <div>
                                 <button id="details-${i}" class="details">Details</button>
                                 <button class="remove-todo" id="remove-todo-${i}"><i class="fas fa-xmark"></i></button>
                               </div>`;

    
    const modal = document.getElementById(`modal-${i}`);
    const detailBtn = document.getElementById(`details-${i}`);
    const closeBtn = document.getElementById(`close-${i}`);
    const markComplete = document.getElementById(`mark-complete-${i}`);                           
    const removeTodo = document.getElementById(`remove-todo-${i}`);
    
    detailBtn.addEventListener("click", () => {
      modal.showModal();
    });

    closeBtn.addEventListener("click", () => {
      modal.close();
    });

    markComplete.addEventListener("click", () => {
      if (project.todos[i].complete) {
        project.todos[i].complete = false;
      } else {
        project.todos[i].complete = true;
      }

      localStorage.setItem("data", JSON.stringify(arr));

      renderToDoList(project, arr);
    });

    removeTodo.addEventListener("click", () => {
      deleteToDo(removeTodo, project, arr);
    });
  };
};

const deleteProject = (el, arr) => {
  const parentID = el.parentElement.dataset.id;
  const content = document.querySelector(".content");

  if (content.hasChildNodes()) {
    if (content.firstChild.textContent === arr[parentID].name) {
      while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
      };
    };  
  };
  
  arr.splice(parentID, 1);

  const projectContainer = document.querySelector(".project-container");

  while (projectContainer.hasChildNodes()) {
    projectContainer.removeChild(projectContainer.firstChild);
  };
  
  for (let i = 0; i < arr.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    projectContainer.appendChild(projectDiv);

    projectDiv.innerHTML = `<div>
                              <i class="fas fa-list"></i><span>${arr[i].name}</span>
                            </div>
                            <button id="remove-project-${i}">
                              <i class="fas fa-xmark"></i>
                            </button>`;

    const removeProject = document.getElementById(`remove-project-${i}`);

    removeProject.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteProject(removeProject, arr);
    });

    projectDiv.addEventListener("click", () => {
      renderProject(arr[i], arr);
      renderToDoList(arr[i], arr);
    });

    projectDiv.dataset.id = i;
  }

  localStorage.setItem("data", JSON.stringify(arr));
};

const deleteToDo = (el, project, arr) => {
  const grandParentID = el.parentElement.parentElement.dataset.todo;

  project.todos.splice(grandParentID, 1);

  localStorage.setItem("data", JSON.stringify(arr));

  renderToDoList(project, arr);
};

export { addProject, renderProjectList, renderProject, renderToDoList, deleteProject };