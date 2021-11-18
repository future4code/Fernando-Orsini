import React from "react";

export default class MeuComponente extends React.Component {
    onClickBotao = () => {
        alert("Mensagem enviada");
    };
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Nome da turma: {this.props.NomeDaTurma} </h2>
                <button onClick={this.onClickBotao}>Mensagem</button>
            </div>
        )
    }
}