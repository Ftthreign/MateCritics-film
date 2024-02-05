import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

import NavbarContainer from "./components/navbar/NavbarContainer";
import MovieList from "./components/movie/movieList";
import ErrorMessage from "./components/errorMsg/ErrorMessage";
import ContainerBox from "./components/movie/ContainerBox";
import SelectedMovie from "./components/movie/movieDetails/SelectedMovie";
import MovieResultNum from "./components/movie/movieResult/movieResult";
import Button from "./components/button/button";
import Modal from "./components/modal/modal";
import { NavbarLogo, SearchBox, NavAccount } from "./components/navbar";
import { API_KEY } from "../common/refs/data";
import { MovieData } from "../common/types/movie";
import WatchedSummary from "./components/movie/watchedMovieStat/WatchedSummary";
import WatchedMovieList from "./components/movie/watchedMovieStat/WatchedMovieList";

const App = () => {
  const [query, setQuery] = useState<string>("doraemon");
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const [watched, setWatched] = useState<MovieData[]>([]);
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [isOpenWatched, setIsOpenWatched] = useState<boolean>(false);
  const [userRating, setUserRating] = useState("");

  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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
    setSelectedId(id);
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddWatchList = (movie: any) => {
    if (movie.duration !== "N/A" || movie.duration !== "Ongoing") {
      setWatched((watchList) => [...watchList, movie]);
    }
  };

  const handleOpen = () => {
    setIsOpenWatched((e) => !e);
  };

  const handleOpenList = () => {
    setIsOpenList(true);
  };

  const handleDeleteWatchedMovie = (id: string) => {
    setWatched((watch) => watch.filter((movie) => movie.imdbID !== id));
  };

  return (
    <>
      <NavbarContainer>
        <NavbarLogo />
        <SearchBox query={query} setQuery={setQuery} />
        <Button click={handleOpen}>
          <NavAccount />
        </Button>
      </NavbarContainer>

      <ContainerBox>
        {isLoading && <CircularProgress color="secondary" />}
        {error && <ErrorMessage errorMessage={error} />}
        {!isLoading && !error && (
          <>
            <MovieResultNum founded={query} movies={movies} />
            <div className="separate__movie">
              <Button click={handleOpenList}>
                <MovieList
                  movies={movies}
                  onSelectMovie={(id) => handleSelectMovie(id)}
                />
              </Button>
            </div>
          </>
        )}
      </ContainerBox>

      {selectedId ? (
        <Modal isOpen={isOpenList} click={handleOpenList}>
          <ContainerBox>
            {selectedId && (
              <SelectedMovie
                movieID={selectedId}
                onAddMovie={handleAddWatchList}
                onCloseMovie={handleCloseMovie}
                watched={watched}
                userRating={userRating}
                onUserRating={setUserRating}
              />
            )}
          </ContainerBox>
        </Modal>
      ) : (
        ""
      )}

      <Modal isOpen={isOpenWatched} click={handleOpen}>
        <ContainerBox>
          <WatchedSummary watched={watched} />
          <WatchedMovieList
            watched={watched}
            onDelete={handleDeleteWatchedMovie}
          />
        </ContainerBox>
      </Modal>
    </>
  );
};

export default App;
