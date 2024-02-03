import { IMovieDetailsHeader } from "../../common/types/movie";

const MovieDetailsHeader = ({ onCloseMovie, movie }: IMovieDetailsHeader) => {
  const {
    Title: title,
    Released: release,
    Runtime: duration,
    Poster: poster,
    imdbRating: rating,
    Genre: genre,
  } = movie;
  return (
    <header>
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      <img src={poster} alt={`${title} poster`} />
      <div className="details-overview">
        <h2>{title}</h2>
        <p>
          {release} &bull; {duration === "N/A" ? "Ongoing" : duration}
        </p>
        <p>{genre}</p>
        <p>
          <span>⭐</span>
          {rating} <strong>IMDB Rating</strong>
        </p>
      </div>
    </header>
  );
};

export default MovieDetailsHeader;
