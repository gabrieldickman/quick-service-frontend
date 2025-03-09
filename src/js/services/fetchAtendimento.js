import { getIdAtendimento } from "../services/fetchIDAtendimento";
import { formatarTelefone } from "../utils/formatNumber";
import { formatarData } from "../utils/formatDate";
import { handleError, errorMessage} from "../errors/handleErrors";
import { showNotification } from "../components/errorNotification";
import axios from "axios";
const backendIp = process.env.REACT_APP_BACKEND_IP || 'localhost:8000';

const searchService = document.querySelector("#buscar-id-atendimento");

searchService.addEventListener("click", (e) => {
  e.preventDefault();
  const protocoloOpa = document.querySelector("#protocolo-opa").value;

  getIdAtendimento(protocoloOpa).then((idAtendimento) => {
    getAtendimento(idAtendimento).then((data) => {
      if(data){
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
      }else{
       console.error("Ocorreu um erro na requisição!")
      }
    });
  });
});

async function getAtendimento(idAtendimento) {
  try {
    const token = sessionStorage.getItem("token");

    const response = await axios.get(
      `https://${backendIp}/api/v1/opa/atendimento/?idAtendimento=${idAtendimento}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    if (error.code === "ERR_NETWORK") {
      showNotification(errorMessage[503]);
    } else {
      const errStatus = error.response.status;
      showNotification(handleError(errStatus));
    }
  }
}
