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
       {
         matches.map((match) => {
           return (
           <>
           <h1>{match.name}</h1>
           <img src={match.photo}></img>
           </>
           )       
          })
       }
       <p>Não tem nenhum match ainda</p>
       <h1>{props.perfil.nome} </h1>
       <p>{props.perfil.age}</p>
       </div>
     );            
    } 
