import React from "react"
import { useHistory } from "react-router-dom";


const HomePage = () => {
  const history = useHistory()

  const goToLoginPage = () => {
    history.push("/loginPage");
  };

  const goToListTripPage = () => {
    history.push("/listTripPage");
  };
  
    return (
      <div>
        <header>Labex</header>
        <button onClick={goToListTripPage}>Viagens disponíveis</button>
        <button onClick={goToLoginPage}>Área Admin</button>
      </div>
    );
  }

  export default HomePage