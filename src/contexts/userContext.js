import React, { useState, useEffect } from "react";
import StubAPI from '../api/stubAPI';

export const UserContext = React.createContext(null)

const UserContextProvider = props => {
  const [user, setUser] = useState(undefined);

  const authenticate = (user, cb) => {
    setTimeout(() => {
        const validUser = StubAPI.getUser(user.username, user.password);
        setUser(validUser)
        const status = validUser ? true : false;
        if (status) {
          cb(status);
        } else {
          cb(false, "User could not be validated, please check your username and password");
        }
      }, 100);
  } 

  const register = (newUser, cb) => {
    setTimeout(() => {
      if (newUser.password && (newUser.password === newUser.confirmPassword)) {
        const validUser = StubAPI.createUser(newUser.username, newUser.password);
        setUser(validUser);
        const status = validUser ? true : false;
        if (status) cb(status);
        else cb(status, "Could not create user it may already exist!");
      } else {
        cb(false, "Passwords must match!")
      }
    }, 100);
  }

  const signOut = cb => {
      setUser(undefined);
      setTimeout(cb, 100);
  }

  return (
    <UserContext.Provider
      value={{
        user: user,
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