/* eslint-disable @typescript-eslint/no-explicit-any */

import { MovieData } from "./movieAttr";

type MovieObj = MovieData[];
type node = React.ReactNode;
type newMovieType = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  rating: number;
  duration: number | string;
  countRatingDecisions: number | string;
  myRating?: number | string;
};

interface IMovieBase {
  movies: MovieObj;
  movie: MovieData;
  movieID: string;
  watched: MovieObj;
  ratingValue: string | number | undefined;
  userRating?: string | number;
  onCloseMovie: () => void;
  onAddMovie: (movie: newMovieType) => void;
  onUserRating?: React.Dispatch<React.SetStateAction<string>>;
  onSelectMovie: (id: string | null) => void;
}

interface IMovieList extends Pick<IMovieBase, "movies" | "onSelectMovie"> {
  curPages: number;
  totalRes: number;
  onPage?: any;
}

interface IMovieType
  extends Omit<
    IMovieBase,
    | "onCloseMovie"
    | "onAddMovie"
    | "movies"
    | "movieID"
    | "watched"
    | "ratingValue"
  > {
  key: string;
}

interface ISelectedMovie
  extends Pick<IMovieBase, "movieID" | "onCloseMovie" | "watched"> {
  onAddMovie: (movie: MovieObj | newMovieType) => void;
}

interface IMovieDetailsHeader
  extends Omit<IMovieBase, "movies" | "onSelectMovie"> {
  movie: any;
}

interface IMovieResult {
  founded: string;
  curPages: number;
  result: number;
}

interface IMovieDetailsSection extends IMovieBase {}
interface IWatchedSummary extends Pick<IMovieBase, "watched"> {}
interface IWatchedMovieList extends Pick<IMovieBase, "watched" | "movie"> {
  onDelete: () => void;
}
interface IWatchedMovie extends Pick<IMovieBase, "watched"> {
  movie?: MovieData | newMovieType;
  onDelete?: (id: string) => void;
}
interface IContainer {
  children: node;
}

export type {
  IMovieList,
  IMovieType,
  ISelectedMovie,
  IMovieDetailsHeader,
  IMovieResult,
  IMovieDetailsSection,
  IWatchedSummary,
  IWatchedMovieList,
  IWatchedMovie,
  IContainer,
};
export type { node };
