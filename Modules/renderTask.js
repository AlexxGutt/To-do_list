import { addTask, deleteTask, doneTask } from "./functionsList.js";
import { tasks } from "./userTasks.js";

export const renderTasks = () => {
  const appElement = document.querySelector(".conteiner");
  const tasksHtml = tasks
    .map((task, index) => {
      return `<div data-li='${index}' class="task-position">
        <div data-index='${index}' class="task">${task.text}</div>
        <div class="button-position">
          <button data-done='${index}' class="done-button">Выполнено</button>
          <button data-del='${index}' class="delete-button">Удалить</button>
        </div>
      </div>`;
    })
    .join("");

  const appHtml = `
    <div class="list">${tasksHtml}</div>
      <div class="add-task">
        <input
          class="new-task"
          type="text"
          name=""
          id="new-task"
          placeholder="Напишите задание"
        />
        <button class="add-button">Добавить</button>
      </div>`;

  appElement.innerHTML = appHtml;
  addTask();
  deleteTask();
  doneTask();
};
