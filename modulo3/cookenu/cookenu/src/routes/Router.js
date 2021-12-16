import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddRecipesPage from '../pages/AddRecipesPage/AddRecipesPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RecipesDetailPage from '../pages/RecipesDetailPage/RecipesDetailPage';
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ErrorPage from '../pages/ErrorPage/ErroPage';

const Router = ({rightButtonText, setRightButtonText}) => {
    return (
       <Switch>
           <Route exact path="/login">
            <LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
           </Route>
           <Route exact path="/cadastro">
               <SignUpPage/>
           </Route>
           <Route exact path="/">
               <RecipesListPage/>
           </Route>
           <Route exact path="/adicionar-receita">
               <AddRecipesPage/>
           </Route>
           <Route exact path="/detalhe/:id">
               <RecipesDetailPage/>
           </Route>
           <Route>
              <ErrorPage/>
           </Route>
       </Switch>
    )
}

export default Router