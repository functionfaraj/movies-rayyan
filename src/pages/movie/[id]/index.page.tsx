import { useTranslation } from "react-i18next";
import Head from "next/head";
import { useRayyanMovie } from "./useMovie";
import i18next from "i18next";
import { NonAuthLayout } from "@/layouts";
import { MovieHeaderWidget } from "@/widgets";
import { useStyle } from "./style";
import { useRayyanMovies } from "@/hooks/use-movies";
import { useEffect } from "react";
import { LeatestGenreMoviesWidget } from "@/widgets/leatest-genre-movies";
import { IMovie } from "@/store/movies";

export default function Movie() {
  const { movie } = useRayyanMovie();
  const { getMoviesByGenres, goToMovie } = useRayyanMovies();
  const { t } = useTranslation();
  const { clasess } = useStyle();
  useEffect(() => {
    if (movie) {
      getMoviesByGenres(movie);
    }
  }, [movie]);
  return (
    <>
      {movie && (
        <>
          <Head>
            <title>{`${t("movie.title")} - ${
              movie[`title_${i18next.language}`]
            }`}</title>
          </Head>
          <NonAuthLayout>
            <MovieHeaderWidget movie={movie} />
            <div style={clasess.container}>
              <div style={clasess.genreTitle}>{t("movie.similler")}</div>
              <div style={clasess.moviesContainer}>
                {getMoviesByGenres(movie).map((movie: IMovie) => {
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
          </NonAuthLayout>
        </>
      )}
    </>
  );
}
