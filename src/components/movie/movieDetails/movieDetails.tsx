import { useRef, useEffect } from "react";
import { IMovieDetailsHeader } from "../../../../common/types/movie";
import Style from "./MovieDetails.module.css";
import StarRating from "../../ratings/StarRating";

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
  }

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
        <h2>{title}</h2>
        <div className={movieDescription}>
          <div>
            <img src={poster} alt={`${title} poster`} />
            <span>Rate the movie here : </span>
            <div className={ratingStyle}>
              {isAlreadyWatched ? (
                <p>{`You already watched this with ${userRatingValue} star`}</p>
              ) : (
                <>
                  <StarRating
                    size={24}
                    maxRating={10}
                    onSetRating={onUserRating}
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
            <p className={genreStyle}>{genre}</p>
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
