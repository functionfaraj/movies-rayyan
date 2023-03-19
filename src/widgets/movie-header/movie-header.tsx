import { useRayyanMovies } from "@/hooks/use-movies";
import { PlayIcon } from "@/icons";
import { IMovie } from "@/store/movies";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useStyle } from "./style";
const MovieHeaderWidget = ({ movie }: { movie: IMovie }) => {
  const { clasess } = useStyle({ movie });
  const { t } = useTranslation();
  return (
    <>
      {movie && (
        <div style={clasess.container}>
          <div style={clasess.image} />
          <div style={clasess.infoContainer}>
            <div style={clasess.labelContainer}>
              <div style={clasess.label}>{movie.year}</div>
              <div style={clasess.label}>{movie.language}</div>
              <div style={clasess.label}>{movie.awards}</div>
            </div>
            <div style={clasess.labelContainer}>
              <div style={clasess.label}>
                {movie.released} {t("movie.released")}
              </div>
              <div style={clasess.label}>{movie.imdbRating}/10 IMBD</div>
              <div style={clasess.label}>
                {movie.imdbVotes} {t("movie.votes")}
              </div>
            </div>
            <div style={clasess.infoTitleContainer}>
              <div style={clasess.movieTitle}>
                {movie[`title_${i18next.language}`] || movie.title_en}
              </div>
              <div style={clasess.movieDesc}>
                {movie[`plot_${i18next.language}`] || movie.plot_en}
              </div>
            </div>
            <div style={clasess.seeMore}>
              <PlayIcon />
              <div>{t("movie.play")}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export { MovieHeaderWidget };
