import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import {PrivateRoute} from './utils';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import FavoriteMoviesPage from "./pages/favoritesMoviesPage";
import MoviePage from './pages/moviePage'
import ActorPage from './pages/actorPage'
import MovieReviewPage from './pages/movieReviewPage'
import AddMovieReviewPage from './pages/addMovieReviewPage'
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import SiteHeader from './components/siteHeader'
import UserContextProvider from "./contexts/userContext"
import MoviesContextProvider from "./contexts/moviesContext"
import GenresContextProvider from "./contexts/genresContext"

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <div className="container-fluid">
        <UserContextProvider>
          <SiteHeader/>
          <MoviesContextProvider>
            <GenresContextProvider>
              <Switch>
                <Route path='/login' component={ LoginPage } />
                <Route path='/register' component={ RegisterPage } />
                <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <PrivateRoute exact path="/actor/:id" component={ActorPage} />
                <PrivateRoute path="/movies/:id" component={MoviePage} />
                <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                <PrivateRoute path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>
          </MoviesContextProvider>
        </UserContextProvider>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));