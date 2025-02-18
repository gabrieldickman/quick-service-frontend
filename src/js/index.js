import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/styles.scss";
import "../js/utils/datepicker";
import "./services/fetchClientInfos";
import "../js/components/clientsModal";
import "../js/services/fetchAtendimento";
import "../js/events/cleanInfos";
import "./components/serviceModal";
import { attachClientEvents } from "./events/clientEvents";
import { isAuthenticated, logout  } from "./services/auth.js";
import renderLogin from "./components/Login.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector(".body");
  const logoutBtn = document.getElementById("logout-btn");
  const token = localStorage.getItem("token");

  if (token) {
    logoutBtn.style.display = "block"; 
  } else {
    logoutBtn.style.display = "none";
  }
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logout();
    });
  }

  if (!isAuthenticated()) {
    app.innerHTML = "";
    app.appendChild(renderLogin());
  } else {
    attachClientEvents(); 
  }
});
