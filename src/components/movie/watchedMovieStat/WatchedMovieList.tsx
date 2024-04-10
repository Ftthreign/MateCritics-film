import type { IWatchedMovie } from "@/common/types/movie";
import WatchedMovie from "./WatchedMovie";
import Style from "@style/WatchedMovie.module.css";

const { empty__data } = Style;

const WatchedMovieList = ({ watched, onDelete }: IWatchedMovie) => {
  return (
    <>
      {watched?.length === 0 ? (
        <div className={empty__data}>
          Your watched list is empty, Please add your Rated film
        </div>
      ) : (
        <ul>
          {watched?.map((movie) => (
            <WatchedMovie
              movie={movie}
              key={movie.imdbID}
              onDelete={onDelete}
              watched={watched}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default WatchedMovieList;
