import axios from "axios";

export async function searchClientInfos(idContrato) {
  try {
    const response = await axios.get(
      `http://localhost:8000/cliente/radius/?idCliente=${idContrato}`
    );
    return response.data.data;
  } catch (error) {
    const data = error.response?.data || {};
    console.error(
      `Erro ao buscar cliente. Código do erro: ${data.code || "N/A"}, Mensagem: ${data.message || "Erro desconhecido"}`
    );
    throw new Error(data.message || "Erro ao buscar cliente");
  }
}
