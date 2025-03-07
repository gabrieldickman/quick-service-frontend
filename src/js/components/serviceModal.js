//OPA20251602513

export function gerarAtendimento() {
  const btnGerarAtendimento = document.querySelector("#gerar-atendimento");

  btnGerarAtendimento.addEventListener("click", (e) => {
    const modal = document.querySelector("#modal-atendimento");
    const backdrop = document.querySelector(".backdrop-inactivated");
    const modalContent = document.querySelector(".modal-atendimento-content");
    const serviceContent = 
`[INFORMAÇÕES DO ATENDIMENTO]

ATENDENTE: ${document.querySelector("#nome-atendente").value} 
DATA DO ATENDIMENTO: ${document.querySelector("#data-atendimento").value} 
PROTOCOLO: ${document.querySelector("#protocolo-atendimento").value} 
CONTATANTE: ${document.querySelector("#nome-contatante").value} 
CONTATO: ${document.querySelector("#telefone").value} 
TITULAR: ${document.querySelector("#titular").value} 

[INFORMAÇÕES DO CONCENTRADOR]

OLT ${document.querySelector("#nome_olt").value} SLOT ${document.querySelector("#slot").value} PON ${document.querySelector("#pon").value} 
SINAL DA FIBRA: ${document.querySelector("#sinal-fibra").value} 
PON DO EQUIPAMENTO: ${document.querySelector("#mac_equipamento").value} 
REDE LAN: ${document.querySelector("#rede-lan-select").value}
PLANO: ${document.querySelector("#plano_cliente").value}
LOGIN: ${document.querySelector("#login_pppoe").value}
SENHA: ${document.querySelector("#senha_pppoe").value}

[INFORMAÇÕES DO CHAMADO]

MOTIVO DO CHAMADO: ${document.querySelector("#motivo-do-chamado").value}
DATA RESERVADA: ${document.querySelector("#data-reservada").value}
LOCALIZAÇÃO DO CLIENTE: ${document.querySelector("#localizacao").value}
ALARME DO EQUIPAMENTO: ${document.querySelector("#alarme-equipamento").value}
DESCRIÇÃO DO ATENDIMENTO: ${document.querySelector("#descricao_atendimento").value}

[MÉTODOS APLICADOS NO EQUIPAMENTO]

GERAL 
ATUALIZAÇÃO DE FIRMWARE: ${document.querySelector("#atualizado-firmware-sim").checked ? "SIM" : "NÃO"} 
LIMPEZA DE MAC: ${document.querySelector("#limpeza-mac-sim").checked ? "SIM" : "NÃO"} 
ALTERADO SNTP: ${document.querySelector("#alterado-sntp-sim").checked ? "SIM" : "NÃO"} 
SETADO DNS: ${document.querySelector("#setado-dns-sim").checked ? "SIM" : "NÃO"} 
UPnP: ${document.querySelector("#habilitado-upnp-sim").checked ? "LIGADO" : "DESLIGADO"} 
FIREWALL: ${document.querySelector('input[name="firewall"]:checked').value.toUpperCase()} 
ALG: ${document.querySelector('input[name="alg"]:checked').value.toUpperCase()} 

REDE 2.4G 
ALTERADO CANAL: ${document.querySelector("#canal-2g-alterado").value}
ALTERADO MODO: ${document.querySelector("#modo-2g-alterado").value}
ALTERADO LARGURA DA BANDA: ${document.querySelector("#largura-2g-alterado").value} 
ALTERADO SGI: ${document.querySelector("#sgi-2g-ligado").checked ? "LIGADO" : "DESLIGADO"} 
ALTERADO ENCRIPTAÇÃO: ${document.querySelector("#enctriptacao-2g-alterada-sim").checked ? "SIM" : "NÃO"} 

REDE 5G 
ALTERADO CANAL: ${document.querySelector("#canal-5g-alterado").value}
ALTERADO MODO: ${document.querySelector("#modo-5g-alterado").value}
ALTERADO LARGURA DA BANDA: ${document.querySelector("#largura-5g-alterado").value}
ALTERADO SGI: ${document.querySelector("#sgi-5g-ligado").checked ? "LIGADO" : "DESLIGADO"} 
ALTERADO ENCRIPTAÇÃO: ${document.querySelector("#enctriptacao-5g-alterada-sim").checked ? "SIM" : "NÃO"} 
  
`    
    modal.show()

    if (modal) {
      backdrop.setAttribute("class", "backdrop-activated");
    }

    modalContent.innerHTML = `${serviceContent.replace(/\n/g, "<br>")}`

    const buttonCopy = document.createElement("button")
    buttonCopy.setAttribute("class", "btn" + " btn-primary");
    buttonCopy.textContent = "Copiar";
    modalContent.appendChild(buttonCopy)


    buttonCopy.addEventListener("click", (e)=>{
      e.preventDefault();
      modal.close()
      backdrop.setAttribute("class", "backdrop-inactivated");     
      navigator.clipboard.writeText(serviceContent).then(() => console.log("Copiado!"));
    });

    document.addEventListener("change", (e) => {

    })
  });
}
gerarAtendimento()
