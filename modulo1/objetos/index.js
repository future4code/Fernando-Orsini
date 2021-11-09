//Exercícios de interpretação de código
//1
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco["Matheus Nachtergaele"])
console.log(filme.elenco[filme.elenco.length - 1])
//não sei o que vai imprimir
console.log(filme.transmissoesHoje[2])
console.log(filme.transmissoesHoje["Canal Brasil"])

//2
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
//A
console.log(cochorro)
console.log(goto)
console.log(tortorugo)
//B sintaxe de spread ou espalhamento

//3
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}
//A
console.log(minhaFuncao(pessoa, false))
console.log(minhaFuncao(pessoa, "altura"))
//nada está sendo impreso no meu console

//Exercícios de escrita de código
const pessoa = {
    nome: "Fernando", 
    apelidos: ["Fernandinho", "Nando", "Fê"]
 }
