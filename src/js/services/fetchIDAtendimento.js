import axios from "axios";
import { handleError, errorMessage } from "../errors/handleErrors";
import { showNotification } from "../components/errorNotification";

export async function getIdAtendimento(protocolo) {
  try {
    const response = await axios.get(
      `http://localhost:8000/opa/?protocolo=${protocolo}`
    );
    return response.data.data;
  } catch (error) {
    if (error.code === "ERR_NETWORK") {
      showNotification(errorMessage[503]);
    } else {
      // const errStatus = error.response.status;
      // showNotification(handleError(errStatus));
      console.error("Ocorreu um erro na requisição!");
    }
  }
}
