import { useState, useEffect } from "react";
import { API_KEY } from "../common/refs/data";

export function useFetchMovie(query: string, callback: () => void) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchMovies = async function (): Promise<void> {
      try {
        callback?.();
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
  }, [query, callback]);

  return { movies, isLoading, error };
}