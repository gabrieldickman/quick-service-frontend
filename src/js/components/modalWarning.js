export function showWarning(modal, clientList, backdrop){
    // Checa se foi informado algum dado no input
    const warning = document.createElement("h5");
    warning.textContent = "Por favor, informe um contrato";

    const closeModal = document.createElement("button");
    closeModal.setAttribute("class", "btn" + " btn-primary");
    closeModal.textContent = "OK";
    closeModal.addEventListener("click", (e) => {
      e.preventDefault();
      modal.close();
      backdrop.setAttribute("class", "backdrop-inactivated");
    });

    clientList.appendChild(warning);
    clientList.appendChild(closeModal);
}



{/* <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div> */}