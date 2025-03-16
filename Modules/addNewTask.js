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
