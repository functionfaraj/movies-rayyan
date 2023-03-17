import { IMovie, moviesState } from "@/store/movies";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const useRayyanMovies = () => {
  const movies = useRecoilValue(moviesState);
  const [randomMovie, setRandomMovie] = useState<null | IMovie>(null)
  const getRandomMovie = useCallback(() => {
    if (movies.length === 0) {
      return null;
    }
    if (!randomMovie) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      console.log(movies[randomIndex].id)
      setRandomMovie(movies[randomIndex])
    }
  }, [])

  useEffect(() => {
    if (!randomMovie)
      getRandomMovie()
  }, [movies])
  return { movies, randomMovie };
};

export { useRayyanMovies };
