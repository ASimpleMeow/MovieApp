import React from "react";
import "./castCard.css"
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CastCard = ({cast}) => {
    return (
    <div className="col-sm-2 card-body">
          <Link to={`/credit/${cast.credit_id}`}>
                <img
                className="card-img-tag center img-thumbnail"
                alt={cast.name}
                src={
                    cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : "./film-poster-placeholder.png"
                }
                />
          </Link>
          <div className="text-center">{cast.character}</div>
          <div className="text-center"><b>{cast.name}</b></div>
    </div>
    );
};

export default CastCard;