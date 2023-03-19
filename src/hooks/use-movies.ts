import { IMovie, moviesState } from "@/store/movies";
import i18next from "i18next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useRayyanRouter } from "./use-rayyan-router";

const useRayyanMovies = () => {
  const movies = useRecoilValue(moviesState);
  const { navigate } = useRayyanRouter();
  const [randomMovie, setRandomMovie] = useState<any | null | IMovie>(null);
  const getRandomMovie = useCallback(() => {
    if (movies.length === 0) {
      return null;
    }
    if (!randomMovie) {
      let run = true;
      do {
        const randomIndex = Math.floor(Math.random() * movies.length);
        if (movies[randomIndex]) {
          setRandomMovie(movies[randomIndex]);
          run = false;
        }
      } while (run);
    }
  }, []);

  const getMoviesByGenre = useCallback(
    (genre: string) => {
      return movies.filter((movie: IMovie) =>
        movie[`genre_${i18next.language}`]
          .toLowerCase()
          .includes(genre.toLowerCase())
      );
    },
    [movies, i18next.language]
  );

  const getMovieById = useCallback(
    (id: number) => {
      return movies.find((movie: IMovie) => movie.id === id);
    },
    [movies, i18next.language]
  );

  const goToMovie = useCallback(
    (id: number) => {
      console.log(id);
      navigate(`/movie/${id}`);
    },
    [movies, i18next.language]
  );

  const getMoviesByGenres = useCallback(
    (movie: IMovie) => {
      const matchingMovies: IMovie[] = [];
      movies.forEach((m: IMovie) => {
        if (m.id !== movie.id) {
          const commonGenres = m.genre_en
            .split(",")
            .filter((genre: string) => movie.genre_en.includes(genre));
          if (commonGenres.length > 0) {
            matchingMovies.push(m);
          }
        }
      });
      return matchingMovies;
    },
    [movies, i18next.language]
  );

  useEffect(() => {
    if (!randomMovie) getRandomMovie();
  }, [movies]);
  return {
    movies,
    randomMovie,
    getMoviesByGenres,
    getMoviesByGenre,
    getMovieById,
    goToMovie,
  };
};

export { useRayyanMovies };
