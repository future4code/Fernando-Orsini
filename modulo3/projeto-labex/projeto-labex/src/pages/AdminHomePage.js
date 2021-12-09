import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";


export default function AdminHomePage() {
  const history = useHistory() 

  const goBack = () => {
    history.goBack("/");
  };

  //DEL. endpoint pra deletar uma trip 
  //https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id
    return (
      <div>
        <header>Painel administrativo</header>
        <button onClick={goBack}>Voltar</button>
        <button>Criar viagem</button>
        <button>Logout</button>
       
      </div>
    );
  }