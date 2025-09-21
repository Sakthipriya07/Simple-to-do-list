const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => span.classList.toggle("completed");
  
  // Delete button
  const delBtn = document.createElement("button");
  delBtn.className = "btn btn-sm btn-danger";
  delBtn.textContent = "Delete";
  delBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(delBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}

// Enter key also adds task
taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});
