import React from "react"
import { useHistory } from "react-router-dom";


const HomePage = () => {
  const history = useHistory()

  const goToAdminHomePage = () => {
    history.push("/adminHomePage");
  };

  const goToListTripPage = () => {
    history.push("/listTripPage");
  };
  
    return (
      <div>
        <header>Labex</header>
        <button onClick={goToListTripPage}>Viagens disponíveis</button>
        <button onClick={goToAdminHomePage}>Área Admin</button>
      </div>
    );
  }

  export default HomePage