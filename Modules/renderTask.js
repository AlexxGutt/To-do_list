import { tasks } from "./userTasks.js";

export const renderTasks = () => {
  const ulElement = document.querySelector(".list");
  const tasksHtml = tasks
    .map((task) => {
      return `<div class="task-position">
        <li class="task">${task.text}</li>
        <div class="button-position">
          <button class="delete-button">Выполнено</button>
          <button class="delete-button">Удалить</button>
        </div>
      </div>`;
    })
    .join("");

  ulElement.innerHTML = tasksHtml;
};
