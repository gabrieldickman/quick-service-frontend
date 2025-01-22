import { searchClientInfos } from "../services/fetchClientInfos";
import { getPlanoClient } from "../services/fetchPlanoCliente";
import { formatConnectionString } from "../utils/formatConnectionInterface";
import { showWarning } from "./modalWarning";
const searchButton = document.querySelector("#buscar_cliente");

export function openModal(e) {
  e.preventDefault();

  const modal = document.querySelector("#tabela-clientes");
  const bodyModal = document.querySelector(".modal-body");
  const backdrop = document.querySelector(".backdrop-inactivated");
  modal.show();

  if (modal) {
    backdrop.setAttribute("class", "backdrop-activated");
  }

  // Verifica se existe uma ul criada e cria uma
  let clientList = bodyModal.querySelector(".lista-de-clientes");
  if (!clientList) {
    clientList = document.createElement("ul");
    clientList.classList.add("lista-de-clientes");
    bodyModal.appendChild(clientList);
  }
  // Limpa a ul antes de adicionar novos dados
  clientList.innerHTML = "";

  const idContrato = document.querySelector("#id_contrato").value;
  if (!idContrato) {
    showWarning(modal, clientList, backdrop);
  } else {
    searchClientInfos(idContrato).then((data) => {
      // Filtrar clientes com logins "ativo: S"
      const clientesAtivos = data
        .map((cliente) => ({
          ...cliente,
          logins: cliente.logins.filter((login) => login.ativo === "S"),
        }))
        // Apenas clientes com logins ativos
        .filter((cliente) => cliente.logins.length > 0); 

      clientesAtivos.forEach((cliente) => {
        cliente.logins.forEach((login) => {
          const li = document.createElement("li");
          const p = document.createElement("p")
          p.textContent = `Cliente: ${login.login || "Nome Indisponível"}`;
          li.appendChild(p);
          const button = document.createElement("button");
          button.setAttribute("class", "btn" + " btn-primary");
          button.textContent = "Selecionar";

          button.addEventListener("click", (e) => {
            e.preventDefault();
            populateFields(login);
            modal.close();
            backdrop.setAttribute("class", "backdrop-inactivated");
          });   
          li.appendChild(button);
          clientList.appendChild(li);
        });
      });
    });
  }
}

function populateFields(login) {
  
  document.querySelector("#login_pppoe").value = login.login;
  document.querySelector("#senha_pppoe").value = login.senha;
  
  const partes = formatConnectionString(login.conexao);

  getPlanoClient(login.id_contrato).then((planoCliente) =>{
    document.querySelector("#plano_cliente").value = planoCliente;
  })

  if (partes.length === 4) {
    document.querySelector("#mac_equipamento").value = partes[0].trim();
    document.querySelector("#nome_olt").value = partes[1].trim();
    document.querySelector("#slot").value = partes[2].trim();
    document.querySelector("#pon").value = partes[3].trim();
  } else if (partes.length === 7) {
    document.querySelector("#nome_olt").value = partes.slice(0, 4).join(".").trim();
    document.querySelector("#slot").value = partes[4].trim();
    document.querySelector("#pon").value = partes[5].trim();
    document.querySelector("#mac_equipamento").value = partes[6].trim();
  } else {
    console.error("Formato da string não corresponde ao esperado.");
  }
}

searchButton.addEventListener("click", openModal);
