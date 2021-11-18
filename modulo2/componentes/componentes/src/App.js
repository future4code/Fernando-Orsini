import React from "react";
import styled from "styled-components"
import {NovoComponente} from "./componentes/NovoComponente"
import "./styles.css"

const TituloVermelho = styled.h1`
color: red;
`;
const ContainerApp = styled.div`
front-family: sans serif;
text-align: center
`;
const ContainerSubtitulo = styled.div`
background-color:pink;
padding: 10pix;
`;

export default function App() {
  const onClickBotao = (saudacao) => {
    alert(`${saudacao} Carver`)
  };
  
  const tituloOutroComponente = "Componente2";

  return(
    <div className="App">
    <h2>Bora ver mais React?</h2>
    <hr/>
    <MeuComponente
    saudacao={"Bom dia!"}
    frase={"Esse é um componente beeeeemmmm legal!"}
    clickarBotao={()} => onClickBotao("Boa tarde!")}
    titulo={tituloOutroComponente}
      />
      </div>
  );
}