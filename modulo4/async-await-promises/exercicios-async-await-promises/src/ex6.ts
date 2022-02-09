//a. O que o Promise.all faz?
//É um método que permite realizar várias Promises e recebe um array de respostas, deste modo, melhora a perfomance.

//b. Quais as vantagens de se utilizar o Promise.all no caso de se enviar as notificações para todos os usuários?
//A vantagem é que recebe um array de respostas.

//c. Reimplemente a função utilizando Promise.all
const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseUrl}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };