import React from 'react'

export default class TelaListaUsuarios extends React.Component{
    render(){
        return(
            <div>
        <button onClick={this.props.irParaCadastro}> Ir para a Lista de Usuários </button>
        <h2> Lista de Usuários </h2>
            </div>
        )
    }
}
