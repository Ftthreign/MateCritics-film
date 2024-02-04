import { IMovieList } from "../../../common/types/movie";
import Movie from "./movie";
import MovieStyle from "./movie.module.css";

const MovieList = ({ movies, onSelectMovie }: IMovieList) => {
  const { list__movies } = MovieStyle;

  return (
    <>
      <ul className={list__movies}>
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
