import React, { useState, useEffect } from "react"
import URL_BASE from "../constants/url";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../Hooks/useRequestData";

export default function ListTripPage() {
  const [trips, loadingTrips, errorTrips] = useResquestData(
    `${URL_BASE}/:aluno/trips`
  );
//GET
  const [applyToTrips, applyingToTrips, errorApply] = useResquestData(
    `${URL_BASE}/:aluno/trips/:id/apply`
  );
  //POST
  const history = useHistory()
 
  const goBack = () => {
    history.goBack("/");
  };

  const tripsList =
    trips &&
    trips.map((trip, index) => {
      return <li key={index}>{trip.name}</li>;
    });
    console.log(trips);

  return (
    <div>
      <h1>Lista de viagens</h1>
      {/*loadingTrips = true */}
      {loadingTrips && <p>Carregando...</p>}
      {/*loadingTrips = false , mas colocando "!" ele fica true */}
      {!loadingTrips && errorTrips && <p>Ocorreu um erro...</p>}
      {!loadingTrips && trips && trips.length === 0 && (
        <p>Não há viagens disponíveis</p>
      )}
    
        <header onClick={goBack}>Voltar</header>
        <button onClick={}>Inscrever-se</button>
    </div>
  );
}