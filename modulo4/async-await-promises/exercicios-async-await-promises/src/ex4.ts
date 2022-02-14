//a. Qual é o tipo dessa função? Por quê?
//????

//b. Implemente a função solicitada
async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }
  