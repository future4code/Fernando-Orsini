import React from 'react';
import { LogoImage, ScreenContainer, SignUpBottomContainer} from './styled';
import { Button } from '@material-ui/core';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
import { goToSignUp } from '../../routes/coordinator';
import cookenu from '../../assets/cookenu.jpg'

const LoginPage = () => {
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={cookenu}/>
            <LoginForm/>
        <SignUpBottomContainer>
        <Button onClick={() => goToSignUp(history)}
            fullWidth
            variant={"text"}
            color={"primary"}
            margin={"normal"}
            >Não possui conta? Cadastre-se</Button>
        </SignUpBottomContainer>
        </ScreenContainer>
    )
}

export default LoginPage