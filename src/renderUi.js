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