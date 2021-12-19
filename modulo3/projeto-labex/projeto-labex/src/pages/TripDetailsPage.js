import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import URL_BASE from "../constants/url";
import useProtectedPage from "../Hooks/useProtectedPage";

const TripDetailPage = () => {
  useProtectedPage()

  const history = useHistory()

  const goToAdminHomePage = () => {
    history.push("/adminHomePage");
  };
    useEffect(() => {
      const token = localStorage.getItem('token')
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernando-orsini-carver/trip/:id',
    {
    headers: {
      auth: token
    }
  }
  )
    .then((response) => {
      console.logo('Deu certo:', response.data)
      localStorage.setItem('token')
    }).catch((error) => {
      console.log('Algo deu errado:',error.response)
    });
  }, []);

  
      return <div>
        <h3>Detalhes da viagem</h3>
        <button onClick={goToAdminHomePage}>Voltar</button>
        <p>Candidatos pendentes</p>
        <button>Aprovar</button>
        <button>Reprovar</button>
        <p>Candidatos aprovados</p>
        </div>
  }
  
  export default TripDetailPage