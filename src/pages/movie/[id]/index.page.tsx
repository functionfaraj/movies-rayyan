import { useTranslation } from "react-i18next";
import Head from "next/head";
import { useRayyanMovie } from "./useMovie";
import i18next from "i18next";
import { NonAuthLayout } from "@/layouts";
import { MovieHeaderWidget } from "@/widgets";

export default function Movie() {
  const { movie } = useRayyanMovie();
  const { t } = useTranslation();
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
            {/* <div style={clasess.genreContainer}>
              {genres[i18next.language].map((genre: string) => (
                <LeatestGenreMoviesWidget key={genre} genre={genre} />
              ))}
            </div> */}
          </NonAuthLayout>
        </>
      )}
    </>
  );
}
