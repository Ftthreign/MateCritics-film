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
};

export interface IMovieList {
  movies: MovieData[];
  founded: string;
  onSelectMovie: (id: string | null) => void;
  movie?: MovieData;
}

export interface IMovieType {
  key: string;
  movie: MovieData;
  onSelectMovie: (id: string | null) => void;
}

export interface IContainer {
  children: React.ReactNode;
}

export interface ISelectedMovie {
  movieID: string;
  onCloseMovie: () => void;
  onAddMovie: (movie: MovieData[]) => void;
  watched: MovieData[];
}

export interface IMovieDetailsHeader {
  onCloseMovie: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movie: any;
}
