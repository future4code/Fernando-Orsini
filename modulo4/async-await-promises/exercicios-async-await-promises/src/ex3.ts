//a. Se apenas trocarmos o retorno da função para: Promise<user[]> , teremos algum erro de tipagem?
//Não.

//b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado que ela retorne um Promise<any>. Explique com as suas palavras o porquê de fazermos isso
//Sim, pois o map mostra o ordenamento do array.

//c. Reimplemente a função, corretamente.
const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };

  