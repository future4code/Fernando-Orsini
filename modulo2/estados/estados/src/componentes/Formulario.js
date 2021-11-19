import React from "react";

export default class Formulario extends React.Component {
    state = {
        valorNome: "",
        valorEmail: "",

    };

    onChangeNome = (event) => {
        this.setState({ valorNome: event.target.value});
    };

    onChangeEmail = (event) => {
        this.setState({ valorEmail: event.target.value});
    };

    render() {
        console.log("Estado", this.state);
        return(
            <div>
                <input
                value={this.state.valorNome}
                onChange={thisOnChangeNome}
                placeHolder={"Nome"}
                />
                <input
                value={this.state.valorEmail}
                onChange={thisOnChangeEmail}
                placeHolder={"Email"}
                />
            </div>
        );
    }

}