//a. Qual endpoint você deve utilizar para isso?
//GET

//b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
//const getAllSubscribers = async (): Promise<subscriber[]> => {
    const getAllSubscribers = async (): Promise<subscriber[]> => {
        const response = await axios.get(`${baseURL}/subscribers`)
        return response.data
      }
//c. Implemente uma função nomeada que faça o que foi pedido.
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
  };