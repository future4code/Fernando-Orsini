import React, { useState, useEffect } from "react";
import axios from "axios";
import TelaInicial from './componentes/TelaInicial';
import TelaMatches from './componentes/TelaMatches';


const App = () => {
  const [currentScreen, setNextScreen] = useState("");

 

  goToTelaMatches = (url) => {
    this.setState({currentScreen: "Tela de Matches", nextScreen: url})
  }
  
  goToTelaInicial = (url) => {
    this.setState({currentScreen: "Tela Inicial", nextScreen: ""})
  }

  selectPage = () => {
    switch (this.state.currentScreen) {
      case "Tela Inicial":
      return <TelaInicial goToTelaMatches={this.goToTelaMatches}/>
      case "Tela Matches":
        return <TelaMatches  goToTelaInicial={this.goToTelaInicial} url={this.state.nextScreen} />
      default:
        return <TelaInicial goToTelaMatches={this.goToTelaMatches}/> 
    }
    
  }

  return (
    <div>
      <header>
      {this.selectPage()}
      </header>
    </div>
  );
}

export default App;