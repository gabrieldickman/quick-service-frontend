// http://localhost:8000/opa/atendimento/?idAtendimento=
import { getIdAtendimento } from "../services/fetchIDAtendimento";
import { formatarTelefone } from "../utils/formatNumber";
import { formatarData } from "../utils/formatDate";
import { handleError } from "../errors/handleErrors";
import { showNotification } from "../components/errorNotification";
import axios from "axios";

const searchService = document.querySelector("#buscar-id-atendimento");

searchService.addEventListener("click", (e) => {
  e.preventDefault();
  const protocoloOpa = document.querySelector("#protocolo-opa").value;

  getIdAtendimento(protocoloOpa).then((idAtendimento) => {
    getAtendimento(idAtendimento).then((data) => {
      if(!data) {
        showNotification("Atendimento não encontrado")
      }else {
        const nomeAtendente = document.querySelector("#nome-atendente");
        const protocoloAtendimento = document.querySelector("#protocolo-atendimento");
        const contatante = document.querySelector("#nome-contatante");
        const telefone = document.querySelector("#telefone");
        const titular = document.querySelector("#titular");
        const dataAtendimento = document.querySelector("#data-atendimento");
        const motivoChamado = document.querySelector("#motivo-do-chamado");

        nomeAtendente.value = data.nomeDoAtendente;
        protocoloAtendimento.value = data.protocoloDoAtendimento;
        contatante.value = data.nomeDoContatante;
        telefone.value = formatarTelefone(data.telefoneDoContatante);
        titular.value = data.nomeDoTitular;
        dataAtendimento.value = formatarData(data.dataDoAtendimento);
        motivoChamado.value = data.motivoDoChamado;
      }
    });
  });
});

async function getAtendimento(idAtendimento) {
  try {
    const response = await axios.get(
      `http://localhost:8000/opa/atendimento/?idAtendimento=${idAtendimento}`
    );
    return response.data.data;
  } catch (error) {
    if (error.code === "ERR_NETWORK") {
      showNotification("O servidor está offline");
    } else {
      const errStatus = error.response.status;
      // showNotification(handleError(errStatus));
    }
  }
}
