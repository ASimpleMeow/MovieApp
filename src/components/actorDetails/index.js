import React from "react";
import useActorMovies from "../../hooks/useActorMovies";
import "./actorDetails.css";
import { Link } from "react-router-dom";

export default ({ actor }) => {
  const [actorMovies] = useActorMovies(actor.id);
  return (
    <>
      <h2>{actor.name}</h2>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item list-group-item-dark">
          Date Of Birth
        </li>
        <li className="list-group-item ">
          {actor.birthday ? actor.birthday : 'N/A'}
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
          {actor.place_of_birth ? actor.place_of_birth : "N/A"}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li className="list-group-item list-group-item-dark">
          Popularity
        </li>
        <li className="list-group-item ">
          {actor.popularity ? actor.popularity : 'N/A'}
        </li>
      </ul>

      <h4>Biography</h4>
      <p>{actor.biography}</p>
      <h4>Starred In</h4>
      <ul className="list-group">
          {actorMovies && actorMovies.map(actorMovie => (
              <li key={actorMovie.credit_id} className="list-group-item">
                <Link to={`/movies/${actorMovie.id}`}>
                    <b>{actorMovie.original_title}</b> as {actorMovie.character}
                </Link>
              </li>
          ))}
      </ul>
    </>
  );
};