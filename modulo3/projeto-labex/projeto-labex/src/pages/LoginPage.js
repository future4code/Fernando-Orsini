import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useForm from "../Hooks/UseForm";

const LoginPage = () => {
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password:""
  });
  
  const fazerLogin = (event) => {
    event.preventDefault();
    console.log(form);
    const token = localStorage.getItem('token')
  axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernando-orsini-carver/login', form,
  {
    body: {
      email: "",
      password: ""
    }
  }
  )
    .then((response) => {
      console.logo('Deu certo:', response.data)
      localStorage.setItem('token', response.data)
    }).catch((error) => {
      console.log('Algo deu errado:',error.response)
    });
    cleanFields();
  };

  const history = useHistory()
  const goBack = () => {
    history.goBack("/");
  };

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
      <button onClick={goBack}>Voltar</button>
    </div>
  )
  }

export default LoginPage

  
  
  
  
  
  