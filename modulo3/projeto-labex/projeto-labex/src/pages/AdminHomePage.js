import React from "react"
import { useHistory } from "react-router-dom";
import useProtectedPage from "../Hooks/useProtectedPage";


 const AdminHomePage = () => {
   useProtectedPage()
  const history = useHistory() 

  const goToCreateTripPagee = () => {
    history.push("/createTripPage");
  };


  const goBack = () => {
    history.goBack("/");
  };
    
    return (
      <div>
        <header>Painel administrativo</header>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToCreateTripPagee}>Criar viagem</button>
        <button>Logout</button>
       
      </div>
    );
  }
  
  export default AdminHomePage