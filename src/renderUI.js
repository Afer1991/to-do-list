const renderUI = () => {
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  const header = document.createElement("div");
  header.classList.add("header");
  header.innerHTML = '<i class="fas fa-circle-check"></i>';
  container.appendChild(header);

  const headerPara = document.createElement("h1");
  headerPara.textContent = "To-Do List";
  header.appendChild(headerPara);

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  container.appendChild(sidebar);

  const sidebarPara = document.createElement("h1");
  sidebarPara.textContent = "Projects";
  sidebar.appendChild(sidebarPara);

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  sidebar.appendChild(projectContainer);

  const prjctModal = document.createElement("dialog");
  prjctModal.setAttribute("id", "project-modal");
  sidebar.appendChild(prjctModal);

  const prjctForm = document.createElement("form");
  prjctForm.setAttribute("id", "project-form");
  prjctModal.appendChild(prjctForm);

  const prjModalPara = document.createElement("p");
  prjctForm.appendChild(prjModalPara);

  const prjModalLbl = document.createElement("label");
  prjModalLbl.setAttribute("for", "project-name");
  prjModalPara.appendChild(prjModalLbl);

  const prjModalInput = document.createElement("input");
  prjModalInput.setAttribute("type", "text");
  prjModalInput.setAttribute("id", "project-name");
  prjModalInput.setAttribute("placeholder", "Project Name...");
  prjModalInput.required = true;
  prjModalPara.appendChild(prjModalInput);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");
  prjctForm.appendChild(btnContainer);

  const addNewPrjctBtn = document.createElement("button");
  addNewPrjctBtn.setAttribute("id", "add-new-project");
  addNewPrjctBtn.setAttribute("type", "submit");
  addNewPrjctBtn.innerText = "Add";
  btnContainer.appendChild(addNewPrjctBtn);

  const cnclNewPrjctBtn = document.createElement("button");
  cnclNewPrjctBtn.setAttribute("id", "cncl-new-project");
  cnclNewPrjctBtn.setAttribute("type", "reset");
  cnclNewPrjctBtn.innerText = "Cancel";
  btnContainer.appendChild(cnclNewPrjctBtn);

  const addPrjctBtn = document.createElement("button");
  addPrjctBtn.setAttribute("id", "add-project");
  addPrjctBtn.innerHTML = '<i class="fas fa-plus"></i> Add Project';
  sidebar.appendChild(addPrjctBtn);

  const content = document.createElement("div");
  content.classList.add("content");
  container.appendChild(content);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  container.appendChild(footer);
};

export default renderUI;