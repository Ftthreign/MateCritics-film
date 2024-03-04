import { IMovieResult } from "@/common/types/movie";
import movieStyle from "../movie.module.css";
const MovieResultNum = ({ founded, result, curPages }: IMovieResult) => {
  const { found__res } = movieStyle;

  return (
    <div>
      {founded.length >= 3 && (
        <div className={found__res}>
          <h1>{`Found the result for : ${founded}  ${
            curPages > 1 ? ` - Pages : ${curPages}` : ""
          }  `}</h1>
          <p>{`Found ${result} items`}</p>
        </div>
      )}
    </div>
  );
};

export default MovieResultNum;
