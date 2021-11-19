import React from "react"

import styled from "styled-components"

export const ContainerCarver = styled.div`
background-color: aqua;
`;

export const MeuComponent = (props) =>{
    console.log(props.saudacao);

    const frase = "oi";

    return(
        <ContainerCarver>
        <h2>{props.saudacao}</h2>
        <p>{props.frase}</p>
        <button onClick={props.clicarBotao}>Meu botão</button>
        <p>{frase}</p>
        </ContainerCarver>
    )
}

