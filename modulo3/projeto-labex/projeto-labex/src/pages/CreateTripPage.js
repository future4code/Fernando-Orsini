import React, { useState, useEffect } from "react"
import URL_BASE from "./url"
import { useHistory } from "react-router-dom";
import { useRequestData } from "./useRequestData";
export default function CreateTripePage() {
  const history = useHistory()
  const goBack = () => {
    history.goBack("");
  };
    return (
      <div>
        <h3>Criar viagem</h3>
        <button onClick={goBack}>Voltar</button>
        <button>Criar</button>
        <input>Nome, escolha um planeta, data (dd/mm/aaaa), descrição e duração</input>
      </div>
    );
  }