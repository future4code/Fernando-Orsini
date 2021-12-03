import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BASE_URL} from './url'

function TelaMatches(props) {
    const [matches, setMatches] = useState(true);

   const getMatches = () => {
        axios.get(`${BASE_URL/matches}`)
        .then((res) => {  
        setMatches(res.data.results)
//Quando era um componente de classe a sintaxe acima era com ({matches:res.data.results}), um objeto (?) 
//e o resto do código era a manipulação dele(?).
//Agora foi substituido por setMatches, parte do UseState.  
        .catch((err) => {
            console.log(err.response)
    })

}

useEffect(() => {
   getMatches()
 })
 return (
    {
            <div> 
            matches.map(match) => {
                return (
                    <>
                    <h1></h1>
                    <img></img>
                    </>
                )

            }
           <button> Dar match</button>
           <button>Pular perfil</button> 
            </div>
        )
    
    }
        
  }

  export default TelaMatches;