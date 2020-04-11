import React from "react";
import "./actorDetails.css";

export default ({ actor }) => {
  return (
    <>
      <h2>{actor.name}</h2>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item list-group-item-dark">
          Date Of Birth
        </li>
        <li className="list-group-item ">
          {actor.birthday}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li className="list-group-item list-group-item-dark">
          Death Date
        </li>
        <li className="list-group-item ">
          {actor.deathday ? actor.deathday : "N/A"}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li className="list-group-item list-group-item-dark">
          Place of Birth
        </li>
        <li className="list-group-item ">
          {actor.place_of_birth}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li className="list-group-item list-group-item-dark">
          Popularity
        </li>
        <li className="list-group-item ">
          {actor.popularity}
        </li>
      </ul>

      <h4>Biography</h4>
      <p>{actor.biography}</p>
    </>
  );
};