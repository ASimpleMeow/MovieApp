import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import "./siteHeader.css";
import {UserContext} from '../../contexts/userContext';
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

const SiteHeader = () => {
  const context = useContext(UserContext);

  const logOut = () => {
    context.signOut();
    return <Redirect to="/"/>
  };

  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          {context.user && <li className="nav-item nav-link text-white cursor-pointer" onClick={() => logOut()}>
              Logout
          </li>}
      </ul>
    </nav>
  </nav>
);
};

export default SiteHeader;