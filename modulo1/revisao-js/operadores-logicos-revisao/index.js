//Operadores lógicos

const idade = Number(prompt("Digite sua idade"))
const altura = Number(prompt("Digite sua altura em centímetros"))
const temProblemaCardiaco = prompt("Você tem algum problema cardíaco? S/N")

if (idade >=18 && altura >=160 && temProblemaCardiaco === "N"){
    console.log("Pode entrar")

} else {
    console.log("Não pode entrar")
}
