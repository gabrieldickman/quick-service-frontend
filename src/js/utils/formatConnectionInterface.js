export function formatConnectionString(interfaceConexao) {
  let partes;

  if (interfaceConexao.includes(":")) {
    partes = interfaceConexao.split(":");
  } else if (interfaceConexao.includes(".")) {
    partes = interfaceConexao.split(".");
  } else {
    console.error("Formato desconhecido na string de conexão");
    return [];
  }

  return partes;
}