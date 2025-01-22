import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/styles.scss";
import "../js/utils/datepicker";
import "./services/fetchClientInfos";
import "../js/components/modal";
import "../js/services/fetchAtendimento"
import "../js/events/cleanInfos"
import { attachClientEvents } from "./events/clientEvents";


document.addEventListener("DOMContentLoaded", () => {
  attachClientEvents();
});