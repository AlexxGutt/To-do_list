import { renderTasks } from "./renderTask.js";
export const renderLogin = () => {
  const loginElement = document.querySelector(".login-page");
  const tasksHtml = `<div class="login-position">
        <input type="text" id="login" placeholder="Логин">
        <input type="password" id="password" placeholder="Пароль">
        <div class="button-position">
          <button id="login-button">Войти</button>
        </div>
      </div>`;

  loginElement.innerHTML = tasksHtml;

  const login = document.getElementById("login");
  const password = document.getElementById("password");
  const loginButton = document.getElementById("login-button");

  loginButton.addEventListener("click", () => {
    if (login.value === "admin" && password.value === "admin") {
      loginElement.innerHTML = "";
      renderTasks();
    } else {
      alert("Неверный логин или пароль");
      renderLogin();
    }
  });
};
