import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/styles.scss";
import "../js/utils/datepicker";
import "./services/fetchClientInfos";
import "../js/components/clientsModal";
import "../js/services/fetchAtendimento"
import "../js/events/cleanInfos"
import "./components/serviceModal"
import { attachClientEvents } from "./events/clientEvents";

document.addEventListener("DOMContentLoaded", () => {
  attachClientEvents();
});