import { IMovie, moviesState } from "@/store/movies";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const useRayyanMovies = () => {
  const movies = useRecoilValue(moviesState);
  const [randomMovie, setRandomMovie] = useState<any | null | IMovie>(null)
  const getRandomMovie = useCallback(() => {
    if (movies.length === 0) {
      return null;
    }
    if (!randomMovie) {
      let run = true
      do {
        const randomIndex = Math.floor(Math.random() * movies.length);
        if (movies[randomIndex]) {
          setRandomMovie(movies[randomIndex])
          run = false
        }
      } while (run)
    }
  }, [])

  useEffect(() => {
    if (!randomMovie)
      getRandomMovie()
  }, [movies])
  return { movies, randomMovie };
};

export { useRayyanMovies };
