import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddRecipesPage from '../pages/AddRecipesPage/AddRecipesPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RecipesDetailPage from '../pages/RecipesDetailPage/RecipesDetailPage';
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ErrorPage from '../pages/ErrorPage/ErroPage';

const Router = () => {
    return (
       <BrowserRouter>
       <Switch>
           <Route exact path="/login">
            <LoginPage/>
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
       </BrowserRouter>
    )
}

export default Router