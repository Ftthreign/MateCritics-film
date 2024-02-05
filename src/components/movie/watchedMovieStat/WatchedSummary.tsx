import { IWatchedSummary } from "../../../../common/types/movie";

const WatchedSummary = ({ watched }: IWatchedSummary) => {
  const avg = (arr: any) =>
    arr.reduce(
      (acc: number, cur: number, _: string, arr: string | string[]) =>
        acc + cur / arr.length,
      0
    );
  const avgImdbRating = avg(watched?.map((movie) => movie.rating));
  const avgUserRating = avg(watched?.map((movie) => movie.myRating));
  const avgRuntime = avg(watched?.map((movie) => movie.duration));
  return (
    <div className="summary">
      <h2>Movie You Watched</h2>
      <div>
        <p>
          <span>emo1</span>
          <span>{watched?.length} Movies</span>
        </p>
        <p>
          <span>emo2</span>
          <span>{avgImdbRating === 0 ? 0 : avgImdbRating.toFixed(2)}</span>
        </p>
        {avgUserRating && (
          <p>
            <span>emo3</span>
            <span>{avgUserRating.toFixed(2)}</span>
          </p>
        )}
        <p>
          <span>emo4</span>
          <span>{avgRuntime.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
