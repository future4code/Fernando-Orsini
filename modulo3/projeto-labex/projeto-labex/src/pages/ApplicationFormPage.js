import React, { useState, useEffect } from "react"
import URL_BASE from "../constants/url";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../Hooks/useRequestData";

export default function ApplicationFormPage() {
  const history = useHistory()  
//POST
//https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id/apply
  const goBack = () => {
    history.goBack("/listTripPage");
  };
    return (
      <div>
         <header>Formulário de inscrição</header>
        <button onClick={goBack}>Voltar</button>
        <button>Enviar</button>
      </div>
    );
  }