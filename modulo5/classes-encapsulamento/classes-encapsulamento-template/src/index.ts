//Exercício 1

//a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
//Serve para inicializar variáveis.

//b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). 
//Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

//c) Como conseguimos ter acesso às propriedades privadas de uma classe?
//Através de Getters e Setters.

//Exercício 2
//Transforme a variável de tipo abaixo, chamada Transaction em uma classe Transaction. Ela deve conter as mesmas propriedades: data, valor e descrição.
// Agora, porém, todas elas devem ser privadas. Portanto, crie métodos (getters) para a leitura desses valores, tanto para essa classe quanto para a classe UserAccount.
// Crie uma instância dessa classe e adicione à instância já criada de UserAccount

//Exercício 3
//Crie uma classe Bank, que será responsável por guardar todos os dados da aplicação. 
//Ela deve possuir a propriedades accounts, privada (crie os getters e setters que achar apropriado).

class Transaction {
    private description: string;
    private value: number;
    private date: string;
    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date
    }
    public getDescription() {
        return this.description
    }
    public getValue() {
        return this.value
    }
    public getDate() {
        return this.date
    }
}
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = []
    constructor(cpf: string, name: string, age: number) {
        this.cpf = cpf;
        this.name = name;
        this.age = age
    }
    public setTransaction(description: string, value: number, date: string) {
        const newTransaction = new Transaction(description, value, date)
        this.transactions.push(newTransaction)
    }
}
const usuario = new UserAccount('123.456.907-30', 'Soraia', 24);
const usuario2 = new UserAccount('993.745.000-30', 'Christopher', 26);
const transaction1 = new Transaction('caiu o salario', 3000, '14/02/2022')
const transaction2 = new Transaction('Baladinha fim de semana', 250, '18/02/2022')
const transaction3 = new Transaction('conta de luz', 150, '15/02/2022')
usuario.setTransaction(transaction1.getDescription(), transaction1.getValue(), transaction1.getDate())
usuario.setTransaction(transaction2.getDescription(), transaction2.getValue(), transaction2.getDate())
usuario.setTransaction(transaction3.getDescription(), transaction3.getValue(), transaction3.getDate())
// inserindo as transações
// usuario.insertTransaction(transaction1)
// usuario.insertTransaction(transaction2)
// usuario.insertTransaction(transaction3)
class bank {
    // private transactions: Transaction[] = []
    private accounts: UserAccount[] = []
    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
      }
}
const usersAccount = [usuario,usuario2]
const bradesco = new bank(usersAccount)
// console.log(bradesco)