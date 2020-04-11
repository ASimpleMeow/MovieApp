import { useEffect, useState } from "react";
import {getActorMovies} from '../api/tmdb-api'

const useActorMovies = id => {
  const [actorMovies, setActorMovies] = useState(null);
  useEffect(() => {
    getActorMovies(id).then(actorMovies => {
      setActorMovies(actorMovies);
    });
  }, [id]);
  return [actorMovies, setActorMovies];
};

export default useActorMovies;