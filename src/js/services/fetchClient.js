import axios from "axios";

const searchButton = document.querySelector("#buscar_cliente");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();

  const idContrato = document.querySelector("#id_contrato").value;

  axios
    .get(`http://localhost:8000/cliente/radius/?idCliente=${idContrato}`)
    .then((response) => {
      document.querySelector("#login_pppoe").value =
        response.data.data[0].login;
      document.querySelector("#senha_pppoe").value =
        response.data.data[0].senha;

      const interfaceConexão = response.data.data[0].interfaceConexão;
      const partes = interfaceConexão.split(":");

      document.querySelector("#mac_equipamento").value = partes[0];
      document.querySelector("#nome_olt").value = partes[1];
      document.querySelector("#slot").value = partes[2];
      document.querySelector("#pon").value = partes[3];

      const planoCliente = document.querySelector("#plano_cliente");

      axios
        .get(
          `http://localhost:8000/cliente/plano/?idContrato=${planoCliente.value}`
        )
        .then((response) => {
          planoCliente.value = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
});
