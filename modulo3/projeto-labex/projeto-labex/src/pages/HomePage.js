import React, { useState, useEffect } from "react"
import URL_BASE from "./url"
import { useHistory } from "react-router-dom";
import { useRequestData } from "./useRequestData";
export default function HomePage() {
  const history = useHistory()

  const goToAdminHomePage = () => {
    history.push("/AdminHomePage");
  };

  const goBack = () => {
    history.goBack("");
  };

    return (
      <div>
        <header>Labex</header>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToAdminHomePage}>Área Admin</button>
      </div>
    );
  }