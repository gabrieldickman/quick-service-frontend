
export const errorMessage = {
  400: "Requisição inválida. Informe um dado para buscar.",
  401: "Token não encontrado. Verifique suas credenciais.",
  403: "Informações inacessíveis. Conecte-se na rede da Brasil Digital",
  404: "Cliente não encontrado.",
  500: "Erro interno. Verifique se o atendimento contém as TAGs necessárias.",
  502: "Bad Gateway. Problema na comunicação com o servidor.",
  503: "Serviço indisponível. O servidor está fora do ar.",
  504: "Gateway Timeout. O servidor demorou para responder.",
};

export function handleError(errStatus) {
  switch (errStatus) {
    case 400:
      return errorMessage[400]
      break;
    case 401:
      return errorMessage[401];
      break;
    case 403:
      return errorMessage[403];
      break;
    case 404:
      return errorMessage[404];
      break;
    case 500:
      return errorMessage[500];
      break;
    case 502:
      return errorMessage[502];
      break;
    case 503:
      return errorMessage[503];
      break;
    case 504:
      return errorMessage[504];
      break;
    case 505:
      return errorMessage[505];
      break;
    default:
      return "Erro desconhecido";
      break;
  }
}