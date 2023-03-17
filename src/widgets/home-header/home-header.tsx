import { useRayyanMovies } from "@/hooks/use-movies";
import Image from "next/image";
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
  const { clasess } = useStyle();
  const { randomMovie } = useRayyanMovies()

  return (
    <>
      {randomMovie &&
        <div style={clasess.container}>
          <Image
            src={randomMovie?.posterUrl || ""}
            alt="cover"
            width={1440}
            height={956}
            style={clasess.image}
          />
          <div style={clasess.infoContainer}>
            <div style={clasess.movieTitle}>{randomMovie.title}</div>
            <div style={clasess.movieDesc}>{randomMovie.plot}</div>
            <div style={clasess.seeMore}>مشاهدة الفلم</div>
          </div>
        </div>
      }
    </>

  );
};
export { HomeHeaderWidget };
