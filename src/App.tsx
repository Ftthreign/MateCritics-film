import { useEffect, useState } from "react";

import NavbarContainer from "./components/navbar/NavbarContainer";
import NavbarLogo from "./components/navbar/NavbarLogo";
import SearchBox from "./components/navbar/SearchBox";
import NavAccount from "./components/navbar/NavAccount";
import MovieList from "./components/movie/movieList";
import ErrorMessage from "./components/errorMsg/ErrorMessage";
import ContainerBox from "./components/ContainerBox";
import SelectedMovie from "./components/movieDetails/SelectedMovie";

import CircularProgress from "@mui/material/CircularProgress";

import { API_KEY } from "./common/refs/data";
import { MovieData } from "./common/types/movie";
const App = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [query, setQuery] = useState<string>("doraemon");
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const [watched, setWatched] = useState<MovieData[]>([]);

  useEffect(() => {
    const fetchMovies = async function (): Promise<void> {
      try {
        setIsloading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );

        if (!res.ok) throw new Error("Error Fetching data");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not Found");

        console.log(data);
        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsloading(false);
      }
    };

    fetchMovies();

    const debounceFetch = setTimeout(fetchMovies, 500);
    return () => {
      clearTimeout(debounceFetch);
    };
  }, [query]);

  // Function Utilities
  const handleSelectMovie = (id: string | null) => {
    setSelectedId((select) => (id === select ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddWatchList = (movie: any) => {
    if (movie.Runtime !== "N/A" || movie.Runtime !== "Ongoing") {
      setWatched((watchList) => [...watchList, movie]);
    }
  };

  return (
    <>
      <NavbarContainer>
        <NavbarLogo />
        <SearchBox query={query} setQuery={setQuery} />
        <NavAccount />
      </NavbarContainer>

      <ContainerBox>
        {isLoading && <CircularProgress color="secondary" />}
        {error && <ErrorMessage errorMessage={error} />}
        {!isLoading && !error && (
          <MovieList
            movies={movies}
            founded={query}
            onSelectMovie={(id) => handleSelectMovie(id)}
          />
        )}
      </ContainerBox>

      <ContainerBox>
        {selectedId && (
          <SelectedMovie
            movieID={selectedId}
            onAddMovie={handleAddWatchList}
            onCloseMovie={handleCloseMovie}
            watched={watched}
          />
        )}
      </ContainerBox>
    </>
  );
};

export default App;
