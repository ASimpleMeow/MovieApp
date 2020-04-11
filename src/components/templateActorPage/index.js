import React from "react";
import "./actorPage.css";

const TemplateActorPage = ({ actor, children }) => {
  return (
    <>
      <div className="row">
        <div className="col-3 align-self-start">
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="actor"
            alt={actor.name}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateActorPage;