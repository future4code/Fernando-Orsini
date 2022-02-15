//Exercício 4
  //a) Crie um arquivo chamado exercicio-4.ts , cole o código abaixo e 
  //use comentários para responder as questões.

  //b) Como você faria, já com a extensão instalada, para transpilar
  //(converter) esse arquivo typescript em um arquivo javascript?
  //Correção:// usaria o comando tsc ./src/exercicio4.ts ou colocaria ./src em rootDir

  //b) E se este arquivo estivesse dentro de uma pasta chamada src. 
  //O processo seria diferente? Se sim, descreva as diferenças.
  //Correção:// precisaria mudar o caminho da rootDir no tsconfig

  //c) Existe alguma maneira de transpilar múltilplos arquivos 
  //de uma vez só? Caso conheça, explique como fazer.
  //Resposta: com o arquivo de configuração tsconfig.json
  
  //Correção:usando o tsc sem indicar um arquivo específico

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}