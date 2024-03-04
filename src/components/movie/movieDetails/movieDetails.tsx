import { useRef, useEffect } from "react";
import { IMovieDetailsHeader } from "@/common/types/movie";
import StarRating from "@components/ratings/StarRating";
import Style from "./MovieDetails.module.css";

const MovieDetailsHeader = ({
  onCloseMovie,
  movie,
  onAddMovie,
  movieID,
  watched,
  ratingValue,
  onUserRating,
}: IMovieDetailsHeader) => {
  const {
    Title: title,
    Released: release,
    Runtime: duration,
    Poster: poster,
    imdbRating: rating,
    Genre: genre,
    Plot: plot,
    Actors: actors,
    Director: director,
    Year: year,
  } = movie;

  const {
    btnBack,
    detailsOverview,
    movieDescription,
    ratingStyle,
    genreStyle,
    rated,
    MovieTitle,
  } = Style;
  const countRef = useRef(0);

  const isAlreadyWatched = watched.some((movie) => movie.imdbID === movieID);
  const userRatingValue = watched.find(
    (movie) => movie.imdbID === movieID
  )?.myRating;

  function handleAdd() {
    const isNumberDuration =
      duration === "N/A" ? 0 : Number(duration.split(" ").at(0));

    const newMovie = {
      imdbID: movieID,
      title,
      year,
      poster,
      rating: Number(rating),
      duration: isNumberDuration,
      myRating: ratingValue,
      countRatingDecisions: countRef.current,
    };

    onAddMovie(newMovie);
    onCloseMovie();
    alert(`${newMovie.title} added to watched list`);
  }

  useEffect(() => {
    if (userRatingValue) countRef.current = countRef.current++;
  }, [userRatingValue]);

  useEffect(() => {
    if (!title) return;

    document.title = `Movie | ${title}`;

    return () => {
      document.title = "MateCritics ";
      console.log(`Clean up function for movie ${title}`);
    };
  }, [title]);

  return (
    <header>
      <button className={btnBack} onClick={onCloseMovie}>
        X
      </button>
      <div className={detailsOverview}>
        <h2 className={MovieTitle}>{title}</h2>
        <div className={movieDescription}>
          <div>
            <img src={poster} alt={`${title} poster`} />
            {!ratingValue && !isAlreadyWatched && (
              <span>Rate the movie here : </span>
            )}
            <div className={ratingStyle}>
              {isAlreadyWatched ? (
                <p
                  className={rated}
                >{`You already watched this with ${userRatingValue} ⭐`}</p>
              ) : (
                <>
                  <StarRating
                    size={24}
                    maxRating={10}
                    onSetRating={onUserRating}
                    color="red"
                  />
                  {ratingValue && (
                    <button onClick={handleAdd}>{"Add to list + "}</button>
                  )}
                </>
              )}
            </div>
          </div>
          <div>
            <p>
              <span>Release Date :</span> {release}{" "}
            </p>
            <p>
              <span>Duration :</span>{" "}
              {duration === "N/A" ? "Ongoing" : duration}
            </p>
            <p className={genreStyle}>
              <strong>Genre : </strong>
              {genre}
            </p>
            <p>
              <span>⭐</span>
              {rating} <strong>IMDB Rating</strong>
            </p>
            <p>
              <span>Starring :</span> {actors}
            </p>
            <p>
              <span>Directed by :</span> {director}
            </p>
            <p>
              <em>{plot}</em>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MovieDetailsHeader;
