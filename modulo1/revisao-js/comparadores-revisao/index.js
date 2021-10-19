//Revisão comparadores

const numeroSorteado = Math.floor(Math.random()*6+1)
const numeroRecebido = Number(prompt("Insira um numero de 1 a 10"))

console.log(`O número sorteado foi: ${numeroSorteado}`)

if (numeroRecebido === numeroSorteado){
    console.log("Seu numero é igual ao número sorteado!")

}   else if (numeroRecebido > numeroSorteado){
    console.log("Seu número é maior que o número sorteado!")

}   else {
    ("Seu número é menor do que o número sorteado!")
}