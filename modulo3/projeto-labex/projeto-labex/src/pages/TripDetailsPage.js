import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import URL_BASE from "../constants/url";

export const TripDetailPage = () => {
    useEffect(() => {
      const token = localStorage.getItem('token')
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/trip/:id',
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
      return <div>Detalhes da viagem</div>
  }
  