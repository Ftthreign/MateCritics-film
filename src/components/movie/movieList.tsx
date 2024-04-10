import type { IMovieList } from "@/common/types/movie";
import Movie from "./movie";
import MovieStyle from "@style/movie.module.css";
import { Pagination } from "@mui/material";

const MovieList = ({
  movies,
  totalRes,
  curPages,
  onPage,
  onSelectMovie,
}: IMovieList) => {
  const { list__movies, pagination } = MovieStyle;
  const totalPages = Math.ceil(totalRes / 10);

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
      <div className={pagination}>
        <Pagination
          count={totalPages}
          color="primary"
          onChange={onPage}
          page={curPages}
          size="large"
        />
      </div>
    </>
  );
};

export default MovieList;
