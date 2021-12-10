import React from "react"
import URL_BASE from "../constants/url";
import { useHistory } from "react-router-dom";
import useResquestData from "../Hooks/useRequestData";


const ListTripPage = () => {
  const [trips, loadingTrips, errorTrips] = useResquestData(
`${URL_BASE}/fernando-orsini-carver/trips`);

  
  
  const history = useHistory()

  const goToApplicationPage = () => {
    history.push("/applicationPage");
  };
 
  const goBack = () => {
    history.goBack("/");
  };

  const tripsList =
    trips &&
    trips.map((trip, index) => {
      return <li key={index}>{trip.name}</li>;
    });
    console.log(trips);

  return (
    <div>
      <h1>Lista de viagens</h1>
      {/*loadingTrips = true */}
      {loadingTrips && <p>Carregando...</p>}
      {trips}
      {/*loadingTrips = false , mas colocando "!" ele fica true */}
      {!loadingTrips && errorTrips && <p>Ocorreu um erro...</p>}
      {!loadingTrips && trips && trips.length === 0 && (
        <p>Não há viagens disponíveis</p>
      )}
    
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToApplicationPage}>Inscrever-se</button>
    </div>
  );
}

export default ListTripPage