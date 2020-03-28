import React, { useState, useEffect } from "react";
import StubAPI from '../api/stubAPI';

export const UserContext = React.createContext(null)

const UserContextProvider = props => {
  const [user, setUser] = useState(undefined);

  const authenticate = (username, password, cb) => {
    setTimeout(() => {
        const validUser = StubAPI.getUser(username, password);
        setUser(validUser)
        cb(validUser ? true : false);
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
        signOut: signOut
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider