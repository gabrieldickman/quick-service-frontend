import axios from "axios";
import { handleError, errorMessage } from "../errors/handleErrors";
import { showNotification } from "../components/errorNotification";

export async function getIdAtendimento(protocolo) {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `http://localhost:8000/api/v1/opa/?protocolo=${protocolo}`,{
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
      // const errStatus = error.response.status;
      // showNotification(handleError(errStatus));
      console.error("Ocorreu um erro na requisição!");
    }
  }
}
