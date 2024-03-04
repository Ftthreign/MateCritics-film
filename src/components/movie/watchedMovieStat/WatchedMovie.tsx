import { IWatchedMovie } from "@/common/types/movie";
import Style from "./WatchedMovie.module.css";

const WatchedMovie = ({ movie, onDelete }: IWatchedMovie) => {
  const handleConfirm = (id: string | undefined) => {
    const confirm = window.confirm("Are you sure want to delete this film?");
    confirm && id && onDelete?.(id);
  };

  const { list, listDetails, listText } = Style;

  return (
    <li>
      <h3>{movie?.title}</h3>
      <div className={list}>
        <img src={movie?.poster} alt={`${movie?.title} poster`} />
        <div className={listDetails}>
          <p>
            <span>⭐️</span>
            <span className={listText}>IMDB Rating : </span>
            <span>{movie?.rating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span className={listText}>Your Rating : </span>
            <span>{movie?.myRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span className={listText}>Runtime :</span>
            <span> {movie?.duration} min</span>
          </p>
        </div>
        <button onClick={() => handleConfirm(movie?.imdbID)}>
          Delete List
        </button>
      </div>
    </li>
  );
};

export default WatchedMovie;
