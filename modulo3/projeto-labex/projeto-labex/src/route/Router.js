import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripePage from "../pages/CreateTripPage";
import { ErrorPage } from "../pages/ErrorPage";
import ListTripPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailPage from "../pages/TripDetailsPage";


export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/listTripPage"}>
          <ListTripPage />
        </Route>

        <Route exact path={"/applicationPage"}>
          <ApplicationFormPage />
        </Route>
        
        <Route exact path={"/adminHomePage"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/loginPage"}>
          <LoginPage />
        </Route>

        <Route exact path={"/createTripPage"}>
          <CreateTripePage />
        </Route>

        <Route exact path={"/tripDetailPage"}>
          <TripDetailPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
