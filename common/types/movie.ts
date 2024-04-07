/* eslint-disable @typescript-eslint/no-explicit-any */

import { MovieData } from "./movieAttr";

type MovieObj = MovieData[];

export type node = React.ReactNode;
export type newMovieType = {
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
  movie?: MovieData;
  movieID: string;
  watched: MovieObj;
  ratingValue: string | number | undefined;
  userRating?: string | number;
  onCloseMovie: () => void;
  onAddMovie: (movie: newMovieType) => void;
  onUserRating?: React.Dispatch<React.SetStateAction<string>>;
  onSelectMovie: (id: string | null | undefined) => void;
}

export interface IMovieList extends IMovieBase {
  curPages: number;
  totalRes: number;
  onPage?: any;
}

export interface IMovieType
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

export interface ISelectedMovie extends IMovieBase {
  movieID: string;
  onCloseMovie: () => void;
  onAddMovie: (movie: MovieObj | newMovieType) => void;
  watched: MovieObj;
  userRating?: string | number;
  onUserRating?: React.Dispatch<React.SetStateAction<string>>;
}

export interface IMovieDetailsHeader
  extends Omit<IMovieBase, "movies" | "onSelectMovie"> {
  movie: any;
}

export interface IMovieResult {
  founded: string;
  curPages: number;
  result: number;
}

export interface IMovieDetailsSection extends IMovieBase {}
export interface IWatchedSummary extends Pick<IMovieBase, "watched"> {}
export interface IWatchedMovieList
  extends Pick<IMovieBase, "watched" | "movie"> {
  onDelete: () => void;
}
export interface IWatchedMovie extends Pick<IMovieBase, "watched"> {
  movie?: MovieData | newMovieType;
  onDelete?: (id: string) => void;
}
export interface IContainer {
  children: node;
}
