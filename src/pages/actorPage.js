import React, {useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import useActor from "../hooks/useActor";
import PageTemplate from "../components/templateActorPage";
import ActorDetails from "../components/actorDetails";

const MoviePage = props => {
  const { id } = props.match.params;
  const [actor] = useActor(id);
  return (
    <>
    {actor ? (
      <>
        <PageTemplate actor={actor}>
          <ActorDetails actor={actor} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for actor details</p>
    )}
  </>
  );
};

export default MoviePage;