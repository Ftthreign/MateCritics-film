import { IWatchedMovie } from "@/common/types/movie";
import Style from "@style/WatchedMovie.module.css";

const WatchedSummary = ({ watched }: IWatchedMovie) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const avg = (arr: any) =>
    arr.reduce(
      (acc: number, cur: number, _: string, arr: string | string[]) =>
        acc + cur / arr.length,
      0
    );
  const avgImdbRating = avg(watched?.map((movie) => movie.rating));
  const avgUserRating = avg(watched?.map((movie) => movie.rating));
  const avgRuntime = avg(watched?.map((movie) => movie.duration));

  const { summary, summaryDetails } = Style;

  return (
    <div className={summary}>
      <h2>Movie You Watched</h2>
      <div className={summaryDetails}>
        <p>
          <span>Total Movie : </span>
          <span>{watched?.length} Movies</span>
        </p>
        <p>
          <span>Average IMDB Rating : </span>
          <span>{avgImdbRating === 0 ? 0 : avgImdbRating.toFixed(2)}</span>
        </p>
        {avgUserRating ? (
          <p>
            <span>Average Your Rating : </span>
            <span>{avgUserRating.toFixed(2)}</span>
          </p>
        ) : (
          ""
        )}
        <p>
          <span>Average Runtime : </span>
          <span>{avgRuntime.toFixed(2)} Min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
