import { useState, useEffect } from "react";
import API from "../API";

//Helpers
import {isPersistedState} from '../helpers'

export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        console.log(movie);
        const credits = await API.fetchCredits(movieId);
        console.log(credits);
        // Get directors only
        const directors = credits.crew.filter(
          member => member.job === 'Director'
        );

        console.log(directors.length);

        setState({
          ...movie,
          actors: credits.cast,
          directors
        });

        console.log(movie.poster_path);

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(movieId);

    console.log("session state" + sessionState);
    
    if(sessionState){
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  // Write to sessionStorage
  useEffect(()=> {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state])

  return { state, loading, error};
};
