import CircularProgress from "@mui/material/CircularProgress";
import { useCallback, useEffect, useState } from "react";
import { NavbarLogo, SearchBox, NavAccount } from "./components/navbar";
import { MovieData } from "../common/types/movie";
import { useFetchMovie } from "../hooks/useFetchMovie";

import "./main.css";
import NavbarContainer from "./components/navbar/NavbarContainer";
import MovieList from "./components/movie/movieList";
import ErrorMessage from "./components/errorMsg/ErrorMessage";
import ContainerBox from "./components/movie/ContainerBox";
import SelectedMovie from "./components/movie/movieDetails/SelectedMovie";
import MovieResultNum from "./components/movie/movieResult/movieResult";
import Button from "./components/button/button";
import Modal from "./components/modal/modal";
import WatchedSummary from "./components/movie/watchedMovieStat/WatchedSummary";
import WatchedMovieList from "./components/movie/watchedMovieStat/WatchedMovieList";

const App = () => {
  const [query, setQuery] = useState<string>("doraemon");
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const [watched, setWatched] = useState<MovieData[]>([]);
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [isOpenWatched, setIsOpenWatched] = useState<boolean>(false);

  // Function Utilities
  const handleSelectMovie = (id: string | null) => {
    setSelectedId(id);
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

  const handleCloseMovie = useCallback(() => {
    setSelectedId(null);
  }, []);

  const { movies, isLoading, error } = useFetchMovie(query, handleCloseMovie);

  useEffect(() => {
    alert(
      "GUIDE :\nPRESS 'ENTER' to auto focus on search\nPRESS 'ESC' to back to main page"
    );
  }, []);

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
        {isLoading && (
          <div className="progressbar">
            <CircularProgress color="info" />
          </div>
        )}
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
