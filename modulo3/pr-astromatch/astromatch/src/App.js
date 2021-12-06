import React, { useState, useEffect } from "react";
import axios from "axios";
import TelaInicial from './componentes/TelaInicial';
import TelaMatches from './componentes/TelaMatches';


function App() {
  return (
    <div>
      
      <TelaInicial/>
      <TelaMatches/>

    </div>
  );
}

export default App;