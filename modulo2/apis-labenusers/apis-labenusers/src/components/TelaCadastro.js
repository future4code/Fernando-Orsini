import React from 'react'
import axios from "axios"


export default class TelaCadastro extends React.Component{
    state = {
        nome: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }
    
    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url)
    }

    render(){
        return(
            <div>
        <button onClick={this.props.irParaLista}> Ir para Cadastro </button>
        <h2> Cadastro </h2>
        <input placeHolder={"Nome"}
               value={this.state.name}
               onChange={this.handleNome}    
        />
        <input placeHolder={"Email"}
               value={this.state.email}
               onChange={this.handleEmail}
        />
            </div>
        )
    }
}