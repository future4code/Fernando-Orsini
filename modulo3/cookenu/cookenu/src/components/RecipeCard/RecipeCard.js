import { CardActionArea, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { RecipeCardContainer } from './styled';

const RecipeCard = (props) => {
    return (
        <RecipeCardContainer>
            <CardActionArea>
                <CardMedia
                  component={'img'}
                  alt={props.title}
                  height={'150px'}
                  image={props.image}
                  title={props.title}
                />
                <Typography align={'center'}>
                  {props.title.toUpperCase()}
                </Typography>
            </CardActionArea>
        </RecipeCardContainer>
    )
}

export default RecipeCard