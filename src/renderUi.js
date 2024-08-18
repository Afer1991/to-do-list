const renderUI = () => {
  const header = document.createElement("h1");
  header.textContent = "To-Do List";
  document.body.appendChild(header);
};

export default renderUI;