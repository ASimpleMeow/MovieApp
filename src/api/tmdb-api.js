import { faRss } from "@fortawesome/free-solid-svg-icons";

export const getMovies = () => {
    return fetch(
      '/api/movies', {headers: {
        'Authorization': window.localStorage.getItem('token')
      }}
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    return fetch(
      `/api/movies/${id}`, {headers: {
        'Authorization': window.localStorage.getItem('token')
      }}
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      '/api/genres', {headers: {
        'Authorization': window.localStorage.getItem('token')
      }}
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
      `/api/movies/${id}/reviews`, {headers: {
        'Authorization': window.localStorage.getItem('token')
      }}
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getMovieCredits = id => {
    return fetch(
      `/api/movies/${id}/credits`, {headers: {
        'Authorization': window.localStorage.getItem('token')
      }}
    )
      .then(res => res.json())
      .then(json => json.cast);
  };

  export const getActor = id => {
    return fetch(
      `/api/actor/${id}`, {headers: {
        'Authorization': window.localStorage.getItem('token')
      }}
    )
      .then(res => res.json());
  }

  export const getActorMovies = id => {
    return fetch(
      `/api/actor/${id}/movies`, {headers: {
        'Authorization': window.localStorage.getItem('token')
      }}
    )
      .then(res => res.json())
      .then(json => json.cast)
  }

  export const loginUser = user => {
    return fetch(
      `/api/users`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': window.localStorage.getItem('token')
        },
        body: JSON.stringify(user)
      }
    ).then(res => res.json())
  }

  export const registerUser = user => {
    return fetch(
      `/api/users?action=register`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': window.localStorage.getItem('token')
        },
        body: JSON.stringify(user)
      }
    ).then(res => res.json())
  }