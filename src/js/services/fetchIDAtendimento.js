import axios from "axios";
import { handleError } from "../errors/handleErrors";
import { showNotification } from "../components/errorNotification";

export async function getIdAtendimento(protocolo) {
  try {
    const response = await axios.get(
      `http://localhost:8000/opa/?protocolo=${protocolo}`
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
