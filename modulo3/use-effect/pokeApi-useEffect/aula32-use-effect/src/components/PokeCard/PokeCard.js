import axios from "axios";
import React, { useState, useEffect } from "react";

const PokeCard = (props) => {
  const [currentPokemon, setCurrentPokemon] = useState({});
    
  getPokemons = () => {
      axios.get(`${baseUrl}/pokemons/`)
  }
    useEffect(() => {
        getPokemons(props.pokemon);
    }, [props.pokemon])
    
  const pegaPokemon = (() =>{
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) =>{
        setCurrentPokemon(response.data);
      })
      .catch((err) =>{
        console.log(err);
      });
  });

    return (
      <div>
        <p>{currentPokemon.name}</p>
        <p>{currentPokemon.weight} KG</p>
        {currentPokemon.types && <p> {currentPokemon.types[0].type.name}</p>}
        {currentPokemon.sprites && (
          <img
          src={currentPokemon.sprites.front_default}
          alt={currentPokemon.name}
          />
        )}
      </div>
    );
  };


export default PokeCard;
