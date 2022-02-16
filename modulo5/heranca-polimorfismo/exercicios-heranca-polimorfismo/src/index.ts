import express, {Express} from 'express'
import cors from 'cors'
import knex from 'knex';
import { AddressInfo } from "net";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

console.log("Hello, world!")

//Herança


//Exercício 1
//a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
//Sim. Com o this.
//b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
//...
class User {
   private id: string;
   private email: string;
   private name: string;
   private password: string;
 
   constructor(
       id: string,
       email: string,
       name: string,
       password: string
    ){
       console.log("Chamando o construtor da classe User")
       this.id = id
       this.email = email
       this.name = name 
       this.password = password
    }
 
    public getId(): string {
       return this.id
    }
 
    public getEmail(): string {
       return this.email
    }
 
    public getName(): string {
       return this.name
    }
 }

 //Exercício 2
// a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 

// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*

class Customer extends User {
   public purchaseTotal: number = 0;
   private creditCard: string;
 
   constructor(
     id: string,
     email: string,
     name: string,
     password: string,
     creditCard: string
   ) {
     super(id, email, name, password);
     console.log("Chamando o construtor da classe Customer");
     this.creditCard = creditCard;
   }
 
   public getCreditCard(): string {
     return this.creditCard;
   }
 }

//Exercício 3
// Agora, imprima **todas as informações possíveis** da instância que você criou:
// o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de crédito (`creditCard`). 
// Perceba que as propriedades públicas da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).

// a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?* *Por quê?*
//...

// Exercício 4
    
// Adicione um método público à classe `User`. Esse método deve ter o nome de `introduceYourself`
// ("apresente-se") e deve retornar a mensagem: `"Olá, bom dia!"`. As classes filhas sempre têm acesso
// aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância
// que você criou para a classe `Customer` chame esse método

// class User {
// 	// demais implementações

// 	public interoduceYourself(): string {
// 	   return "Olá, bom dia!"
// 	}
// }

// const customer = new Customer(...) // passa os parâmetros corretos
// customer.introduceYourself()

//- Exercício 5 
// Altere o método que você acabou de criar para que ele imprima a
// mensagem: `"Olá, sou ${nome do usuário}. Bom dia!"`. Realize os mesmos testes anteriores.

// class User {
// 	// demais implementações

// 	public interoduceYourself(): string {
// 			return `Olá, sou ${this.name}. Bom dia!`;
// 	}
// }


//Polimorfismo


// Exercício 1
// Vamos começar analisando a **interface** Client. Ela possui 4 atributos explicados abaixo.
export interface Client {
   name: string;
   // Refere-se ao nome do cliente
 
   registrationNumber: number;
   // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id
 
   consumedEnergy: number;
   // Refere-se à energia consumida pelo cliente no mês
 
   calculateBill(): number;
   // Retorna o valor da conta em reais
 }

// Comece criando um objeto dessa interface, colocando a tipagem correta. Perceba que você terá que
// dar uma implementação para o método `calculateBill()`. Por enquanto, implemente de tal forma que
// sempre retorne `2` (ou qualquer outro número). Imprima todas as informações que forem possíveis no terminal.

// a) *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?*
//Exemplo:Aqui é só para mostrar a sintaxe para criar um método em um objeto (deve ser uma arrow function!)
const client: Client = {
   name: "Goli",
   registrationNumber: 1,
   consumedEnergy: 100,
 
   calculateBill: () => {
     return 2;
   }
 }

 //- Exercício 2
    
 //Agora, vamos ver a classe **Place**.
 export abstract class Place {
   constructor(protected cep: string) {}
 
    public getCep(): string {
       return this.cep;
   }
 }
 
// Essa classe é abstrata porque está representando um tipo de informação que simplesmente abstrai
// e armazena as características em comum de um conjunto de outras classes. Por ser abstrata, não
// podemos criar uma instância dela. Essa é uma regra da Programação Orientada a Objetos e válida
// para todas as linguagens.

// a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). 
// Qual foi o erro que o Typescript gerou?*

// b) *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*

//Exercício 3
    
//Esse exercício vai responder melhor a essas três perguntas: 
    
//1) *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? 
//(última pergunta do exercício anterior)*
    
//2) *Por que a `Place` não é uma interface?*
    
//3) *Por que a classe `Place` é uma Classe Abstrata?*
    
// Será um pouco mais longo, mas esperamos que seja esclarecedor.
    
//Vamos começar lendo três classes. 
    
// A primeira representa uma casa residencial. Vamos armazenar nela uma variável para representar 
//a quantidade de moradores (`residentsQuantity`)

//A segunda é para um comércio. Para ela, vamos adicionar uma propriedade para representar 
//os andares desse lugar comercial (floorsQuantity)
export class Commerce extends Place {
   constructor(
     protected floorsQuantity: number,
     // Refere-se à quantidade de andares do lugar
 
     cep: string
   ) {
     super(cep);
   }
 }

// A última é para uma indústria e adicionaremos uma propriedade 
//para guardar a quantidade máquinas de lá (machinesQuantity)

// Código fornecido nas dicas:
export class Residence extends Place {
   constructor(
     private dwellersQuantity: number,
 
     cep: string
   ) {
     super(cep);
   }
   
   public getDwellersQuantity(): number {
     return this.dwellersQuantity
   }
 }

 export class Commerce extends Place {
   constructor(
     private floorsQuantity: number,
     // Refere-se à quantidade de andares do lugar
 
     cep: string
   ) {
     super(cep);
   }
 
   public getFloorsQuantity(): number {
     return this.floorsQuantity;
   }
 }

 //Exercício 4
 //a) Que métodos e propriedades essa classe possui? Por quê?
 //Código das dicas:

 class ResidentialClient extends Residence implements Client {
   constructor(
     public name: string,
     public registrationNumber: number,
     public consumedEnergy: number,
     private cpf: string,
     residentsQuantity: number,
     cep: string
   ) {
     super(residentsQuantity, cep);
   }
 
   public getCpf(): string {
     return this.cpf;
   }
 
   public calculateBill(): number {
     return this.consumedEnergy * 0.75;
   }
 }

//Exercício 5
// Crie a classe `CommercialClient` para representar o Cliente Comercial. Ele deve possuir um CNPJ (privado). Crie os getter dela.

// Essa classe deve ser **filha** da classe `Commerce` e implementar a interface `Client`. Nesse caso, o valor da conta é **(quantidade de energia) x 0.53.**

// a) *Quais as semelhanças dessa classe com a `ResidentialClient`?*

// b) *Quais as diferenças dessa classe com a `ResidentialClient`?*

//Código das dicas:

class CommercialClient extends Commerce implements Client {
   constructor(
     public name: string,
     public registrationNumber: number,
     public consumedEnergy: number,
     private cnpj: string,
     floorsQuantity: number,
     cep: string
   ) {
     super(floorsQuantity, cep);
   }
 
   public calculateBill(): number {
     return this.consumedEnergy * 0.53;
   }
 
   public getCnpj(): string {
     return this.cnpj;
   }
 }

 //Exercício 6
//  Agora, crie a classe `IndustrialClient` para representar o Cliente Industrial. Ele deve possuir um um número de registro industrial (privada). Crie somente os getters dela.

// a) *De* q*ual classe a `IndustrialClient` deve ser filha? Por quê?*

// b) *Que interface a `IndustrialClient` implementa? Por quê?*

// c) *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*

//Código das dicas:

class IndustrialClinet extends Industry implements Client {
   constructor(
     public name: string,
     public registrationNumber: number,
     public consumedEnergy: number,
     private insdustryNumber: string, // tanto faz ser string ou number
     machinesQuantity: number,
     cep: string
   ) {
     super(machinesQuantity, cep);
   }
 
   public getIndustryNumber(): string {
     return this.insdustryNumber;
   }
 
   public calculateBill(): number {
     return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
   }
 }