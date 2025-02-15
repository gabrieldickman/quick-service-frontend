import { openModal } from "../components/clientsModal";

export function attachClientEvents() {
  const searchButton = document.querySelector("#buscar_cliente");
  searchButton.addEventListener("click", openModal);
}
