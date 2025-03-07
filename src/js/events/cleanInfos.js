import { showNotification } from "../components/cleanNotification";

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
    document.querySelector("#rede-lan-select").value = "";
    

    document.querySelector("#nome_olt").value = "";
    document.querySelector("#slot").value = "";
    document.querySelector("#pon").value = "";
    document.querySelector("#mac_equipamento").value = "";
    document.querySelector("#sinal-fibra").value = "";

    document.querySelector("#motivo-do-chamado").value = "";
    document.querySelector("#descricao_atendimento").value = "";
    document.querySelector("#data-reservada").value = "";
    document.querySelector("#localizacao").value = "";
    document.querySelector("#alarme-equipamento").value = "";

    document.querySelector("#canal-2g-select-1").value = "";
    document.querySelector("#canal-2g-select-2").value = "";
    document.querySelector("#modo-2g-select-1").value = "";
    document.querySelector("#modo-2g-select-2").value = "";
    document.querySelector("#largura-2g-select-1").value = "";
    document.querySelector("#largura-2g-select-2").value = "";

    document.querySelector("#canal-5g-select-1").value = "";
    document.querySelector("#canal-5g-select-2").value = "";
    document.querySelector("#modo-5g-select-1").value = "";
    document.querySelector("#modo-5g-select-2").value = "";
    document.querySelector("#largura-5g-select-1").value = "";
    document.querySelector("#largura-5g-select-2").value = "";
    
    showNotification();
  });
}

const cleanInfo = document.querySelector("#limpar-campos");
cleanInfos(cleanInfo);
