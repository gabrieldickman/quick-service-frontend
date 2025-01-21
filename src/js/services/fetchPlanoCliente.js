import axios from "axios";

export async function getPlanoClient(planoCliente) {
  try {
    const response = await axios.get(`http://localhost:8000/cliente/plano/?idContrato=${planoCliente}`);
    return response.data.data
  } catch (error) {
    console.log(error);
  }
}
