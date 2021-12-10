import React from "react"
import URL_BASE from "../constants/url";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../Hooks/useProtectedPage";
import useForm from "../Hooks/UseForm";
import useResquestData from "../Hooks/useRequestData";

const CreateTripePage  = () =>{
  useProtectedPage()
  const [createTrip, loadingCreateTrip, errorCreateTrip] = useResquestData(
    `${URL_BASE}/fernando-orsini-carver/trips`
  );
  
  const history = useHistory()
  const goBack = () => {
    history.goBack("/adminHomePage");
  };
  const { form, onChange, cleanFields } = useForm({
    nome: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  });

  const criarViagem = (event) => {
    event.preventDefault();
    console.log("Proposta de viagem enviada!", form);
    cleanFields();
  };

  return (
    <div>
      <h1>Criar viagem</h1>
      <form onSubmit={criarViagem}>
        <input
          name={"nome"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
        />
        <input
          name={"planet"}
          value={form.planet}
          onChange={onChange}
          placeholder="Idade"
          required
          type={"number"}
          min={18}
        />
        <input
          name={"date"}
          value={form.date}
          onChange={onChange}
          placeholder="Data"
          required
          type={"date"}
        />
         <input
          name={"description"}
          value={form.description}
          onChange={onChange}
          placeholder="Descrição"
          required
          type={"string"}
        />
        <input
          name={"durationInDays"}
          value={form.durationInDays}
          onChange={onChange}
          placeholder="Duração"
          required
          type={"number"}
        />
        <button onClick={createTrip}>Criar</button>
      </form>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

  export default CreateTripePage