import React from 'react';
import { LogoImage, ScreenContainer } from './styled';
import SignUpForm from './SignUpForm';
import { useHistory } from 'react-router-dom';
import cookenu from '../../assets/cookenu.jpg'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={cookenu}/>
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </ScreenContainer>
    )
}

export default SignUpPage
