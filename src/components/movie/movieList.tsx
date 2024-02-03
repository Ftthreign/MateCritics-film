import { IMovieList } from "../../common/types/movie";
import Movie from "./movie";
import "./movie.css";

const MovieList = ({ movies, founded, onSelectMovie }: IMovieList) => {
  return (
    <>
      {founded.length >= 3 && (
        <div className="found__res">
          <h1>{`Found the result for : ${founded}`}</h1>
          <p>{`Found ${movies.length} items`}</p>
        </div>
      )}
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

export default MovieList;
