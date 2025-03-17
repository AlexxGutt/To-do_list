import { tasks } from "./userTasks.js";
import { renderTasks } from "./renderTask.js";
export const addTask = () => {
  const addButtonEl = document.querySelector(".add-button");
  addButtonEl.addEventListener("click", () => {
    const userText = document.getElementById("new-task");
    const newTask = {
      text: userText.value,
    };

    tasks.push(newTask);

    userText.value = "";

    renderTasks();
  });
};

export const deleteTask = () => {
  const deleteButtons = document.querySelectorAll(".delete-button");

  for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener("click", () => {
      const indexDelete = deleteButton.dataset.del;

      tasks.splice(indexDelete, 1);
      renderTasks();
    });
  }
};
