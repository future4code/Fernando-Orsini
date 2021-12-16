import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';

const RecipesDetailPage = () => {
    useProtectedPage()
    return (
        <div> 
    <h1>RecipesDetailPage</h1>
        </div>
    )
}

export default RecipesDetailPage