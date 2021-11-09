console.log("Bom dia, Carver!");

//--------------------------- EXEMPLOS -------------------------------//

// IF
// const condicao1=false

// if(condicao1){
//     // execução do código
//     console.log("entrei no if");
// }

// IF/ELSE

// const valor1=6
// const valor2="6"
// // const condicao1=false

// if(valor1===valor2){
//     // execução do código
//     console.log("entrei no if");
// }else{
//     console.log("entrei no else");
// }

// IF/ELSE IF


// const clima = prompt("Que clima está fazendo aí na sua região?").toLowerCase()

// if (clima==="quente"){
//     console.log("Coloque uma regata e beba muita água");
// } else if(clima==="frio"){
//     console.log("Coloque um casaco");
// } else if(clima==="nevando"){
//     console.log("Não saia de casa! É fria!");
// }else if(clima==="chovendo"){
//     console.log("leve um guarda-chuva, menine")
// }else{
//     console.log("Insira um clima válido")
// }

// SWITCH/CASE

// const clima = prompt("Que clima está fazendo aí na sua região?").toLowerCase()

// switch (clima) {
//     case "quente":
//         console.log("Coloque uma regata e beba muita água")
//         break;
//     case"frio":
//         console.log("Coloque um casaco")
//         break;
//     case "nevando":
//         console.log("Não saia de casa! É fria!")
//         break;
//     case"chovendo": 
//         console.log("leve um guarda-chuva, menine") 
//         break
//     default:
//         console.log("Insira um clima válido")    


// }

// CONDICIONAIS E OPERADORES LÓGICOS

// const condicao1= false
// const condicao2= true

// !É NEGAÇÃO, RETORNA O OPOSTO: SE TRUE RETORNA FALSE E SE FALSE RETORNA TRUE

// if(!condicao1){
//     console.log("Entrei no if");
// }else{
//     console.log("Entrei no else");
// }

// && E

// if(!condicao1 && condicao2){
//     console.log("Entrei no if");
// }else{
//     console.log("Entrei no else");
// }

// || OU

// if(condicao1 || !condicao2){
//     console.log("Entrei no if");
// }else{
//     console.log("Entrei no else");
// }

//--------------------------- EXERCICIO 1 ----------------------------//
/*Crie uma função que:
● Recebe 2 números (chamaremos de num1 e num2)
● Compara esses números entre si:
○ Se os números forem iguais, retorna uma mensagem
de sucesso
Depois, chame a função com números que foram inseridos
pelo usuário através do prompt*/


// function comparaNumeros(num1, num2){

//     console.log('entrei na função');

//     if(num1===num2){
//         console.log("os números são iguais");
//     }

// }

// const numeroUsuario1 = prompt("insira um número")

// const numeroUsuario2 = prompt("insira um segundo número")

// comparaNumeros(numeroUsuario1, numeroUsuario2)


//--------------------------- EXERCICIO 2 ----------------------------//

/*Crie uma função que:
● Recebe 2 números (chamaremos de num1 e num2)
● Compara esses números entre si:
○ Retorna mensagens dizendo se os números são
iguais ou diferentes
Depois, chame a função com números que foram inseridos
pelo usuário através do prompt*/


// function comparaNumeros(num1, num2){

//     console.log('entrei na função');

//     if(num1===num2){
//         console.log("os números são iguais");
//     }else{
//         console.log("os números são diferentes");
//     }

// }

// const numeroUsuario1 = prompt("insira um número")

// const numeroUsuario2 = prompt("insira um segundo número")

// comparaNumeros(numeroUsuario1, numeroUsuario2)
//--------------------------- EXERCICIO 3 ----------------------------//

/*Crie uma função que:
● Recebe 2 números (chamaremos de num1 e num2)
● Compara esses números entre si:
○ Retorna mensagens dizendo se o primeiro número é
{maior/menor/igual} ao segundo número
Depois, chame a função com números que foram inseridos
pelo usuário através do prompt*/

// const comparaNumeros=(num1, num2)=>{
    

//     if(num1>num2){
//         console.log("O primeiro número é maior que o segundo número ")
//     }else if(num1<num2){
//         console.log("O primeiro número é menor que o segundo número")
//     }else{
//         console.log("Os dois números são iguais")
//     }


// }

// const numerousUario1 = Number(prompt("Digite o primeiro número"))

// const numerousUario2 = Number(prompt("Digite o segundo número"))

// comparaNumeros(numerousUario1, numerousUario2)
//--------------------------- EXERCICIO 4 ----------------------------//
/*Escreva um programa que receba
o Pokémon inicial escolhido pela
pessoa e retorna o seu tipo:
● Bulbasauro (Planta e Veneno)
● Charmander (Fogo)
● Squirtle (Água)*/

// const pokemonUsuario = prompt("Digite um pokemon entre as opções 'Bulbasauro','Charmander' e 'Squirtle'.").toLowerCase()

// const verificaPokemon=(pokemon)=>{

//     switch(pokemon){
//         case"bulbasauro":
//             console.log("Tipo: Planta e Veneno");
//             break
//         case "charmander" :
//             console.log("Tipo: Fogo");
//             break
//         case"squirtle":    
//             console.log("Tipo: Água");
//             break  
//         default:
//             console.log("Insira um pokemon válido")      
    
//     }

// }

// verificaPokemon(pokemonUsuario)



//--------------------------- EXERCICIO 5 ----------------------------//
/*Uma pessoa pode estudar em uma faculdade se:
● Tiver concluído o ensino médio
● Tiver 18 anos ou mais
● Não estiver cursando outra faculdade
Escreva uma função que receba estes parâmetros e devolva
se a pessoa pode ou não estudar nesta faculdade. Receba os
dados do usuário pelo prompt e execute a função*/

// const podeEstudarAqui=(concluiuEnsinoMedio, temMaisDe18, estaCursandoFaculdade )=>{

//     if(concluiuEnsinoMedio && temMaisDe18 && !estaCursandoFaculdade){
//         console.log("Pode estudar na nossa faculdade")
//     }else{
//         console.log("Ahhh, infelizmente as condições não foram atendidas para estudar aqui.")
//     }

// }
// const concluiuEnsinoMedioUsuario = prompt("Você terminou o ensino médio? Sim/Não").toLowerCase()==="sim"
// const temMaisDe18Usuario = prompt("Tem mais de 18 anos? Sim/Não").toLowerCase()==="sim"
// const estaCursandoFaculdadeUsuario = prompt("Você está cursando alguma faculdade? Sim/Não").toLowerCase()==="sim"


// podeEstudarAqui(concluiuEnsinoMedioUsuario, temMaisDe18Usuario, estaCursandoFaculdadeUsuario)

//Exercícios de interpretação de código
//1)
/*  
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
a) Explique o que o código faz. Qual o teste que ele realiza? 
Ele quer saber se o número não tem resto da divisão.
b) Para que tipos de números ele imprime no console "Passou no teste"? 
números inteiros
c) Para que tipos de números a mensagem é "Não passou no teste"?
números com resto de divisão */

//2 

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
/*a) Para que serve o código acima?
uma seção do site para frutas
b)Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
O preço da fruta maçã é R$ 2.25
c) O preço da fruta  Pêra  é  R$  5
*/
/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
a) pedindo o primeiro número do usuário
b) 10 é maior que zero, então true. -10 é menor que zero então false.*/

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/
/*c) erro: Uncaught ReferenceError: mensagem is not defined at. -10 não 
faz parte do escopo de números maiores que zero*/

/*Exercícios de escrita de código
1)*/

const idade = Number(prompt("Qual a sua idade?"))

if(idade >= 18) {
  console.log("Você pode dirigir")
}
else
console.log("Você não pode dirigir.")

//2 ESTÁ ERRADA
/*
const turno = prompt("Em que turno você estuda?")

}if(turno === M  
  console.log("Bom dia!")
}
else

if(turno === V  
    console.log("Boa tarde!")
  
  else
  if(turno ===M  {
    console.log("Boa noite!")
  }
  else
} */

//3 ESTÁ ERRADA
/*
const turno = prompt("Qual o seu turno?")
const turno 
switch (fruta) {
  case M === "Bom dia!"
    break;
  case V === "Boa tarde!"
    break;
  case N === "Boa noite"
     
    break;
  
  default:
    
    console.log("turno não encontrado")    
} */

//4) 
const filme = prompt("Que gênero de filme você quer assistir")
const ingresso = prompt ("Quanto você pode pagar pelo ingresso?")
if (filme === "fantasia"){
}else if (ingresso=== 15){
  console.log ("Bom filme!")
}else console.log("Escolha outro filme :(")



 




    