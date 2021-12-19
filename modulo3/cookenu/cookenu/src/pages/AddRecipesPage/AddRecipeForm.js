import React, { useState } from "react";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm"
import createRecipe from "../../services/recipe";
import { AddRecipeFormContainer, InputsContainer } from "./styled";


const AddRecipeForm = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({title:"", description:"", image:""})
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefaut()
        createRecipe(form, clear, setIsLoading )
    }

    return (
        <form onSubmit={onSubmitForm}>
        <AddRecipeFormContainer>
            <InputsContainer>
            <TextField
              name={"title"}
              value={form.title}
              onChange={onChange}
              label={'Título'}
              variant={'outlined'}
              fullWidth
              required
              autoFocus
              margin={'normal'}
            />
            <TextField
              name={"description"}
              value={form.description}
              onChange={onChange}
              label={'Descrição'}
              variant={'outlined'}
              fullWidth
              required
              autoFocus
              margin={'normal'}
            />
            <TextField
              name={"image"}
              value={form.image}
              onChange={onChange}
              label={'Foto'}
              variant={'outlined'}
              fullWidth
              required
              autoFocus
              margin={'normal'}
            />
            <Button
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
            type={"submit"}
            >{isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar receita</>}</Button>
            </InputsContainer>
        </AddRecipeFormContainer>
        </form>
    )
}










export default AddRecipeForm