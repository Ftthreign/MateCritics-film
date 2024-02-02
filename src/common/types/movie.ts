type MovieData = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
};

export interface IMovieList {
  movies: MovieData[];
  founded: string;
  onSelectMovie: (id: string | null) => void;
  movie?: MovieData;
}

export interface MovieType {
  key: string;
  movie: MovieData;
  onSelectMovie: (id: string | null) => void;
}
