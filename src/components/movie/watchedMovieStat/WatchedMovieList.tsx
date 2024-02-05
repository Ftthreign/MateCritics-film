import { IWatchedMovie } from "../../../../common/types/movie";
import WatchedMovie from "./WatchedMovie";

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
