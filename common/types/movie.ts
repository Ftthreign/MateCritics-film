type MovieObj = MovieData[];

export type node = React.ReactNode;

export type MovieData = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Plot: string;
  Director: string;
  Actor: string;
  Genre: string;
  Runtime: string;
  myRating?: number;
};

export interface IMovieList {
  movies: MovieObj;
  onSelectMovie: (id: string | null) => void;
  movie?: MovieData;
  curPages: number;
  totalRes: number;
  onPage?: (a: number, b: number) => void;
}

export interface IMovieType {
  key: string;
  movie: MovieData;
  onSelectMovie: (id: string | null) => void;
}

export interface IContainer {
  children: node;
}

export interface ISelectedMovie {
  movieID: string;
  onCloseMovie: () => void;
  onAddMovie: (movie: MovieObj | newMovieType) => void;
  watched: MovieObj;
  userRating?: string | number;
  onUserRating?: React.Dispatch<React.SetStateAction<string>>;
}

export interface IMovieDetailsHeader {
  onCloseMovie: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movie: any;
  movieID: string;
  watched: MovieObj;
  ratingValue: string | number | undefined;
  onAddMovie: (movie: newMovieType) => void;
  userRating?: string | number;
  onUserRating?: React.Dispatch<React.SetStateAction<string>>;
}

export interface IMovieResult {
  founded: string;
  curPages: number;
  result: number;
}

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

export interface IMovieDetailsSection {
  movieID: string;
  movie: newMovieType;
  watched: MovieObj;
  ratingValue: string | number | undefined;
  onClose: () => void;
  onAddMovie: (movie: newMovieType) => void;
  userRating?: string | number;
  onUserRating?: React.Dispatch<React.SetStateAction<string>>;
}

export interface IWatchedSummary {
  watched?: MovieObj;
}
export interface IWatchedMovieList {
  watched?: MovieObj;
  onDelete: () => void;
  movie?: MovieData[];
}

export interface IWatchedMovie {
  movie?: MovieData | newMovieType;
  watched?: MovieObj;
  onDelete?: (id: string) => void;
}
