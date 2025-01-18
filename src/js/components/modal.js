import { searchClientInfos } from "../services/fetchClientInfos";

// Seleciona o botão de busca
const searchButton = document.querySelector("#buscar_cliente");

export function openModal(e) {
  e.preventDefault();

  const modal = document.querySelector("#tabela-clientes");
  const bodyModal = document.querySelector(".modal-body");

  modal.show();

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
  } else {
    searchClientInfos(idContrato).then((data) => {
      // Filtrar clientes com logins "ativo: S"
      const clientesAtivos = data
        .map((cliente) => ({
          ...cliente,
          logins: cliente.logins.filter((login) => login.ativo === "S"),
        }))
        .filter((cliente) => cliente.logins.length > 0); // Apenas clientes com logins ativos

      console.log(clientesAtivos);

      clientesAtivos.forEach((cliente) => {
        cliente.logins.forEach((login, index) => {
          const li = document.createElement("li");

          // Adicionar o nome (ou outro campo) no LI
          li.textContent = `Cliente: ${login.login || "Nome Indisponível"}`;

          // Criar o botão dentro do LI
          const button = document.createElement("button");
          button.textContent = "Selecionar";

          button.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector("#plano_cliente").value = login.id_contrato;
            document.querySelector("#login_pppoe").value = login.login;
            document.querySelector("#senha_pppoe").value = login.senha;

            // String recebida
            const interfaceConexão = login.conexao;

            // Separar a string em partes baseado no separador
            let partes;
            if (interfaceConexão.includes(":")) {
              partes = interfaceConexão.split(":");
            } else if (interfaceConexão.includes(".")) {
              partes = interfaceConexão.split(".");
            } else {
              console.error("Formato desconhecido na string de conexão");
              partes = []; // Garante que o código não quebre se o formato for inválido
            }

            // Preencher os valores nos campos
            if (partes.length === 4) {
              // Formato baseado em ":"
              document.querySelector("#mac_equipamento").value =
                partes[0].trim(); // MAC
              document.querySelector("#nome_olt").value = partes[1].trim(); // OLT
              document.querySelector("#slot").value = partes[2].trim(); // SLOT
              document.querySelector("#pon").value = partes[3].trim(); // PON
            } else if (partes.length === 7) {
              // Formato baseado em "."
              document.querySelector("#nome_olt").value = partes
                .slice(0, 4)
                .join(".")
                .trim(); // OLT
              document.querySelector("#slot").value = partes[4].trim(); // SLOT
              document.querySelector("#pon").value = partes[5].trim(); // PON
              document.querySelector("#mac_equipamento").value =
                partes[6].trim(); // MAC
            } else {
              console.error("Formato da string não corresponde ao esperado.");
            }

            modal.close();
          });

          // login.login
          // login.id_contrato
          // senha

          // Adicionar o botão ao LI
          li.appendChild(button);

          // Adicionar o LI à UL
          clientList.appendChild(li);
        });
      });

      // const filterClientesAtivos = clientesAtivos.map((clientAtivo) => ({
      //   login: clientAtivo,
      // }))
    });
  }
}

searchButton.addEventListener("click", openModal);
