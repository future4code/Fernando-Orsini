//Arrays

/* const listaDeCompras = ["batata", "cenoura", "beterraba"]

console.log(listaDeCompras[1])
console.log(listaDeCompras.length)
listaDeCompras.push("Mandioca")
console.log(listaDeCompras)
console.log("Tem cenoura?", listaDeCompras.includes("cenoura"))
listaDeCompras.splice(1,1)
console.log(listaDeCompras)
 */

//Funções

const array = [6, 7, 8, 9, 10]

function divideDois1 (arrayDeNumeros){
    const primeiro = arrayDeNumeros[0] / 2
    const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2
    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
    return arrayDeNumeros

}

let divideDois2 = function (arrayDeNumeros){
    const primeiro = arrayDeNumeros[0] / 2
    const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2
    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
    return arrayDeNumeros
}

let divideDois3 = (arrayDeNumeros) => {
    const primeiro = arrayDeNumeros[0] / 2
    const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2
    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[arrayDeNumeros.length-1] = ultimo
    return arrayDeNumeros
}


console.log(divideDois1(array))
console.log(divideDois2(array))
console.log(divideDois3(array))