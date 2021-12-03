import React from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import React, { useState, useEffect } from "react";

const App = () => {
const [pokeList, setPokeList] = useState([]);
const [pokeName, setPokeName] = useState("");


useEffect(() => {
  axios
  .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  .then(() => {
    setPokeList(res.data.results);
  })
  .catch(() => {
    console.log(err);
  })
}, []);

    return (
      <div>
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          
          {pokeList.map((pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
       
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  }


export default App;
