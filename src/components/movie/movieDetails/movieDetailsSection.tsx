import { IMovieDetailsSection } from "../../../../common/types/movie";
import { useRef, useEffect } from "react";

import StarRating from "../../ratings/StarRating";

const MovieDetailsSection = ({
  onAddMovie,
  movieID,
  onClose,
  watched,
  ratingValue,
  movie,
  onUserRating,
}: IMovieDetailsSection) => {
  const countRef = useRef(0);
  const {
    Plot: plot,
    Actors: actors,
    Director: director,
    imdbRating: rating,
    Poster: poster,
    Year: year,
    Title: title,
    Runtime: duration,
  } = movie;

  const isAlreadyWathced = watched.some((movie) => movie.imdbID === movieID);
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
      countRatingDecisions: countRef.current,
    };
    onAddMovie(newMovie);
    onClose();
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
    <section>
      <div className="rating">
        {isAlreadyWathced ? (
          <p>{`You already watched this with ${userRatingValue} star`}</p>
        ) : (
          <>
            <StarRating size={24} maxRating={10} onSetRating={onUserRating} />
            {ratingValue && (
              <button onClick={handleAdd}>{"Add to list + "}</button>
            )}
          </>
        )}
      </div>
      <p>
        <em>{plot}</em>
      </p>
      <p>Starring {actors}</p>
      <p>Directed by {director}</p>
    </section>
  );
};

export default MovieDetailsSection;
