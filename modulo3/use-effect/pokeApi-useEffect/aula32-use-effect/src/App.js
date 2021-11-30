import React from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import React, { useState, useEffect } from "react";

const App = () => {
const [pokeList, pokeName ]
getPokemons = (props) => {
      axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  }
    useEffect(() => {
        getPokemons()
    }, [])
    return()
}

    return (
      <div>
        <select onChange={this.changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {this.state.pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
      </div>
    );
  }


export default App;
