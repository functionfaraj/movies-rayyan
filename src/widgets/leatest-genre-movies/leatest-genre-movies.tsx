import { useRayyanMovies } from "@/hooks/use-movies";
import i18next from "i18next";
import * as animationData from "./loading.json";

import { useStyle } from "./style";
import { IMovie } from "@/store/movies";

const LeatestGenreMoviesWidget = ({ genre }: { genre: string }) => {
  const { randomMovie } = useRayyanMovies();
  const { clasess } = useStyle({ randomMovie });
  const { getMoviesByGenre, goToMovie } = useRayyanMovies();
  return (
    <>
      {getMoviesByGenre(genre).length > 0 && (
        <div style={clasess.container}>
          <div style={clasess.genreTitle}>{genre}</div>
          <div style={clasess.moviesContainer}>
            {getMoviesByGenre(genre).map((movie: IMovie) => {
              return (
                <div
                  key={movie[`title_${i18next.language}`]}
                  style={clasess.movie}
                  onClick={() => goToMovie(movie.id)}
                >
                  <img
                    src={movie.poster}
                    alt={`${movie[`title_${i18next.language}`]}`}
                    width={240}
                    height={361}
                    style={clasess.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export { LeatestGenreMoviesWidget };
