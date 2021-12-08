import React, { useState, useEffect } from "react"
import URL_BASE from "../constants/url";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../Hooks/useRequestData";
export default function CreateTripePage() {
  const [createTrips, loadingCreateTrips, errorCreateTrips] = useResquestData(
    `${URL_BASE}/:aluno/trips`
  );
  // É POST e não GET, tvz tenha que fazer outro hook.
  //https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips
  const history = useHistory()
  const goBack = () => {
    history.goBack("/adminHomePage");
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