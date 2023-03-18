import { IMovie, moviesState } from "@/store/movies";
import i18next from "i18next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const useRayyanMovies = () => {
  const movies = useRecoilValue(moviesState);
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
  useEffect(() => {
    if (!randomMovie) getRandomMovie();
  }, [movies]);
  return { movies, randomMovie, getMoviesByGenre };
};

export { useRayyanMovies };
