import React, { useState, useEffect } from "react";
import axios from "axios";
import TelaInicial from './componentes/TelaInicial';
import TelaMatches from './componentes/TelaMatches';


function App() {
  const [TelaInicial, setTelaInicial] = useState(true);

  const mudarTela = () => {
    setTelaInicial(!TelaInicial) 
  }

 

  goToTelaMatches = (url) => {
    this.setState({currentScreen: "Tela de Matches", nextScreen: url})
  }
  
  goToTelaInicial = (url) => {
    this.setState({currentScreen: "Tela Inicial", nextScreen: ""})
  }

  

  return (
    <div>
      <header>
      <button onClick={mudarTela}> Mudar página </button>
      </header>
      <TelaInicial/>
      <TelaMatches/>

    </div>
  );
}

export default App;