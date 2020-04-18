import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import {UserContext} from '../contexts/userContext';
import {MoviesContext} from '../contexts/moviesContext';
import LoginForm from "../components/loginForm";

const LoginPage = props => {
  const [error, setError] = useState("");
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const context = useContext(UserContext);
  const moviesContext = useContext(MoviesContext);

  const login = (data) => {
    context.authenticate(data, (status, err) => {
      if (!status && err) {
        setError(err);
      } else {
        setLoggedInStatus(status);
        moviesContext.setAuthenticated(status);
      }
    });
  };

  const { from } = props.location.state || { from: { pathname: "/" } };
  if (loggedInStatus) {
    return <Redirect to={from} />;
  }

  return (
    <div className="row">
      <div className="card col-md-6 mx-auto my-5">
        <div className="card-body">
          <LoginForm action={login} redirect={from}/>
          <p className="text-danger">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;