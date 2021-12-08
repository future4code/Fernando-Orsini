import React, { useState, useEffect } from "react"
import URL_BASE from "./url";
import { useHistory } from "react-router-dom";
import { useRequestData } from "./useRequestData";

export default function ApplicationFormPage() {
  const history = useHistory()  

  const goBack = () => {
    history.goBack("");
  };
    return (
      <div>
         <header>Formulário de inscrição</header>
        <button onClick={goBack}>Voltar</button>
        <button>Enviar</button>
      </div>
    );
  }