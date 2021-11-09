//Exercícios de interpretação de código

/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
 */
 //A) tudo o que tem no array: item, index, array

 //2  somente o nome dos usuários

 //3
 //A) os apelidos dos usuários

 //Exercícios de escrita de código

 //1

 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
 const listarNomesDosPets = (pet) => {
          return pet.nome === "item"
      }
   
      const nomesDosPets = pets.filter(listarNomesDosPets)
  console.log(listarNomesDosPets)

  const listarNomesDosPets = (pet) => {
    return pet.nome
  }
      
  const nomesDosPets = pets.map(listarNomesDosPets)

  
  //b) 
 
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const listaDeSalsichas = pets.map((item, index, array) => {
     return item.raca 
 }) 

 console.log(listaDeSalsichas)

 //c)

 /*const listaDosPoodles = pets.filter(selecionarOsPoddles).map(pegarNomeDosPoodles) => {

 }

 console.log(listaDosPoodles)*/
 //está errado

 //2

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 
 //a) Crie um novo array que contenha apenas o nome de cada item

 const novoArraySupermarket = produtos.filter((item, index, array) => {
    return item = (nome) 
 })
 
 console.log(novoArraySupermarket)

 //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
 //aplicando 5% de desconto em todos eles

 //???

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const novoArrayBebidas = produtos.filter((item, index, array) => {
    return produtos.item === "Bebidas"
 })
 
 console.log(novoArrayBebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const novoArrayYpe = produtos.filter(("Ypê") => {

}
    return produtos.nome === "Ypê"
 
{ 
console.log(novoArrayYpe)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
//???