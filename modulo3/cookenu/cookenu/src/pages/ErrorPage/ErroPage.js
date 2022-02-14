import { Typography } from '@material-ui/core';
import React from 'react';
import { ErrorImage, ErrorPageContainer } from './styled';
import poopEmoji from '../../assets/poopEmoji.jpg'

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={poopEmoji}/>
            <Typography color={'primary'} variant={'h4'} align={'center'}> 
            Erro 404- Página Não Encontrada
            </Typography>
    </ErrorPageContainer> 
        
    )
}

export default ErrorPage