import React from "react";
import "./App.css";
import logolabenu from "./img/logolabenu.png"
import './App.css';

export default function App() {
  const onClickBotao = () => {
    alert("Botão foi criado");
  };
  return (
    <div className = "App">
      <h1>Aprenda React na Labenu!</h1> 
      <div>
        <div>
          <img className={"Logo Labenu"} src={logolabenu alt={"logolabenu"}/>
        </div>
        <div>
          <a img href="https://labenu.com.br">Site da Labenu</a>
        </div>
        <div>
        <button onClick={onClickBotao}>Clique aqui</button>
        </div>
      </div>

    </div>
  );
}