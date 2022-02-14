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