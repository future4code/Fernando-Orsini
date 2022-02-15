//Exercício 1
//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
//const minhaString: string = 1
//O tipo 'number' não pode ser atribuído ao tipo 'string'.

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico.
// Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
//Usando union type que utiliza o operador lógico | equivalente ao || em JS que signfica OU.

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir 
//três propriedades:

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_ARCO_IRIS
}

//d) Modifique a propriedade corFavorita para que apenas seja possível
// escolher entre as cores do arco-íris. Utilize um enum para isso.

enum CORES_ARCO_IRIS {
    ANIL = "anil",
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    MAGENTA = "vermelho",
    VIOLETA = "violeta"
}

const pessoa1: Pessoa = {
    nome: "Genisclayson",
    idade: 132,
    corFavorita: CORES_ARCO_IRIS.ANIL
}

const pessoa2: Pessoa = {
    nome: "Genevéva",
    idade: 87,
    corFavorita: CORES_ARCO_IRIS.MAGENTA
}

const pessoa3: Pessoa = {
    nome: "Pequerrucho",
    idade: 12,
    corFavorita: CORES_ARCO_IRIS.VERDE
}

const pessoa4: Pessoa = {
    nome: "Rerylpoti",
    idade: 37,
    corFavorita: CORES_ARCO_IRIS.AMARELO
}
//ENUM: esturtura de dados que permite 
//a declaração de valores restritos pré definidos para variáveis.

//Exercício 2
//Observe a função a seguir, escrita em JavaScript:
function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//a) Quais são as entradas e saídas dessa função? Copie a função para um 
//arquivo.ts e faça a tipagem desses parâmetros
//Resposta: Entrada: array (ts tipa como objeto) / Saída: objeto. 

//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

//c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades
// numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
const amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros) => {...}
}

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Estatisticas
}

const amostraDeIdades: AmostraDeDados = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas
}

//Exercício 3
//Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui: um autor e um texto.

//Observe o seguinte array de posts:

const posts = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

//a) Copie o código acima para um arquivo .ts depois:
//- crie um *type* para representar um post;
//- Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts

type Post = {
    autor: string,
    texto: string
}

//b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:
// function buscarPostsPorAutor(posts, autorInformado) {
//     return posts.filter(
//       (post) => {
//         return post.autor === autorInformado
//       }
//     )
//   }

  //Quais são as entradas e saídas dessa função? Copie a função para
  // o mesmo arquivo .ts do array de posts e faça a tipagem necessária. 

  function buscarPostsPorAutor(posts: Post[], autorInformado:string): Post[] {
      return posts.filter(
          (post) => {
              return post.autor ===autorInformado
          }
      )
  }

//Exercício 5
//resposta: diferenças "target": "es5" e "rootDir": "./",