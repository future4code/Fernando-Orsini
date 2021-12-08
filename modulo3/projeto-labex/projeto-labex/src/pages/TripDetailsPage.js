import React, { useState, useEffect } from "react"
import URL_BASE from "./url"
import { useHistory } from "react-router-dom";
import { useRequestData } from "./useRequestData";
export default function TripDetailPage() {
  const [trips, loadingTrips, errorTrips] = useResquestData(
    `${URL_BASE}:aluno/trip/:id`
  );
  const history = useHistory()

  const goBack = () => {
    history.goBack("");
  };
    return (
      <div>
        <h3>Detalhes da viagem</h3>
        <button onClick={goBack}>Voltar</button>
       {trips}
      </div>
    );
  }