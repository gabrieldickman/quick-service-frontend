export function cleanInfos(cleanInfo){
  cleanInfo.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("#id_contrato").value = "";
    document.querySelector("#protocolo-opa").value = "";
    document.querySelector("#nome-atendente").value = "";
    document.querySelector("#protocolo-atendimento").value = "";
    document.querySelector("#nome-contatante").value = "";
    document.querySelector("#telefone").value = "";
    document.querySelector("#titular").value = "";
    document.querySelector("#data-atendimento").value = "";

    document.querySelector("#plano_cliente").value = "";
    document.querySelector("#login_pppoe").value = "";
    document.querySelector("#senha_pppoe").value = "";

    document.querySelector("#nome_olt").value = "";
    document.querySelector("#slot").value = "";
    document.querySelector("#pon").value = "";
    document.querySelector("#mac_equipamento").value = "";
    document.querySelector("#sinal-fibra").value = "";

    document.querySelector("#motivo-do-chamado").value = "";
    document.querySelector("#descricao_atendimento").value = "";

    function showNotification() {
      const main = document.querySelector(".body");
      const span = document.createElement("span");
      span.setAttribute("class", "notificacao-campos-limpos");
      span.innerText = "Os campos foram limpos";
      main.appendChild(span);

      setTimeout(() => {
        span.remove();
      }, 3000);
    }
    
    showNotification();
  });
}

const cleanInfo = document.querySelector("#limpar-campos");
cleanInfos(cleanInfo);
