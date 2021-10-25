// Exercício 7 --------------------------------------------------------------------------------------
//As pessoas que tomaram a primeira dose da vacina, não voltaram no postinho para a segunda dose e temos que enviar uma mensagem 
//para elas no app. Escreva uma função que leia a lista de usuários e verifique se a imunização está completa ou não e caso não esteja
// completa,  imprima no console uma mensagem avisando que ele deve voltar ao posto para tomar a segunda dose.
const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    return usuarios

}
    const imunizacaoatrasados = usuarios.filter((imunizacao => {
        if (imunizacao ==== "completa"){
         console.log("")     
        }
        
    })
    







`Olá ${n.nome}! Sua imunização está ${n.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
console.log(avisoAosAtrasados());


// aula de loop, map e filter

// EXERCÍCIO 11
 const numeros = [11, 15, 18, 14, 120, 13, 100]

let i = 0
let maior = -Infinity
/* while(i < numeros.length){
   if(numeros[i] > maior){
      maior = numeros[i]
   } 
   i++

}

console.log(`O maior número é ${maior}`) */

/* for(let i = 0; i < numeros.length; i++){
   if(numeros[i] > maior){
      maior = numeros[i]
   }
}

console.log(`O maior número é ${maior}`) */

/* for (let numero of numeros){
   if(numero > maior){
      maior = numero
   }
}

console.log(`O maior número é ${maior}`) */
//----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 12
/* const prof = {
    nome: "Letícia Chijo",
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
    contaPiada: () => console.log("É pave ou pacume?"),
    pet: {
        nome: "Polly",
        especie: "cachorrinha",
        raca: "Lhasa Apso",
        snacksFavoritos: ["biscoito", "maçã", "frango"]
     }
  } */

/* primeiro modo como a instrutora resolveu a questão:

const verificaAula(aula) => {
     
}

if (aulasFront){
   aulasFront = "Dou"
}else{
   aulasFront = "Não dou"
} */  

 /*  const verificaAula =(aula) => {
   if (aula){
      return "Dou"
   } else {
      return "Não dou"
  }
}
  
const aulasBack = verificaAula(prof.aulasBack)  
const aulasFront = verificaAula(prof.aulasFront)
const jogos = []

for (let i = 1; i <= prof.jogosFavoritos.length; i++){
   jogos.push(`${i} ${prof.jogosFavoritos[i-1]}`)
}
console.log(jogos)
  const frase  = `Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos
${aulasFront} aulas de front e ${aulasBack} aulas de back.
Meus jogos favoritos são: ${jogos}
Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos [1]}
`
console.log(frase)
 */




  //----------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 13
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
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
 ]

 const produtosComDesconto = produtos.map((prod)=>{
    return {...prod, preco: (prod.preco*0.9).toFixed(2)}

    }) 
 console.log(produtosComDesconto)

 const hortifruti = produtos.filter((prod)=>{
    return prod.categoria === "Hortifruti"
 })

 console.log(hortifruti)

 const hortifrutiComDesconto = produtos.filter((prod) => {
    return prod.categoria === "Hortifruti"
 }).map((prod)=>{
    return {...prod, preco: (prod.preco*0.9).toFixed(2)}
 })

 console.log(hortifrutiComDesconto)
