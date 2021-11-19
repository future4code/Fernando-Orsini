import React from "react";
import "./styles.css";
import MeuComponente from "./Componentes/MeuComponente";
import Contador from "./Componentes/Contador";
import Formulario from "./Componentes/Fomulario";
import CartaoDeCredito from "./Componentes/CartaoDeCredito";

export default function App() {
  return (
    <div className="App">
      <CartaoDeCredito />
    </div>
  );
}
