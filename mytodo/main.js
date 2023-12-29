
const inputBox = document.getElementById("new-task-input");
const listElement = document.getElementById("tasks");
const form = document.querySelector(".task-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //By default form sends data to another page
  const task = inputBox.value.trim(); // trim() => to remove whitespaces

  if (task === "") {
    alert("You must write something.");
    inputBox.value = "";
    inputBox.focus();
    return;
  }

  // Adding a newtask Row
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");
  taskElement.classList.add("flex");

  const taskContentElement = document.createElement("div");
  taskContentElement.classList.add("content");
  taskElement.appendChild(taskContentElement);

  const taskInputElement = document.createElement("input");
  taskInputElement.type = "textarea";
  taskInputElement.value = task;
  taskInputElement.style.width = taskInputElement.value.length + "ch";
  taskInputElement.setAttribute("readonly", "readonly");
  taskContentElement.appendChild(taskInputElement);

  const taskActionElement = document.createElement("div");
  taskActionElement.classList.add("actions");
  taskActionElement.classList.add("flex");
  taskElement.appendChild(taskActionElement);

  const editButton = document.createElement("button");
  editButton.classList.add("btn");
  editButton.innerHTML = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.innerHTML = "Delete";
  taskActionElement.appendChild(editButton);
  taskActionElement.appendChild(deleteButton);

  listElement.appendChild(taskElement);

  inputBox.value = ""; //Empty the enput box after creating a new task element

  // Functionality of Edit Button
  editButton.addEventListener("click", () => {
    if (editButton.innerText.toLowerCase() == "edit") {
      taskInputElement.removeAttribute("readonly", "readonly");
      taskInputElement.focus();
      editButton.innerText = "Save";
    } else {
      taskInputElement.setAttribute("readonly", "readonly");
      editButton.innerText = "Edit";
    }
  });

  // Functionality of Edit Button
  deleteButton.addEventListener("click", () => {
    listElement.removeChild(taskElement);
  });
});