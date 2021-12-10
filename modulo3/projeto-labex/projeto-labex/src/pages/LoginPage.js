import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useForm from "../Hooks/UseForm";

const LoginPage = () => {
  const { form, onChange, cleanFields } = useForm({
    nome: "",
    idade: "",
    email: ""
  });
  
  const fazerLogin = (event) => {
    event.preventDefault();
    console.log(form);
    // axios.post("link", form, headers)
    cleanFields();
  };

  const history = useHistory()

  axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:fernando-orsini-carver/login', body)
    .then((response) => {
      console.logo('Deu certo:', response.data)
      localStorage.setItem("token", response.data.token);
      history.push('/tripDetailPage')
    }).catch((error) => {
      console.log('Algo deu errado:',error.response)
    })
  
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={fazerLogin}>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder={"E-mail"}
          required
          type="email"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder={"Senha"}
          required
          pattern={"^.{3,}"}
          title={"Sua senha deve ter no mínimo 3 caracteres"}
        />

        <button>Fazer Login</button>
      </form>
    </div>
  )
  }

export default LoginPage

  
  
  
  
  
  