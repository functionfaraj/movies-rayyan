import { useRayyanMovies } from "@/hooks/use-movies";
import { PlayIcon } from "@/icons";
import i18next from "i18next";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import * as animationData from "./loading.json";

import { useStyle } from "./style";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const HomeHeaderWidget = () => {
  const { randomMovie } = useRayyanMovies()
  const { clasess } = useStyle({ randomMovie });
  const { t } = useTranslation()
  return (
    <>
      {randomMovie &&
        <div style={clasess.container}>
          <div
            // src={randomMovie?.images[0] || ""}
            // alt="cover"
            // width={1440}
            // height={956}
            style={clasess.image}
          />
          <div style={clasess.infoContainer}>
            <div style={clasess.infoTitleContainer}>
              <div style={clasess.movieTitle}>{randomMovie[`title_${i18next.language}`] || randomMovie.title_en}</div>
              <div style={clasess.movieDesc}>{randomMovie[`plot_${i18next.language}`] || randomMovie.plot_en}</div>
            </div>
            <div style={clasess.seeMore}>
              <PlayIcon />
              <div>
                {t("header.seeMore")}
              </div>
            </div>
          </div>
        </div>
      }
    </>

  );
};
export { HomeHeaderWidget };
