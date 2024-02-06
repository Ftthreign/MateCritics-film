import { ISelectedMovie } from "../../../../common/types/movie";
import { useCallback, useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { API_KEY } from "../../../../common/refs/data";

import MovieStyle from "./MovieDetails.module.css";
import MovieDetailsHeader from "./movieDetails";

const SelectedMovie = ({
  movieID,
  onCloseMovie,
  onAddMovie,
  watched,
  userRating,
  onUserRating,
}: ISelectedMovie) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsloading] = useState(false);

  const getMovieDetails = useCallback(async () => {
    try {
      setIsloading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&plot=full&i=${movieID}`
      );
      const data = await res.json();

      setMovie(data);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    } finally {
      setIsloading(false);
    }
  }, [movieID]);

  useEffect(() => {
    getMovieDetails();
  }, [movieID, getMovieDetails]);

  useEffect(() => {
    const escKey = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onCloseMovie();
        console.log("is Closing");
      }
    };

    document.addEventListener("keydown", escKey);

    return () => document.removeEventListener("keydown", escKey);
  }, [onCloseMovie]);

  return (
    <div className={MovieStyle.movie__details}>
      {isLoading ? (
        <CircularProgress color="info" />
      ) : (
        <>
          <MovieDetailsHeader
            onCloseMovie={onCloseMovie}
            movie={movie}
            movieID={movieID}
            ratingValue={userRating}
            onUserRating={onUserRating}
            onAddMovie={onAddMovie}
            watched={watched}
          />
        </>
      )}
    </div>
  );
};

export default SelectedMovie;
