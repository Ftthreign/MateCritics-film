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
  imdbRating?: string;
  Languange?: string;
  Country?: string;
  myRating?: string | number;
  rating?: number;
  duration?: number | string;
  poster?: string;
  title?: string;
};

export interface IMovieList {
  movies: MovieObj;
  onSelectMovie: (id: string | null) => void;
  movie?: MovieData;
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
  // onUserRating: React.Dispatch<React.SetStateAction<string>>;
  userRating?: string | number;
  onUserRating?: React.Dispatch<React.SetStateAction<string>>;
}

export interface IMovieResult {
  founded: string;
  movies: MovieObj;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movie: any;
  watched: MovieObj;
  ratingValue: string | number | undefined;
  onClose: () => void;
  onAddMovie: (movie: newMovieType) => void;
  // onUserRating: React.Dispatch<React.SetStateAction<string>>;
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
