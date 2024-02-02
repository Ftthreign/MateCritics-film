import { useEffect, useState } from "react";

import NavbarContainer from "./components/navbar/NavbarContainer";
import NavbarLogo from "./components/navbar/NavbarLogo";
import SearchBox from "./components/navbar/SearchBox";
import NavAccount from "./components/navbar/NavAccount";
import MovieList from "./components/movie/movieList";
import ErrorMessage from "./components/errorMsg/ErrorMessage";

import CircularProgress from "@mui/material/CircularProgress";

const API_KEY: string = import.meta.env.VITE_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState<string>("doraemon");
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [selectedId, setSelectedId] = useState<null | string>(null);
  // const [watched, setWatched] = useState();

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

        setMovies(data.Search);
        setError("");
        console.log(data.Search);
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

  const handleSelectMovie = (id: string | null) => {
    setSelectedId((select) => (id === select ? null : id));
  };

  return (
    <>
      <NavbarContainer>
        <NavbarLogo />
        <SearchBox query={query} setQuery={setQuery} />
        <NavAccount />
      </NavbarContainer>

      {isLoading && <CircularProgress color="secondary" />}
      {error && <ErrorMessage errorMessage={error} />}
      {!isLoading && !error && (
        <MovieList
          movies={movies}
          founded={query}
          onSelectMovie={(id) => handleSelectMovie(id)}
        />
      )}
    </>
  );
};

export default App;
