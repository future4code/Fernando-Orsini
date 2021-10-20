
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

/* function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2)); */

// b-)Compare a igualdade entre a===b
const a = "beterraba"
const b = "batata"
function checarIgualdade(a, b) {
    //  Sua lógica aqui
    return `No comparador de igualdade ${a}===${b} é ${a === b}` 
}
console.log(checarIgualdade(a, b));


// c-)Faça uma função chamada "verificaSeEMaior"

console.log(verificaSeEMaior(321, 2156));
const num1 = 321
const num2 = 2156
function verificaSeEMaior (num1, num2) {
 
return `verifica qual número é maior ${num1}>${num2} é ${num1 > num2}`
}
console.log(verificaSeEMaior(num1, num2))
// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false 
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true 




// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

/* const cadastro = () => { */
    

    //  Sua lógica aqui
    const nome = prompt("Qual o seu nome?")
    const idade = prompt("Qual a sua idade?")
    const senha = prompt("Qual a sua senha? Ela precisa conter 6 caracteres")
    const nacionalidade = prompt("Qual a sua nacionalidade?")
    const usuario = [nome,senha, idade, nacionalidade]
    if (idade >= 18 && senha.lengh === 5 && nacionalidade === "brasileiro" || "brasileira"){
        console.log("Você pode se cadastrar")
    }else{
    console.log("Você não pode se cadastrar") 
}

/* console.log(cadastro()); */

