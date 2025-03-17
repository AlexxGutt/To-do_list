import { addTask, deleteTask } from "./functionsList.js";
import { tasks } from "./userTasks.js";

export const renderTasks = () => {
  const ulElement = document.querySelector(".list");
  const tasksHtml = tasks
    .map((task, index) => {
      return `<div data-li='${index}' class="task-position">
        <li class="task">${task.text}</li>
        <div class="button-position">
          <button data-done='${index}' class="done-button">Выполнено</button>
          <button data-del='${index}' class="delete-button">Удалить</button>
        </div>
      </div>`;
    })
    .join("");

  ulElement.innerHTML = tasksHtml;

  deleteTask();
};
