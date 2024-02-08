/* eslint-disable @typescript-eslint/no-explicit-any */
import CircularProgress from "@mui/material/CircularProgress";
import { useCallback, useEffect, useState } from "react";
import { NavbarLogo, SearchBox, NavAccount } from "./components/navbar";
import { useFetchMovie } from "../hooks/useFetchMovie";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
import Footer from "./components/footer/footer";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const [watched, setWatched] = useLocalStorage([], "WatchedData");
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [isOpenWatched, setIsOpenWatched] = useState<boolean>(false);

  // Function Utilities
  const handleSelectMovie = (id: string | null) => {
    setSelectedId(id);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddWatchList = (movie: any) => {
    if (movie.duration !== "N/A" || movie.duration !== "Ongoing") {
      setWatched((watchList: any) => [...watchList, movie]);
    }
  };

  const handleOpen = () => {
    setIsOpenWatched((e) => !e);
  };

  const handleOpenList = () => {
    setIsOpenList(true);
  };

  const handleDeleteWatchedMovie = (id: string) => {
    setWatched((watch: any[]) => watch.filter((movie) => movie.imdbID !== id));
  };

  const handleCloseMovie = useCallback(() => {
    setSelectedId(null);
  }, []);

  const { movies, isLoading, error, curPages, totalRes, handleChangePage } =
    useFetchMovie(query, handleCloseMovie);

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
            <CircularProgress color="warning" />
          </div>
        )}
        {error && <ErrorMessage errorMessage={error} />}
        {!isLoading && !error && (
          <>
            <MovieResultNum
              founded={query}
              result={totalRes}
              curPages={curPages}
            />
            <div className="separate__movie">
              <Button click={handleOpenList}>
                <MovieList
                  movies={movies}
                  onSelectMovie={(id) => handleSelectMovie(id)}
                  totalRes={totalRes}
                  curPages={curPages}
                  onPage={handleChangePage}
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

      <ContainerBox>
        <Footer />
      </ContainerBox>
    </>
  );
};

export default App;
