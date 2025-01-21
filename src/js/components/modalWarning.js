export function showWarning(modal, clientList){
    // Checa se foi informado algum dado no input
    const warning = document.createElement("h5");
    warning.setAttribute("class", "text-center");
    warning.textContent = "Por favor, informe um contrato";

    const closeModal = document.createElement("button");
    closeModal.setAttribute("class", "btn" + " btn-primary");
    closeModal.textContent = "OK";
    closeModal.addEventListener("click", (e) => {
      e.preventDefault();
      modal.close();
    });

    clientList.appendChild(warning);
    clientList.appendChild(closeModal);
}