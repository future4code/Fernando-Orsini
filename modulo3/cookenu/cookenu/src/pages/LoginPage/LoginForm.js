import React from 'react';
import {InputsContainer } from './styled';
import { Button, TextField } from '@material-ui/core';
import useForm from '../../hooks/useForm';

const LoginForm = () => {
    const [form, onChange, clear ]= useForm({email: "", password:""})

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()

    }
    return (
        <InputsContainer>
        <form onSubmit={onSubmitForm}>
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
            >Fazer login</Button>

        </form>
        </InputsContainer>
        
    )
}

export default LoginForm