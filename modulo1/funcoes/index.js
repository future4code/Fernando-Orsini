//Exercícios de interpretação de código

//1)
//function minhaFuncao(variavel) {
//	return variavel * 5
//}

//console.log(minhaFuncao(2))
///console.log(minhaFuncao(10))
//a)5 e 10

//b)minhaFuncao
/*variavel	2
Return
value	10

minhaFuncao
variavel	10
Return
value	50*/

//2)
//let textoDoUsuario = prompt("Insira um texto");

//const outraFuncao = function(texto) {
//	return texto.toLowerCase().includes("cenoura")
//}

//const resposta = outraFuncao(textoDoUsuario)
//console.log(resposta)

//a)altera o texto do usuário para minúscula e inclui a palavra cenoura

//b)true, true e true.

//Exercícios de escrita de código
//1
//a) 

function imprimirDados() {
console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
return imprimirDados
}

//b)

function identificarPessoa (nome, idade, endereço, profissao){
const nome = Roberto 
const idade = "30".toString()
const endereço = Tailandia
const profissao = magico
const frase = ("Eu sou" + nome + "tenho" + idade + "moro na" + endereço + "e sou" + profissao) 
console.log(frase)
}

//2)
function somar(primeiroNumero,segundoNumero){
const primeiroNumero = 357
const segundoNumero = 878
const resultado = primeiroNumero + segundoNumero
return resultado
}

somar(resultado)
console.log(resultado)

//c)Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
//N sei como fazer isso

///d)

function escreverTexto(){
const texto = prompt("Digite um texto")	 
console.log(texto.toLowerCase())
console.log(texto.length)
return escreverTexto
}

//3)


function somar(primeiraEntrada, segundaEntrada){
const resultado = primeiraEntrada + segundaEntrada
return somar(resultado)
}

function subtrair(primeiraEntrada, segundaEntrada){
const resultado = primeiraEntrada - segundaEntrada
return subtrair(resultado)
}

function multiplicar(primeiraEntrada, segundaEntrada){
  const resultado = primeiraEntrada * segundaEntrada
  return multiplicar(resultado)
  }

  function dividir(primeiraEntrada, segundaEntrada){
    const resultado = primeiraEntrada / segundaEntrada
    return dividir(resultado)
    }
    const primeiraEntrada = promt("Digite um numero")
    const segundaEntrada = promt("Digite o segundo numero")
    
    somar()
    subtrair()
    multipllicar()
    dividir()
// está errado: Uncaught ReferenceError: promt is not defined at index.js:25
