import { useEffect, useState } from "react";
import {getMovieCredits} from '../api/tmdb-api'

const useCredits= id => {
  const [credits, setCredits] = useState(null);
  useEffect(() => {
    getMovieCredits(id).then(credits => {
      setCredits(credits);
    });
  }, [id]);
  return [credits, setCredits];
};

export default useCredits;