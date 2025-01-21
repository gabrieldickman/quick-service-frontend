import { openModal } from "../components/modal";

export function attachClientEvents() {
  const searchButton = document.querySelector("#buscar_cliente");
  searchButton.addEventListener("click", openModal);
}