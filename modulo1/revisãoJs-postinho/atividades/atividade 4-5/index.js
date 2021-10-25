
// Exercício 4-----------------------------------------------------------------------------------------------
 
const login = () => {
    const login = "labenu" */
    //  Sua lógica aqui
    const longinCadastrado = "fear-of-missing-out"
    const loginDoUsuario = prompt("Digite sua senha")
    const definirSenhaValida = (loginDoUsuario, longinCadastrado) => {
    if (loginDoUsuario===longinCadastrado){
        console.log("Usuário logado")
    }else{
        console.log("Senha inválida")
    } 
     
    


/* console.log(login()); */

// Exercício 5----------------------------------------------------------------------------------------------------

/* const primeiraDose = () => {
//Escreva uma função que receba do usuário seu nome, e o nome da vacina que tomou. 
//E retorne a mensagens a seguir dependendo da vacina tomada. 
`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    //  Sua lógica aqui */
const nomeDoUsuario = prompt("Qual o seu nome?")
const vacina = prompt("Que vacina você tomou?")
let tempo
let data
const coronavac
const astrazeneca
const pfizer 
function receberDados(nomeDoUsuario, vacina)
 }





 //a partir daqui, cóodigo da monitora Clara Meirelles
 
 function calcularDias(mes) {
    // variavel que guarda os dias que tem o mês
    let diasNoMes
    // condicional para ver quantos dias tem no mês
    if (mes === 01 || mes === 03 || mes === 05 || mes === 07 || mes === 08 || mes === 10 || mes === 12) {
        diasNoMes = 31
    } else if (mes === 02) {
        diasNoMes = 28
    } else {
        diasNoMes = 30
    }
    return diasNoMes
}
​
function calcularTempoParaSegundaDose(nome, vacina, dia, mes) {
    let tempo
    // Aqui entra a condicional de nome da vacina e dias para segunda dose, que a Tay fez ontem
    // Depois é só chamar a função de contar dias no mes pra calcular certinho
    // exemplo com a coronavac:
    if (vacina === "coronavac") {
        tempo = 28
        // Exemplo de chamada da função pra calcular dias com o mês fornecido na chamada
        const mesDaVacina = calcularDias(mes)
        if (tempo + dia > mesDaVacina) {
            // no caso da coronavac, como é menos de um mês, não precisaria fazer essa chamada aqui, ela está como um exemplo de como reutilizar a função de dias
            const mesDaSegundaDose = calcularDias(mes + 1)
​
            // calcular dias que faltam no mes
            const calculoData = mesDaVacina - dia
​
            // data exibida como "13/11", daria pra tratar melhor trazendo o nome do mês na condicional, no lugar de números
            const data = `${calculoData}/${mes + 1}`
            console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
        }
​
    }
}


