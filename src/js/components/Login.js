import { login } from "../services/auth.js";
import { showNotification } from "../components/errorNotification.js"

const backendIp = process.env.REACT_APP_BACKEND_IP || 'localhost:8000';

const renderLogin = () => {
  const container = document.createElement("div");
  container.classList.add("login-container");

  container.innerHTML = `
    <form class="login-form">
      <input type="text" class="form-control" id="username" placeholder="Usuário" required>
      <input type="password" class="form-control" id="password" placeholder="Senha" required>
      <button type="submit" class="btn btn-success">Entrar</button>
    </form>
  `;

  container.querySelector(".login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(`https://${backendIp}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token);
        window.location.reload();
      } else {
        showNotification("Usuário ou senha inválidos!")
      }
    } catch (error) {
      showNotification("Erro na autenticação!");
    }
  });

  return container;
};

export default renderLogin;
