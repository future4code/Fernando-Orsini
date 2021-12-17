import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { AddRecipeButton, RecipeListContainer } from './styled';
import { Add } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { goToAddRecipes } from '../../routes/coordinator';
const RecipesListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    console.log(recipes)

    const onClickCard = () => {

    }

    const recipeCards = recipes.map((recipe)=>{
        return (
            <RecipeCard
              key={recipe.id}
              title={recipe.ttitle}
              image={recipe.image}
              onClick={onClickCard}
            />
        )
    })
    return (
        <RecipeListContainer>
         {recipeCards}
         <AddRecipeButton
           color={'primary'}
           onClick={()=>goToAddRecipes(history)}
           >
               <Add />
        </AddRecipeButton>
         
         </RecipeListContainer>
          
    )
}

export default RecipesListPage