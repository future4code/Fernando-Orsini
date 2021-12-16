import React from 'react';
import { ScreenContainer, SignUpBottomContainer} from './styled';
import { Button } from '@material-ui/core';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
import { goToSignUp } from '../../routes/coordinator';
import cookenu from '../../assets/cookenu.jpg'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = ({rightButtonText, setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <img src={cookenu}/> 
            <LoginForm rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
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