/* eslint-disable @typescript-eslint/no-explicit-any */
import CircularProgress from "@mui/material/CircularProgress";
import { useCallback, useEffect, useState } from "react";
import { NavbarLogo, SearchBox, NavAccount } from "@components/navbar";
import { useFetchMovie } from "@/hooks/useFetchMovie";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import "./main.css";
import NavbarContainer from "@components/navbar/NavbarContainer";
import MovieList from "@components/movie/movieList";
import ErrorMessage from "@components/errorMsg/ErrorMessage";
import ContainerBox from "@movie/ContainerBox";
import SelectedMovie from "@movie/movieDetails/SelectedMovie";
import MovieResultNum from "@movie/movieResult/movieResult";
import Button from "@components/button/button";
import Modal from "@components/modal/modal";
import WatchedSummary from "@movie/watchedMovieStat/WatchedSummary";
import WatchedMovieList from "@movie/watchedMovieStat/WatchedMovieList";
import Footer from "@components/footer/footer";
import HamburgerMenu from "@components/navbar/HamburgerMenu";

const App = () => {
  const [open, setOpen] = useState({
    isOpenList: false,
    isOpenWatched: false,
    openMenu: false,
  });
  const [query, setQuery] = useState<string>("");
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const [isMobile, setIsmobile] = useState<boolean>(false);
  const [watched, setWatched] = useLocalStorage([], "WatchedData");

  // Function Utilities
  const handleSelectMovie = (id: string | null) => {
    setSelectedId(id);
  };

  const handleAddWatchList = (movie: any) => {
    if (movie.duration !== "N/A" || movie.duration !== "Ongoing") {
      setWatched((watchList: any) => [...watchList, movie]);
    }
  };

  const handleOpen = () => {
    setOpen((prev) => ({ ...prev, isOpenWatched: !prev.isOpenWatched }));
  };

  const handleOpenList = () => {
    setOpen((prev) => ({ ...prev, isOpenList: true }));
  };

  const handleDeleteWatchedMovie = (id: string) => {
    setWatched((watch: any[]) => watch.filter((movie) => movie.imdbID !== id));
  };

  const handleCloseMovie = useCallback(() => {
    setSelectedId(null);
  }, []);

  const { movies, isLoading, error, curPages, totalRes, handleChangePage } =
    useFetchMovie(query, handleCloseMovie);

  const handleToggleMenu = () => {
    setOpen({ ...open, openMenu: !open.openMenu });
  };

  // useEffect(() => {
  //   alert("GUIDE :\nPRESS 'ESC' to back to main page");
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsmobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { openMenu, isOpenList, isOpenWatched } = open;

  return (
    <>
      <NavbarContainer>
        <NavbarLogo />
        {isMobile ? (
          <HamburgerMenu onClicked={handleToggleMenu} />
        ) : (
          <>
            <SearchBox query={query} setQuery={setQuery} />
            <Button click={handleOpen}>
              <NavAccount />
            </Button>
          </>
        )}
        {openMenu && isMobile && (
          <>
            <SearchBox query={query} setQuery={setQuery} />
            <Button click={handleOpen}>
              <NavAccount />
            </Button>
          </>
        )}
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
