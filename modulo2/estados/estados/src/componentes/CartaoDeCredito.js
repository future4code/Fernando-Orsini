import React from "react";
import { CartaoContainer, Cartao } from "./styledCartaoDeCredito";

export default class CartaoDeCredito extends React.Component {
    state = {
        valorNome = "Cave",
        valorNumero = "111.111.111.12",
        valorCVV = "395"
    };

    onChangeNome = (event) => {
        console.log("Funcionou número");
        this.setState({valorNome: event.target.value});
    };

    onChangeNumero = (event) => {
        console.log("Funcionou número");
        this.setState({valorNumero: event.target.value});
    };

    onChangeCVV = (event) => {
        console.log("Funcionou CVV");
        this.set.State({valorCVV: event.target.value});
    };

    onClickEnviar = () => {
        console.log("Nome:", this.state.valorNome);
        console.log("Numero",this.state.valorNumero);
        console.log("CVV",this.state.valorCVV);
        
        this.setState({
            valorNome:"",
            valorNumero:"",
            valorCVV:"",
        });   
    };

    render(){
        return (
            <CartaoContainer>
                <Cartao>
                    <h4>Nome: {this.state.value.valorNome} </h4>
                    <h4>Numero: {this.state.value.valorNumero} </h4>
                    <h4>CVV: {this.state.value.valorCVV} </h4>
                </Cartao>

                <h2>Insira dos  dados do seu cartão</h2>
                <input
                value= {this.state.valorNome}
                onChange= {this.onChangeNome}
                placeHolder= {"Nomme"}
                />
                <input
                value= {this.state.valorNumero}
                onChange= {this.onChangeNumero}
                placeHolder= {"Número"}
                />
                <input
                value= {this.state.valorCVV}
                onChange= {this.onChangeCVV}
                placeHolder= {"CVV"}
                />
                <button onClick={this.onClickEnviar}>Enviar</button>
            </CartaoContainer>
        )
    }

}