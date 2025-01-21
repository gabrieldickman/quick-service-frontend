export function formatarData(dataIso) {
    // Criar um objeto Date a partir da string ISO
    const data = new Date(dataIso);

    // Extrair o dia, mês e ano
    const dia = String(data.getDate()).padStart(2, '0'); // Garantir 2 dígitos
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // getMonth() retorna 0-11
    const ano = data.getFullYear();

    // Retornar no formato desejado
    return `${dia}/${mes}/${ano}`;
}