import React from 'react'
import styled from "styled-components"

const IconeContainer = styled.div`
	display: flex;

	img {
		margin-right: 5px;
	}
`
const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
function IconeComContador(props) {
	return <IconeContainer>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{ iconeCurtida.this.props.valorContador}</p>
	</IconeContainer>
}

export default IconeComContador