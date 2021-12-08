import React, { useState, useEffect } from "react"
import URL_BASE from "../constants/url";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../Hooks/useRequestData";
export default function HomePage() {
  const history = useHistory()

  const goToAdminHomePage = () => {
    history.push("/adminHomePage");
  };
  
    return (
      <div>
        <header>Labex</header>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToAdminHomePage}>Área Admin</button>
      </div>
    );
  }