// http://localhost:8000/opa/?protocolo=
import axios from "axios";

export async function getIdAtendimento(protocolo){
  try {
    const response = await axios.get(`http://localhost:8000/opa/?protocolo=${protocolo}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}