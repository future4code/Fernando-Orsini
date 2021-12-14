export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUP = (history) => {
    history.push("/cadastro")
}

export const goToAddRecipes = (history) => {
    history.push("/adicionar-receita")
}

export const goToRecipesDetail = (history, id) => {
    history.push(`/detalhe/${id}`)
}

export const goToRecipesList = (history) => {
    history.push("/")
}