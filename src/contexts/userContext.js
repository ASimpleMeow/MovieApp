import React, { useState, useEffect } from "react";
import {loginUser, registerUser} from '../api/tmdb-api';

export const UserContext = React.createContext(null)

const UserContextProvider = props => {
  const existingToken = localStorage.getItem("token");
  const [authToken, setAuthToken] = useState(existingToken);
  const [user, setUser] = useState(undefined);
  const setToken = (data) => {
    localStorage.setItem('token', data);
    setAuthToken(data);
  }

  const authenticate = (user, cb) => {
    loginUser(user).then(result => {
      if (!result.success) {
        cb && cb(false, result.msg || "User could not be authenticated!")
      } else {
        setToken(result.token)
        setUser(user.username);
        cb && cb(true, "User athenticated successfully")
      }
    });
  } 

  const register = (newUser, cb) => {
    if (newUser.password !== newUser.confirmPassword) {
      return cb(false, "Please make sure the passwords match!");
    }
    registerUser(newUser).then(result => {
      if (result.code && result.code === 201) {
        authenticate(newUser, success => {
          if (success) cb && cb (success, "New user created and authenticated");
          else cb && cb (false, "New user created but could not be authenticated");
        });
      } else {
        cb && cb(false, "New user could not be created");
      }
    });
  }

  const signOut = cb => {
      setToken(undefined);
      setUser(undefined);
  }

  return (
    <UserContext.Provider
      value={{
        user: user,
        authToken: authToken,
        authenticate: authenticate,
        register: register,
        signOut: signOut
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider