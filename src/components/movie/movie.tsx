import { IMovieType } from "../../common/types/movie";

const Movie = ({ movie, onSelectMovie }: IMovieType) => {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)} className="item">
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        style={{ width: "300px", height: "400px" }}
      />
      <h3>{movie.Title}</h3>
      <div>
        <span>⭐</span>
        <span>{movie.Year}</span>
      </div>
    </li>
  );
};

export default Movie;
