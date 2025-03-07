export function gerarAtendimento() {
  const btnGerarAtendimento = document.querySelector("#gerar-atendimento");

  if (!btnGerarAtendimento) {
    console.error("Botão de gerar atendimento não encontrado!");
    return;
  }

  btnGerarAtendimento.addEventListener("click", () => {
    const modal = document.querySelector("#modal-atendimento");
    const backdrop = document.querySelector(".backdrop-inactivated");
    const modalContent = document.querySelector(".modal-atendimento-content");

    if (!modal || !backdrop || !modalContent) {
      console.error("Elementos do modal não encontrados!");
      return;
    }

    function getValue(selector, defaultValue = "x") {
      const element = document.querySelector(selector);
      return element ? element.value || defaultValue : defaultValue;
    }

    function getRadioValue(selector) {
      const element = document.querySelector(selector);
      return element && element.checked ? "SIM" : "NÃO";
    }

    function getCheckedValue(selector, checkedText = "LIGADO", uncheckedText = "DESLIGADO") {
      const element = document.querySelector(selector);
      return element && element.checked ? checkedText : uncheckedText;
    }

    const serviceContent = `
[INFORMAÇÕES DO ATENDIMENTO]
ATENDENTE: ${getValue("#nome-atendente")} 
DATA DO ATENDIMENTO: ${getValue("#data-atendimento")} 
PROTOCOLO: ${getValue("#protocolo-atendimento")} 
CONTATANTE: ${getValue("#nome-contatante")} 
CONTATO: ${getValue("#telefone")} 
TITULAR: ${getValue("#titular")} 

[INFORMAÇÕES DO CONCENTRADOR]
OLT ${getValue("#nome_olt")} SLOT ${getValue("#slot")} PON ${getValue("#pon")} 
SINAL DA FIBRA: ${getValue("#sinal-fibra")} 
PON DO EQUIPAMENTO: ${getValue("#mac_equipamento")} 
REDE LAN: ${getValue("#rede-lan-select")}
PLANO: ${getValue("#plano_cliente")}
LOGIN: ${getValue("#login_pppoe")}
SENHA: ${getValue("#senha_pppoe")}

[INFORMAÇÕES DO CHAMADO]
MOTIVO DO CHAMADO: ${getValue("#motivo-do-chamado")}
DATA RESERVADA: ${getValue("#data-reservada")}
LOCALIZAÇÃO DO CLIENTE: ${getValue("#localizacao")}
ALARME DO EQUIPAMENTO: ${getValue("#alarme-equipamento")}
DESCRIÇÃO DO ATENDIMENTO: ${getValue("#descricao_atendimento")}

[MÉTODOS APLICADOS NO EQUIPAMENTO]
GERAL 
ATUALIZAÇÃO DE FIRMWARE: ${getRadioValue("#atualizado-firmware-sim")} 
LIMPEZA DE MAC: ${getRadioValue("#limpeza-mac-sim")}
ALTERADO SNTP: ${getRadioValue("#alterado-sntp-sim")}
SETADO DNS: ${getRadioValue("#setado-dns-sim")}
UPnP: ${getCheckedValue("#habilitado-upnp-sim")}
FIREWALL: ${getValue('input[name="firewall"]:checked', "NÃO INFORMADO").toUpperCase()} 
ALG: ${getValue('input[name="alg"]:checked', "NÃO INFORMADO").toUpperCase()} 

REDE 2.4G 
ALTERADO CANAL: ${document.querySelector("#canal-2g-alterado").checked ? "NÃO" : "DE " + document.querySelector("#canal-2g-select-1").value + " PARA " + document.querySelector("#canal-2g-select-2").value}
ALTERADO MODO: ${document.querySelector("#modo-2g-alterado").checked ? "NÃO" : "DE " + document.querySelector("#modo-2g-select-1").value + " PARA " + document.querySelector("#modo-2g-select-2").value}
ALTERADO LARGURA DA BANDA: ${document.querySelector("#largura-2g-alterado").checked ? "NÃO" : "DE " + document.querySelector("#largura-2g-select-1").value + " PARA " + document.querySelector("#largura-2g-select-2").value}
ALTERADO SGI: ${getCheckedValue("#sgi-2g-ligado")}
ALTERADO ENCRIPTAÇÃO: ${getRadioValue("#enctriptacao-2g-alterada-sim")}

REDE 5G 
ALTERADO CANAL: ${document.querySelector("#canal-5g-alterado").checked ? "NÃO" : "DE " + document.querySelector("#canal-5g-select-1").value + " PARA " + document.querySelector("#canal-5g-select-2").value}
ALTERADO MODO: ${document.querySelector("#modo-5g-alterado").checked ? "NÃO" : "DE " + document.querySelector("#modo-5g-select-1").value + " PARA " + document.querySelector("#modo-5g-select-2").value}
ALTERADO LARGURA DA BANDA: ${document.querySelector("#largura-5g-alterado").checked ? "NÃO" : "DE " + document.querySelector("#largura-5g-select-1").value + " PARA " + document.querySelector("#largura-5g-select-2").value}
ALTERADO SGI: ${getCheckedValue("#sgi-5g-ligado")}
ALTERADO ENCRIPTAÇÃO: ${getRadioValue("#enctriptacao-5g-alterada-sim")}
`;
    modal.show();
    backdrop.classList.replace("backdrop-inactivated", "backdrop-activated");

    modalContent.innerHTML = serviceContent.replace(/\n/g, "<br>");

    const buttonCopy = document.createElement("button");
    buttonCopy.className = "btn btn-primary";
    buttonCopy.textContent = "Copiar";
    modalContent.appendChild(buttonCopy);

    buttonCopy.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(serviceContent).then(() => console.log("Copiado!"));
      modal.close();
      backdrop.classList.replace("backdrop-activated", "backdrop-inactivated");
    });
  });
}

gerarAtendimento();
