//OPA20251602513

export function gerarAtendimento() {
  const btnGerarAtendimento = document.querySelector("#gerar-atendimento");

  btnGerarAtendimento.addEventListener("click", (e) => {
    const modal = document.querySelector("#modal-atendimento");
    const backdrop = document.querySelector(".backdrop-inactivated");
    const modalContent = document.querySelector(".modal-atendimento-content");
    const serviceContent = `

    [INFORMAÇÕES DO ATENDIMENTO] <br>
    <br>

    ATENDENTE: ${document.querySelector("#nome-atendente").value} <br>
    DATA DO ATENDIMENTO: ${document.querySelector("#data-atendimento").value} <br>
    PROTOCOLO: ${document.querySelector("#protocolo-atendimento").value} <br>
    CONTATANTE: ${document.querySelector("#nome-contatante").value} <br>
    CONTATO: ${document.querySelector("#telefone").value} <br>
    TITULAR: ${document.querySelector("#titular").value} <br>
    <br>

    [INFORMAÇÕES DO CONCENTRADOR]<br>
    <br>

    OLT ${document.querySelector("#nome_olt").value} SLOT ${document.querySelector("#slot").value} PON ${document.querySelector("#pon").value} <br>
    SINAL DA FIBRA: ${document.querySelector("#sinal-fibra").value} <br>
    PON DO EQUIPAMENTO: ${document.querySelector("#mac_equipamento").value} <br>
    REDE LAN: ${document.querySelector("#rede-lan-select").value}<br>
    PLANO: ${document.querySelector("#plano_cliente").value}<br>
    LOGIN: ${document.querySelector("#login_pppoe").value}<br>
    SENHA: ${document.querySelector("#senha_pppoe").value}<br>
    <br>

    [INFORMAÇÕES DO CHAMADO]<br>
    <br>

    MOTIVO DO CHAMADO: ${document.querySelector("#motivo-do-chamado").value}<br>
    DESCRIÇÃO DO ATENDIMENTO: ${document.querySelector("#descricao_atendimento").value}<br>
    <br>

    [MÉTODOS APLICADOS NO EQUIPAMENTO]<br>
    <br>

    GERAL<br>
    ATUALIZAÇÃO DE FIRMWARE: ${document.querySelector("#atualizado-firmware-sim").checked ? "SIM" : "NÃO"} <br>
    LIMPEZA DE MAC: ${document.querySelector("#limpeza-mac-sim").checked ? "SIM" : "NÃO"} <br>
    ALTERADO SNTP: ${document.querySelector("#alterado-sntp-sim").checked ? "SIM" : "NÃO"} <br>
    SETADO DNS: ${document.querySelector("#setado-dns-sim").checked ? "SIM" : "NÃO"} <br>
    UPnP: ${document.querySelector("#habilitado-upnp-sim").checked ? "LIGADO" : "DESLIGADO"} <br>
    FIREWALL: ${document.querySelector('input[name="firewall"]:checked').value.toUpperCase()} <br>
    ALG: ${document.querySelector('input[name="alg"]:checked').value.toUpperCase()} <br>
    <br>

    REDE 2.4G<br>
    ALTERADO CANAL: ${document.querySelector("#canal-2g-alterado").checked ? "NÃO" : `DE ${document.querySelector("#canal-2g-select-1").value} PARA ${document.querySelector("#canal-2g-select-2").value}`}  <br>
    ALTERADO MODO: ${document.querySelector("#modo-2g-alterado").checked ? "NÃO" : `DE ${document.querySelector("#modo-2g-select-1").value} PARA ${document.querySelector("#modo-2g-select-2").value}`} <br>
    ALTERADO LARGURA DA BANDA: ${document.querySelector("#largura-2g-alterado").checked ? "NÃO" : `DE ${document.querySelector("#largura-2g-select-1").value} PARA ${document.querySelector("#largura-2g-select-2").value}`} <br>
    ALTERADO SGI: ${document.querySelector("#sgi-2g-ligado").checked ? "LIGADO" : "DESLIGADO"} <br>
    ALTERADO ENCRIPTAÇÃO: ${document.querySelector("#enctriptacao-2g-alterada-sim").checked ? "SIM" : "NÃO"} <br>
    <br>

    REDE 5G<br>
    ALTERADO CANAL: ${document.querySelector("#canal-5g-alterado").checked ? "NÃO" : `DE ${document.querySelector("#canal-5g-select-1").value} PARA ${document.querySelector("#canal-5g-select-2").value}`}  <br>
    ALTERADO MODO: ${document.querySelector("#modo-5g-alterado").checked ? "NÃO" : `DE ${document.querySelector("#modo-5g-select-1").value} PARA ${document.querySelector("#modo-5g-select-2").value}`} <br>
    ALTERADO LARGURA DA BANDA: ${document.querySelector("#largura-5g-alterado").checked ? "NÃO" : `DE ${document.querySelector("#largura-5g-select-1").value} PARA ${document.querySelector("#largura-5g-select-2").value}`} <br>
    ALTERADO SGI: ${document.querySelector("#sgi-5g-ligado").checked ? "LIGADO" : "DESLIGADO"} <br>
    ALTERADO ENCRIPTAÇÃO: ${document.querySelector("#enctriptacao-5g-alterada-sim").checked ? "SIM" : "NÃO"} <br>
    <br>
    `
    
    modal.show()

    if (modal) {
      backdrop.setAttribute("class", "backdrop-activated");
    }

    modalContent.innerHTML = `${serviceContent}`

    const buttonCopy = document.createElement("button")
    buttonCopy.setAttribute("class", "btn" + " btn-primary");
    buttonCopy.textContent = "Copiar";
    modalContent.appendChild(buttonCopy)


    buttonCopy.addEventListener("click", (e)=>{
      e.preventDefault();
      modal.close()
      backdrop.setAttribute("class", "backdrop-inactivated");     
    });
  });
}
gerarAtendimento()
