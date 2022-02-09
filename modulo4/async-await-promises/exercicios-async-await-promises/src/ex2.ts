//a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona
// A arrow function não contém a palavra "function"

//b. Implemente a função solicitada, usando arrow function
const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
  };