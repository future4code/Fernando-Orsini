/////////////////////////////////////// EXEMPLO 1 ///////////////////////////////////////

// let i = 0

// while(i < 10){
//   console.log(i)

//    i++
// }

/////////////////////////////////////// EXEMPLO 2 ///////////////////////////////////////

// let coxinhasNoEstomago = 0

// while(coxinhasNoEstomago < 100){
//   console.log("Quero mais coxinha!!!!!")

//   coxinhasNoEstomago = coxinhasNoEstomago + 10

// }

/////////////////////////////////////// EXERCÍCIO 1 ///////////////////////////////////////

// let numero = Number(prompt("Digite um número"))
// let total = 0

// while (numero !== 0) {
//    total = total + numero
//    numero = Number(prompt("Digite outro número"))
// }

// console.log(total)

/////////////////////////////////////// EXEMPLO 3 ///////////////////////////////////////

// for (
//    let i = 0;
//    i < 10;
//    i += 4
// ) {

//    console.log(i)
// }

/////////////////////////////////////// EXEMPLO 4 ///////////////////////////////////////

// let total = 0

// for (
//    let i = Number(prompt("Digite um número"));
//    i !== 0; // 0 == "0"
//    i = Number(prompt("Digite um número"))
// ) {

//    total = total + i
// }

// console.log(total)

// i++ -> i = i + 1

/////////////////////////////////////// EXEMPLO 5 ///////////////////////////////////////

// const numeros = [ 14, 67, 89, 15, 23 ] 

// for( let i = 0; i < numeros.length; i++){
//   const numero = numeros[i]
//   console.log(numero)
// }

/////////////////////////////////////// EXERCÍCIO 2 ///////////////////////////////////////

// function buscarMaiorElemento(array){
//    let maior = array[0]

//    for( let i = 1; i < array.length; i++){
//       if(array[i] > maior){
//          maior = array[i]
//       }
//    }

//    return maior
// }

// const numeros = [ 14, 67, 89, 15, 23 ] 

// const maiorNumero = buscarMaiorElemento(numeros)

// console.log(maiorNumero)

/////////////////////////////////////// EXEMPLO 6 ///////////////////////////////////////

// const numeros = [ 14, 67, 89, 15, 23 ] 

// for( let numero of numeros){
//   console.log(numero)
// }

/////////////////////////////////////// EXEMPLO 7 ///////////////////////////////////////

// function buscarMaior(array){
//    let maior = array[0]

//    for( let numero of array){
//       if(numero > maior){
//          maior = numero
//       }
//    }

//    return maior
// }

/////////////////////////////////////// EXERCÍCIO 3 ///////////////////////////////////////

// const palavras = ["Oi", "sumido", "tudo", "bom?", "Saudades"]

// function imprimirMensagem(array){
//   let mensagem = ""
  
//   for(let palavra of array){
//     mensagem += " " + palavra
    
//   }
  
//   mensagem.trim()
//   console.log(mensagem)
// }

// imprimirMensagem(palavras)

//Exercícios de interpretação de código

//1)
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// imprimiu 10. 

//2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

//a)todos os números do array.

//b) ???

//3

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

//Exercícios de escrita de código

//1  ???

//2  ???
