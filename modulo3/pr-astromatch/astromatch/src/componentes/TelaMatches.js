import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TelaMatches(props){
    const [matches, setMatches] = useState(true);

   const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches")
        .then((res) => {  
        setMatches(res.data.results)
      })
        .catch((err) => {
            console.log(err.response)
        })
    }
    useEffect(() => {
      getMatches()
    })
   return (
      <div>
       {getMatches}
       </div>
     );            
    } 
