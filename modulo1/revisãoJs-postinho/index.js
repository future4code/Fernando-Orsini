
// // COMPARADORES
// // Exercício 1------------------------------------------------------------------------------------

// // a-)Comparador de desigualdade a!==b 
// // Exemplo:

// /* function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 2)); */

// // b-)Compare a igualdade entre a===b

// /* const a = "beterraba"
// const b = "batata"
// function checarIgualdade(a, b) {
//     //  Sua lógica aqui
//     return `No comparador de igualdade ${a}===${b} é ${a === b}` 
// }
// console.log(checarIgualdade(a, b));


// // c-)Faça uma função chamada "verificaSeEMaior"

// console.log(verificaSeEMaior(321, 2156));
// const num1 = 321
// const num2 = 2156
// function verificaSeEMaior (num1, num2) {
 
// return `verifica qual número é maior ${num1}>${num2} é ${num1 > num2}`
// }
// console.log(verificaSeEMaior(num1, num2)) */
// // Exercício 2------------------------------------------------------------------------------------
// //Escreva true or false para as comparações abaixo:
// // exemplo 1>2 = false
// // a-) 1==='1'= false 
// // b-) 1=='1'= true
// // c-) 'a'==='b'= false
// // d-) 'b'>'a'= true
// // e-) 0!==null= true 




// // CONDICIONAIS

// // Exercício 3------------------------------------------------------------------------------------

// /* const cadastro = () => { */
    

//     //  Sua lógica aqui
// //     const nome = prompt("Qual o seu nome?")
// //     const idade = prompt("Qual a sua idade?")
// //     const senha = prompt("Qual a sua senha? Ela precisa conter 6 caracteres")
// //     const nacionalidade = prompt("Qual a sua nacionalidade?")
// //     const usuario = [nome,senha, idade, nacionalidade]
// //     if (idade >= 18 && senha.lengh === 5 && nacionalidade === "brasileiro" || "brasileira"){
// //         console.log("Você pode se cadastrar")
// //     }else{
// //     console.log("Você não pode se cadastrar") 
// // }

// /* console.log(cadastro()); */

// // Exercício 4-----------------------------------------------------------------------------------------------
 
// /* const login = () => {
//     const login = "labenu" 
//     //  Sua lógica aqui
//     const longinCadastrado = "fear-of-missing-out"
//     const loginDoUsuario = prompt("Digite sua senha")
//     const definirSenhaValida = (loginDoUsuario, longinCadastrado) => {
//     if (loginDoUsuario===longinCadastrado){
//         console.log("Usuário logado")
//     }else{
//         console.log("Senha inválida")
//     } 
//  */     
    


// /* console.log(login()); */

// // Exercício 5----------------------------------------------------------------------------------------------------

// /* const primeiraDose = () => {
// //Escreva uma função que receba do usuário seu nome, e o nome da vacina que tomou. 
// //E retorne a mensagens a seguir dependendo da vacina tomada. 
// `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
//     //  Sua lógica aqui */
// // const nomeDoUsuario = prompt("Qual o seu nome?")
// // const vacina = prompt("Que vacina você tomou?")
// // let tempo
// // let data
// // const coronavac
// // const astrazeneca
// // const pfizer 
// // function receberDados(nomeDoUsuario, vacina)
// //  }





//  //a partir daqui, cóodigo da monitora Clara Meirelles
 
//  ///function calcularDias(mes) {
//     // variavel que guarda os dias que tem o mês
//  //   let diasNoMes
//     // condicional para ver quantos dias tem no mês
// //     if (mes === 01 || mes === 03 || mes === 05 || mes === 07 || mes === 08 || mes === 10 || mes === 12) {
// //         diasNoMes = 31
// //     } else if (mes === 02) {
// //         diasNoMes = 28
// //     } else {
// //         diasNoMes = 30
// //     }
// //     return diasNoMes
// // }
// //function calcularTempoParaSegundaDose(nome, vacina, dia, mes) {
// //    let tempo
//     // Aqui entra a condicional de nome da vacina e dias para segunda dose, que a Tay fez ontem
//     // Depois é só chamar a função de contar dias no mes pra calcular certinho
//     // exemplo com a coronavac:
//     // if (vacina === "coronavac") {
//     //     tempo = 28
//     // }else if(vacina === "astrazeneca"){
//     //         tempo = 90
//     // }else if(vacina === "pfizer"){
//     //         tempo = 90

        
//         // Exemplo de chamada da função pra calcular dias com o mês fornecido na chamada
//         // const mesDaVacina = calcularDias(mes)
//         // if (tempo + dia > mesDaVacina) {
//             // no caso da coronavac, como é menos de um mês, não precisaria fazer essa chamada aqui, 
//             //ela está como um exemplo de como reutilizar a função de dias
// //            const mesDaSegundaDose = calcularDias(mes + 1)
//             // calcular dias que faltam no mes
// //            const calculoData = mesDaVacina - dia
// ​
//             // data exibida como "13/11", daria pra tratar melhor trazendo o nome do mês na condicional, no lugar de números
//  //           const data = `${calculoData}/${mes + 1}`
//  //           console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
// //         }
// // ​
// //     }
// //}

// // Exercício 6 -------------------------------------------------------------------------------------
// //Escreva uma função para validar a segunda dose de um usuário, que receba o nomeDoUsuário e 
// //mude o valor da propriedade imunização para “completa” para isso vamos te fornecer uma lista de usuários.
// /* 
// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
//     return usuarios
// } 
    
//     const aquiEstaOValorDoReturn = segundaDose( )
    

// let i

// let imunizacao


// const validarSegundaDose = (usuarios) => {
//     for(let i = 0; i < usuarios.length; i++) {
//         if (usuarios[i].imunizacao === "incompleta"){
//             usuarios[i].imunizacao = "completa" 
//         }
//     }
//         console.log(usuarios)
//         return usuarios
// }

// validarSegundaDose(aquiEstaOValorDoReturn)
// console.log(imunizacao)
//  */

// //7) As pessoas que tomaram a primeira dose da vacina, não voltaram no postinho para a segunda dose 
// //e temos que enviar uma mensagem para elas no app.
// //Escreva uma função que leia a lista de usuários e verifique se a imunização está completa ou não e 
// //caso não esteja completa,  imprima no console uma mensagem avisando que ele deve voltar ao posto para 
// //tomar a segunda dose

// //`Olá ${n.nome}! Sua imunização está ${n.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`

// // const produtos = [
// //     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
// //     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
// //     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
// //     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
// //     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
// //     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
// //     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
// //     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
// //     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
// //     { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
// //  ]

// //  const produtosComDesconto = produtos.map((prod)=>{
// //     return {...prod, preco: (prod.preco*0.9).toFixed(2)}

// //     }) 
// //  console.log(produtosComDesconto)

// //  const hortifruti = produtos.filter((prod)=>{
// //     return prod.categoria === "Hortifruti"
// //  })

// //  console.log(hortifruti)

// //  const hortifrutiComDesconto = produtos.filter((prod) => {
// //     return prod.categoria === "Hortifruti"
// //  }).map((prod)=>{
// //     return {...prod, preco: (prod.preco*0.9).toFixed(2)}
// //  })

// //  console.log(hortifrutiComDesconto)
const usuarios = [
    { nome: "Artur", imunizacao: "incompleta" },
    { nome: "Barbara", imunizacao: "completa" },
    { nome: "Carlos", imunizacao: "incompleta" }
]
let usuariosAtrasados
const atrasados =  usuarios.filter((usuariosAtrasados) => {
    return usuarios.imunizacao === "incompleta"
})
console.log(atrasados)
