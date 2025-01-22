// prerequisites: learn filter, stoppropagation, addEventListener, DOM,...

// when dom is loaded then i want to grab all of content and id and save it in localstorage so:
document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  // Load tasks from localStorage or initialize with an empty array
  let tasksarr = JSON.parse(localStorage.getItem("myTasks")) || [];

  tasksarr.forEach((task) => renderTask(task)); // Render existing tasks

  // Add a new task
  addTaskBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    //   if empty string then return
    if (taskText === "") return;

    const newTask = {
      id: Date.now(), //gives you a unique id so that you can identify the task and never repeated
      text: taskText,
      completed: false,
    };

    tasksarr.push(newTask); // Add task to array
    saveTasks(); //for saving tasks in localstorage
    renderTask(newTask); // Add task to DOM dynamically
    todoInput.value = ""; //clear the input field
    // console.log(tasksarr);
  });

  // Save tasks to localStorage
  function saveTasks() {
    localStorage.setItem("myTasks", JSON.stringify(tasksarr)); // key value pair, both must be string
  }

  // Render a single task
  function renderTask(task) {
    // console.log(task.text);
    const li = document.createElement("li"); // creating li element
    li.setAttribute("data-id", task.id); // it will set the data-id attribute on the li element to the value of the id property of the task object means it will give unique id to each task

    // Add task to the list
    todoList.appendChild(li);

    // means if task is completed then add class completed to li element and if not then empty string ""
    // li.className = task.completed ? "completed" : "";
    if (task.completed) {
      li.classList.add("completed");
    }
    // Toggle completion on clicking the task itself (excluding the delete button)
    li.addEventListener("click", (e) => {
      // Do nothing if the click is on the delete button
      if (e.target.classList.contains("delete-btn")) return;
      task.completed = !task.completed; // Toggle the completed status
      li.classList.toggle("completed"); // Toggle the completed class on the li
      saveTasks(); // Save the updated tasks to localStorage
    });

    li.innerHTML = `
    <span>${task.text}</span>
    <button class="delete-btn">Delete</button>
    `;
    /*
    Delete Logic:
    .filter() is a JavaScript method that creates a new array by keeping only the tasks that don’t match the one we want to delete.
    t.id !== task.id checks each task in the array (t) and keeps it only if its id is not the same as the task’s id you want to delete.
    means, Keep all tasks except the one I clicked to delete.
    */

    // Delete task
    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the click event from bubbling up to the li element
      tasksarr = tasksarr.filter((t) => t.id !== task.id); // Remove task from array
      saveTasks(); // Save tasks to localStorage
      li.remove(); // Remove task from DOM
    });
  }
});
