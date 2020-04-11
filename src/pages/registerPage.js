import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import {UserContext} from '../contexts/userContext';
import RegisterForm from "../components/registerForm";

const RegisterPage = (props) => {
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);
  const context = useContext(UserContext);

  const register = (data) => {
    context.register(data, (status, err) => {
        if (err) {
            setError(err);
        } else {
            setRegistered(status);
        }
    }
    );
  };

  const { from } = props.location.state || { from: { pathname: "/" } };
  if (registered) {
    return <Redirect to={from} />;
  }

  return (
    <div className="row">
      <div className="card col-md-6 mx-auto my-5">
        <div className="card-body">
          <RegisterForm action={register}/>
          <p className="text-danger">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;