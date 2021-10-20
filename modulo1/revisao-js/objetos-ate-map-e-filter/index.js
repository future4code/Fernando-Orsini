/* //Objetos
const pessoa = {
    nome: "Letícia",
    idade: 27,
    generoMusical: "Rock"
}

console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical} `)

const outraPessoa = { 
    ...pessoa, 
    nome: "Amanda" 
}

console.log(outraPessoa) */

//Condicionais
/* 
const numero = Number(prompt("Digite um número"))

if (numero % 2 === 0){
    console.log("É par")
} else{
    console.log("É impar")
} */


//Condicionais
/* const bichinho = prompt("Digite um bichinho")

if (bichinho === "cachorro"){
    console.log("Auau")
} else if (bichinho === "gato"){
    console.log("Miau")
}else if (bichinho === "vaca"){
        console.log("Muuu")
    } else {
    console.log("Barulho não encontrado")
    } 


    switch(bichinhos){
        case "cachorro":
            console.log("Au au")
            break;
        case "gato":
        console.log("Miau")
            break;
        case "vaca":
             console.log("Muuu")
             break;
        default:
            console.log("Barulho não encontrado")    

    } */


    //

//Laços
//Exercício 11

/* const numeros = [11, 15, 18, 14, 12, 13, 100]

let maior = -Infinity

let i = 0
while (i<numeros.length){
    if (numeros[i] > maior){
        maior = numeros[i]
    }
    i++
} */

/* const numeros = [11, 15, 18, 14, 12, 13, 100]

let maior = -Infinity

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > maior){
        maior = numeros[i]
    }
} */ 


/* const numeros = [11, 15, 18, 14, 12, 13, 100]
let maior = -Infinity
for (let numero of numeros){
    if(numero > maior){
        maior = numero
    }
}
 */
console.log(`O maior número é ${maior}`)
