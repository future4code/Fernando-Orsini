import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory()

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitLogin = () => {
    console.log(email, password);
    const body = {
      email: email,
      password: password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/login', body)
    .then((response) => {
      console.logo('Deu certo:', response.data)
      localStorage.setItem("token", response.data.token);
      history.push('/tripDetailPage')
    }).catch((error) => {
      console.log('Algo deu errado:',error.response)
    })
  };
  
  return(
    <div>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />

      <input 
      placeholder="password"
      type="password"
      value={password}
      onChange={onChangePassword}
      />   
      <button onClick={onSubmitLogin}>Enviar</button>
    </div>
  )
}

  
  
  
  
  
  // const goBack = () => {
  //   history.goBack("/");
  // };
  //   return (
  //     <div>
  //       <h2>Login</h2>
  //       <input>Email</input>
  //       <input>Senha</input>
  //       <button onClick={goBack}>Voltar</button>
  //     </div>
  //   );
  // }