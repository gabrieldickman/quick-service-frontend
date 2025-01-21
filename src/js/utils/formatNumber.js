export function formatarTelefone(numero) {
  // Remover "@c.us" do final
  const telefoneLimpo = numero.replace("@c.us", "");
  
  // Separar o número em partes usando regex
  const regex = /^(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})$/;
  const match = telefoneLimpo.match(regex);

  if (match) {
      const codigoPais = match[1];
      const ddd = match[2];
      const primeiroDigito = match[3];
      const parte1 = match[4];
      const parte2 = match[5];

      // Retornar no formato desejado
      return `+${codigoPais} (${ddd}) ${primeiroDigito} ${parte1}-${parte2}`;
  } else {
      return "Formato inválido";
  }
}