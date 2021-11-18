import React from "react";

export default class Contador extends React.Component {
    state = {
        valorContador: 0
    };

    onClickSoma = () => {
        const valorAtual = this.state.valorContador;
        const novoValor = {valorContador: valorAtual + 1};
        
        this.setState(novoEstado);
        console.log("funcionou");
    };

    onClickSubtrair = () => {
        const valorAtual = this.state.valorContador;
        const novoValor = {valorContador: valorAtual - 1};
        
        this.setState(novoEstado);
        console.log("funcionou");
    };

    render(){
        <div>
            <p> {this.state.valorContador}</p>
            <button onClick={this.onClickSubtrair}>Subtrair</button>
            <button onClick={this.onClickSoma}>Soma</button>
        </div>
    };
}