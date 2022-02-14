import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { RecipeContainer, RecipeImage, ScreenContainer } from './styled';
import { Typography } from '@material-ui/core';
import Loading from '../../components/Loading/Loading'

const RecipesDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipes/${params.id}`)[0]
    return (
        <ScreenContainer>
        {recipe ?
            <RecipeContainer>
            <RecipeImage src={recipe.image}/>
          <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{recipe.title}</Typography>
          <Typography align={'center'}>{recipe.description}</Typography>
           </RecipeContainer>
        :
           <Loading/>
        } 
        </ScreenContainer>
    )
}

export default RecipesDetailPage