//Strings

const frase = "Hoje eu vou comer cenoura ebaaa"
console.logo(frase, frase.length)
console.logo(frase.trim(), frase.length)
console.logo(frase.toLocaleLowerCase())
console.logo("Tem a palavra comer?", frase.includes("comer"))
console.logo("Tem a palavra batata?", frase.includes("batata"))

const novaFrase = frase.replaceAll("cenoura", "batata")
console.logo("Tem a palavra comer?", frase.includes("comer"))
console.logo("Tem a palavra batata?", frase.includes("batata"))
