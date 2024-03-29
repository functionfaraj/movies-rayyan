import { ELanguage } from "@/enums";
import { useRayyanLanguage } from "@/hooks/use-rayyan-language";
import { NonAuthLayout } from "@/layouts";
import { genreState } from "@/store/genre";
import { HomeHeaderWidget } from "@/widgets";
import { LeatestGenreMoviesWidget } from "@/widgets/leatest-genre-movies";
import i18next from "i18next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { useStyle } from "./style";

export default function Home() {
  const { t } = useTranslation();
  const genres = useRecoilValue<any>(genreState);
  const { clasess } = useStyle();
  return (
    <>
      <Head>
        <title>{t("pageTitle.home")}</title>
      </Head>
      <NonAuthLayout>
        <HomeHeaderWidget />
        <div style={clasess.genreContainer}>
          {genres[i18next.language].map((genre: string) => (
            <LeatestGenreMoviesWidget key={genre} genre={genre} />
          ))}
        </div>
      </NonAuthLayout>
    </>
  );
}
