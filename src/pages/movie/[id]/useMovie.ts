import { useRayyanRouter } from "@/hooks";
import { useRayyanMovies } from "@/hooks/use-movies";
import { IMovie, moviesState } from "@/store/movies";
import i18next from "i18next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const useRayyanMovie = () => {
  const { getMovieById } = useRayyanMovies();
  const [movie, setMovie] = useState<IMovie | null>();
  const route = useRouter();
  const { navigate } = useRayyanRouter();
  useEffect(() => {
    const id = parseInt(`${route?.query?.id}`);
    if (id) {
      const movie = getMovieById(id);
      if (movie) {
        setMovie(movie);
      } else {
        navigate("/movie/not-found");
      }
    }
  }, [route]);

  return { movie };
};

export { useRayyanMovie };
