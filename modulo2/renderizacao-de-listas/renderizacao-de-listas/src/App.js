import React from "react";

const App = () => {
  constlistaDeStrings = ["Banana", "Maçã", "Laranja"];

  const frutas = listaDeStrings.map((fruta, index) => {
    return <li key={index}>{fruta}</li>;
  });

  const listaDeNumeros = [1, 2, 3];

  const listaDeObjetos = [
    { id: 1, nome: "Bulbasauro", tipo: "Planta e Veneno" },
    { id: 2, nome: "Squirtle", tipo: "Água" },
    { id: 3, nome: "Charmander", tipo: "Fogo" }
  ];

  const pokemons = listaDeObjetos.map((poke) => {
    return(
      <div key={poke.nome}>
        <p>Nome: {poke.nome}</p>
        <p>Tipo: {poke.tipo}</p>
        <hr />

      </div>
    );
  });

  return(
    <div>
      <h1>Bom dia, Carver!</h1>
      {frutas}
      <hr />
      {pokemons}
    </div>
  );
};

export default App;



















// import styled from "styled-components";

// const CardProf = styled.div` 
// display: flex;
// border: 1px solid gray;
// margin: 8px 0;
// padding: 0 8px;
// justify-content: space-between;
// `;

// const TextoLaranja = styled.p`
// color: orange;
// `;

// class App extends React.Component {
//   state = {
//     inputNome: "",
//     inputIdade: "",
//     instrutores: [
//       { id: 1, nome: "Chijo", idade: 27},
//       { id: 1, nome: "Chijo", idade: 27},
//       { id: 1, nome: "Chijo", idade: 27},
//       { id: 1, nome: "Chijo", idade: 27}
//     ]
//   };

//   guardaNome = (event) => {
//     this.setState({ inputNome: event.target.value });
//   };

//   guardaIdade = (event) => {
//     this.setState({ inputIdade: event.target.value });
//   };

//   adicionaProf = {
//     id: Math.random(),
//     nome: this.state.inputNome,
//     idade: Number(this.state.inputIdade)
//   };

  // const copia = [...this.state.instrutores, novoProf];

  // copia.push(novoProf)

    // Salvou as mudanças no estado
    // this.setState({ instrutores: copia });
    // this.setState({ inputNome: "", inputIdade: "" });

    // Essa é a função que vai ser 
    //chamada nos botões de deletar dos cards

//     deletarProf = (idDoProfParaDeletar) => {
//       const copiaDaLista = [...this.state.instrutores];
      
//       const profs = copiaDaLista.filter((prof) => {
//         return prof.id !==idDoProfParaDeletar;

//       });
//       this.setState({instrutores: profs });
//     };

//     render() {
//       const listaDeComponentes = this.state.listaDeInstrutores.map((prof) => {
//         return (
//         <CardProf key={props.id}>
//           <b>{prof.nome}</b>
//           <TextoLaranja>{prof.idade}</TextoLaranja>
//           <button onClick={() => this.deletarProf(prof.id)}>X</button>
//         </CardProf>
//         );
//       });

//       return (
//         <div>
//           <h1>Pessoas Instrutras</h1>
//           <input
//           value={this.state.inputNome}
//           onChange={this.guardaNome}
//           placeHolder="Nome"
//           />
//           <input
//           value={this.state.inputIdade}
//           onChange={this.guardaIdade}
//           placeHolder="Idade"
//           />
//           <button onClick={this.adicionaProf}>Adiciona</button>
//         </div>
//       );
//     }
// }

// export default App;



























// Adicionando itens em arrays 
// export default class App extends React.Component {
//   state = {
//     listaDeFrutas: ["Batata", "Maça", "Laranja"]
//   };

//   adicionarFruta = () => {
//     const novasFrutas: [this.state.listaDeFrutas];
//     novasFrutas.push("Abacate");
//     this.setState({ listaDeFrutas: novasFrutas});

//   };

//   adicionarFruta2 = () => {
//     const novasFrutas = [...this.state.listaDeFrutas, "Abacate"];
//     this.setState({ listaDeFrutas:novasFrutas });  
//   };

//   adicionarFruta3 = () => {
//     this.setState({ listaDeFrutas: [...this.state.listaDeFrutas, "Abacte"] })
//   };

//   render() {
//     ...
//   }
// }

//Alterando itens em arrays
// export default class App extends React.Component {
//   state = {
//     listaDeFrutas: ["Bata", "Maçã", "Laranja"]
//   };

//   alterarFrutas = () => {
//     const novasFrutas = [...this.state.listaDeFrutas];
//     novasFrutas[0] = "Banana"
//     this.setState({ listaDeFrutas: novasFrutas });
//   };

//   render () {
//     ...
//   }
  
// }

//Remover items do array
// export default class App extends React.Component {
//   state = {
//     listaDeFrutas: ["Batata, Maça, Laranja"]
//   };

// //filter

// removerFruta1 = () =>{
//   const frutasFiltradas = this.state.listaDeFrutas.filter((fruta)=> {
//   return fruta !== "Batata" 
//   })

//   const novasFrutas = [...this.state.listaDeFrutas];
//   novasFrutas.splice(indiceBatata, 1);
//   this.setState({ listaDeFrutas: novasFrutas });

// };

// render(){
//   ...
// }
// }