import { tasks } from "./userTasks.js";
import { renderTasks } from "./renderTask.js";
// import { renderLogin } from "./renderLogIn.js";

export const addTask = () => {
  const addButtonEl = document.querySelector(".add-button");
  addButtonEl.addEventListener("click", () => {
    const userText = document.getElementById("new-task");
    if (userText.value === "") {
      alert("Задача не может быть пустой");
      return;
    } else {
      const newTask = {
        text: userText.value,
        isDone: false,
      };

      tasks.push(newTask);

      userText.value = "";

      renderTasks();
    }
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

export const doneTask = () => {
  const doneButtons = document.querySelectorAll(".done-button");

  for (const doneButton of doneButtons) {
    doneButton.addEventListener("click", () => {
      const indexDone = doneButton.dataset.done; // Получаем индекс задачи
      // Находим элемент задачи

      if (tasks[indexDone].isDone === false) {
        tasks[indexDone].isDone = true; // Добавляем класс .done к конкретной задаче
        renderTasks();
      }
    });
  }
};
