import WatchedMovie from "./WatchedMovie";
import { IWatchedMovie } from "../../../../common/types/movie";

const WatchedMovieList = ({ watched, onDelete }: IWatchedMovie) => {
  return (
    <ul>
      {watched?.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
