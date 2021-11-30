import React from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";

const PokeCard = (props) => {
  const [pokemon, setPokemons] = useState({})
    
  getPokemons = () => {
      axios.get(`${baseUrl}/pokemons/`)
  }
    useEffect(() => {
        getPokemons()
    }, [])
    return()
}

     
  
  useEffect(()) =>{
      const getPokemonById = async () => {
          try {
            const response = await.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            setPokemon(response.data)  
          } catch (error) {
              console.log(error)
              
          }
      }
  }

  getPokemonById()
}, [props.pokemonName

  return
}
  render() {
    const pokemon = this.state.pokemon;

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }
}

export default PokeCard;
