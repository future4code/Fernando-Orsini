import React from "react";
import Etapa1 from "../src/components/Etapa1";
import Etapa2 from "../src/components/Etapa2";
import Etapa3 from "../src/components/Etapa3";
import Final from "../src/components/Final";

class App extends React.Component {
  state = {
    etapa: 1,
  }
  renderizaEtapa = () => {
    switch (this.state.evento) {
      case 1: 
        return <Etapa1 />;
      case 2: 
        return <Etapa2 />;
      case 3: 
        return <Etapa3 />;
      case 4: 
        return <Final />;
	    
    }
  }
  render () {
      return (
        <div>
          {this.renderizaEtapa()}
          <button>Próxima Etapa onClick={this.irParaProximaEtapa}</button>
        </div>
      );
    }
