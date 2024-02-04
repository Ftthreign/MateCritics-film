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
  Languange?: string;
  Country?: string;
  myRating?: string | number;
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
  onAddMovie: (movie: MovieObj) => void;
  watched: MovieObj;
}

export interface IMovieDetailsHeader {
  onCloseMovie: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movie: any;
}

export interface IMovieResult {
  founded: string;
  movies: MovieObj;
}
type newMovieType = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  rating: number;
  duration: number | string;
  countRatingDecisions: number | string;
};
export interface IMovieDetailsSection {
  movieID: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movie: any;
  watched: MovieObj;
  ratingValue: string | number;
  onClose: () => void;
  onAddMovie: (movie: newMovieType) => void;
  onUserRating: React.Dispatch<React.SetStateAction<string>>;
}
