import { IWatchedMovie } from "../../../../common/types/movie";

const WatchedMovie = ({ movie, onDelete }: IWatchedMovie) => {
  const handleConfirm = (id: string | undefined) => {
    const confirm = window.confirm("Are you sure want to delete this film?");
    confirm && id && onDelete?.(id);
  };

  return (
    <li>
      <img src={movie?.poster} alt={`${movie?.title} poster`} />
      <h3>{movie?.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie?.rating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie?.myRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie?.duration} min</span>
        </p>

        <button
          onClick={() => handleConfirm(movie?.imdbID)}
          className="btn-delete"
        >
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedMovie;