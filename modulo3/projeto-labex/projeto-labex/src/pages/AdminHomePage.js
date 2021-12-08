import React, { useState, useEffect } from "react"
import URL_BASE from "./url";
import ListTripPage from "./ListTripsPage";
import { useHistory } from "react-router-dom";
import { useRequestData } from "./useRequestData";

export default function AdminHomePage() {
  const history = useHistory() 

  const goBack = () => {
    history.goBack("");
  };
    return (
      <div>
        <header>Painel administrativo</header>
        <button onClick={goBack}>Voltar</button>
        <button>Criar viagem</button>
        <button>Logout</button>
        <ListTripPage> Área privada. É possível deletar viagens</ListTripPage>
      </div>
    );
  }