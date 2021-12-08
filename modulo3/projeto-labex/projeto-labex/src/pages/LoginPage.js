import React, { useState, useEffect } from "react"
import URL_BASE from "../constants/url";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../Hooks/useRequestData";
export default function LoginPage() {
  const history = useHistory()

  const goBack = () => {
    history.goBack("/");
  };
    return (
      <div>
        <h2>Login</h2>
        <input>Email</input>
        <input>Senha</input>
        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }