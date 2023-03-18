import { useRayyanMovies } from "@/hooks/use-movies";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import * as animationData from "./loading.json";
import Image from "next/image";

import { useStyle } from "./style";
import { IMovie } from "@/store/movies";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const LeatestGenreMoviesWidget = ({ genre }: { genre: string }) => {
  const { randomMovie } = useRayyanMovies()
  const { clasess } = useStyle({ randomMovie });
  const { t } = useTranslation()
  const { getMoviesByGenre } = useRayyanMovies()
  return (
    <>
      {
        getMoviesByGenre(genre).length > 0 &&
        <div style={clasess.container}>
          <div style={clasess.genreTitle}>{genre}</div>
          <div style={clasess.moviesContainer}>
            {
              getMoviesByGenre(genre).map((movie: IMovie | any) => {
                return (<div key={movie[`title_${i18next.language}`]} style={clasess.movie}>
                  <img src={movie.poster} alt={`${movie[`title_${i18next.language}`]}`} width={240} height={361} style={clasess.image} />
                </div>)
              })
            }
          </div>
        </div>
      }
    </>
  );
};
export { LeatestGenreMoviesWidget };
