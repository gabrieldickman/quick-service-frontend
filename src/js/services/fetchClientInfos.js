import axios from "axios";
import { handleError, errorMessage } from "../errors/handleErrors";
import { showNotification } from "../components/errorNotification";
const backendIp = process.env.REACT_APP_BACKEND_IP || 'localhost:8000';

export async function searchClientInfos(idContrato) {
  try {
    const token = sessionStorage.getItem("token");

    const response = await axios.get(
      `https://${backendIp}/api/v1/cliente/radius/?idCliente=${idContrato}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
