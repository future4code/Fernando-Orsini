import React from "react"
import URL_BASE from "../constants/url";
import { useHistory } from "react-router-dom";
import useResquestData from "../Hooks/useRequestData";
import useForm from "../Hooks/UseForm";

 
const ApplicationFormPage = () =>{
  const { form, onChange, cleanFields } = useForm({
    nome: "",
    idade: "",
    email: ""
  });

  const application = (event) => {
    event.preventDefault();
    console.log("Formulário enviado!", form);
    cleanFields();
  };

  const [applyToTrips, applyingToTrips, errorApply] = useResquestData(
    `${URL_BASE}/fernando-orsini-carver/trips/:id/apply`);
  
  const history = useHistory()  

  const goBack = () => {
    history.goBack("/listTripPage");
  };
    return (
      <div>
        <h1>Formulário de inscrição</h1>
      <form onSubmit={application}>
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
          name={"idade"}
          value={form.age}
          onChange={onChange}
          placeholder="Idade"
          required
          type={"number"}
          min={18}
        />
        <input
          name={"applicationText"}
          value={form.applicationText}
          onChange={onChange}
          placeholder="Texto de candidatura"
          required
          type={"string"}
        />
        <input
          name={"profession"}
          value={form.profession}
          onChange={onChange}
          placeholder="Profissão"
          required
          type={"string"}
        />
        <input
          name={"profession"}
          value={form.profession}
          onChange={onChange}
          placeholder="Profissão"
          required
          type={"string"}
        />
        <input
          name={"country"}
          value={form.country}
          onChange={onChange}
          placeholder="País"
          required
          type={"string"}
        />
        <button onClick={applyToTrips}>Enviar</button>
      </form>
        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }
  
export default ApplicationFormPage