import React, { useState } from 'react';
import { SignUpBottomContainer } from './styled' 
import { Button, CircularProgress, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import {signUp} from '../../services/user'

const  SignUpForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear ]= useForm({name:"",email: "", password:""})
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText, setIsLoading) 

    }
    return (
        <SignUpBottomContainer>
        <form onSubmit={onSubmitForm}>
        <TextField
              name={"name"}
              value={form.name}
              onChange={onChange}
              label={"Nome"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={"name"}
            />
            <TextField
              name={"email"}
              value={form.email}
              onChange={onChange}
              label={"E-mail"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={"email"}
            />
            <TextField
              name={"password"}
              value={form.password}
              onChange={onChange}
              label={"Senha"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={"password"}
            />
            <Button
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
            type={"submit"}
            >{isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer cadastro</>}</Button>
        </form>
        </SignUpBottomContainer>
        
    )
}

export default SignUpForm