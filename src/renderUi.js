const renderUI = () => {
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  const header = document.createElement("div");
  header.classList.add("header");
  container.appendChild(header);

  const headerPara = document.createElement("h1");
  headerPara.textContent = "To-Do List";
  header.appendChild(headerPara);

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  container.appendChild(sidebar);

  const content = document.createElement("div");
  content.classList.add("content");
  container.appendChild(content);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  container.appendChild(footer);
};

export default renderUI;