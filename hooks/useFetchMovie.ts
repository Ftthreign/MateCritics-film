import { useState, useEffect } from "react";
import { API_KEY } from "@/common/refs/data";

export function useFetchMovie(query: string, callback: () => void) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [totalRes, setTotalRes] = useState<number>(0);
  const [curPages, setCurPages] = useState<number>(1);

  const handleChangePage = (_: number, value: number) => {
    setCurPages(value);
  };

  useEffect(() => {
    const fetchMovies = async function (): Promise<void> {
      try {
        callback?.();
        setIsloading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&page=${curPages}&s=${query}`
        );

        if (!res.ok) throw new Error("Error Fetching data");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not Found");

        setMovies(data.Search);
        setTotalRes(data.totalResults);
        setError("");
      } catch (err) {
        if (err instanceof Error) {
          // console.log(err.message);
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
  }, [query, callback, curPages]);

  return {
    movies,
    isLoading,
    error,
    curPages,
    totalRes,
    handleChangePage,
  };
}
