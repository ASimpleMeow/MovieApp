import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import {UserContext} from '../contexts/userContext';

const LoginPage = props => {
  const [loggedInStatue, setLoggedInStatus] = useState(false);
  const context = useContext(UserContext);

  const login = () => {
    context.authenticate("test1", "test1", status =>
      setLoggedInStatus(status)
    );
  };

  const { from } = props.location.state || { from: { pathname: "/" } };
  if (loggedInStatue === true) {
    return <Redirect to={from} />;
  }

  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the page at /protected </p>
      {/* Simple web form  */}
      <button onClick={login}>Log in</button>
    </>
  );
};

export default LoginPage;