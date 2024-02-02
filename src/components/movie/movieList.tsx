import { IMovieList, MovieType } from "../../common/types/movie";
import "./movie.css";
const MovieList = ({ movies, founded, onSelectMovie }: IMovieList) => {
  return (
    <>
      {founded.length >= 3 && <h1>{`Found the result for : ${founded}`}</h1>}
      <ul className="list__movies">
        {movies.map((movieData) => (
          <Movie
            movie={movieData}
            key={movieData.imdbID}
            onSelectMovie={(id) => onSelectMovie(id)}
          />
        ))}
      </ul>
    </>
  );
};

const Movie = ({ movie, onSelectMovie }: MovieType) => {
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

export default MovieList;
