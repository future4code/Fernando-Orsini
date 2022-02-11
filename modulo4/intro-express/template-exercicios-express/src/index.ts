import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
//middlewares: uma camada no meio de duas aplicações, ou seja, uma camada que ajuda duas aplicações, partes, sistemas, a se comunicarem.

//Serve para facilitar ou tornar viável essa comunicação. Pensamos em interfaces, converter dados e formatos, prover protocolos, dentre outros.

//Serve então para prover ou facilitar o a comunicação entre duas aplicações, que podem ser de plataformas diferentes e tecnologias diferentes.
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
   });

   //Exercício 1
   app.get("/", (req, res) => {          
    res.send("Hello from Express")
  })


  export type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
  } 

//Exercício 3

export const users: User[] = [
    {
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",  
    },
    {
        id: 2,
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",  
    },
    {
        id: 3,
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
        website: "ramiro.info",  
    },
]

//Exercício 4
app.get("/users", (req, res) => {
    res.send(users)
})

//Exercícios 5 e 6
// Justificativa: devem ser armazenados em arrays separados para facilitar a manipulação

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}


export const posts: Post[] = [
    {
        userId: 1,
        id: 11,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 2,
        id: 22,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        userId: 3,
        id: 33,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
  ]

  //Exercício 7
  app.get("/users/:id/posts", (req, res) => {
      res.send(posts)
  })
 
//Exercício 8
app.get("/users/:id/posts", (req, res) => {
    const userId = Number(req.params.id)

    const result = posts. filter(post => {
        if (post.userId === userId) {
            return true
        } else { 
            return false
        }
    })

    res.send(result)
})