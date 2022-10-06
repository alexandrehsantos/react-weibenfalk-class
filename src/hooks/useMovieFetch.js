import { useState, useEffect, useCallback } from "react";
import API from "../API";

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

    fetchMovie();
  }, [movieId]);

  return { state, loading, error};
};
