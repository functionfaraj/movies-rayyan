import { useRayyanLanguage } from "@/hooks/use-rayyan-language";
import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { IMovie } from "@/store/movies";
import {
  convertHeightToVH,
  convertWidthToVW,
  leftRightAdapter,
} from "@/utils/adapter";
import { FONT_FAMILY, getFontFamily } from "@/utils/font-family";
import i18next from "i18next";
import { useMemo } from "react";

const useStyle = ({ movie }: { movie: IMovie | null }) => {
  const { theme, neutralColor, opacityColor } = useRayyanTheme();
  const { getLanguage } = useRayyanLanguage();
  // linear-gradient(180deg, #0E1012 -50.62%, rgba(14, 16, 18, 0) 100%)
  const clasess = useMemo(() => {
    return {
      container: {
        flex: 1,
        display: "flex",
        flexDirection: "column" as "column",
        position: "relative" as "relative",
        zIndex: 1,
        height: "100%",
      },
      image: {
        width: convertWidthToVW(1440),
        height: "60vh",
        backgroundSize: "cover",
        backgroundImage: `${opacityColor(102)},
        url('${movie?.images[1]}')`,
      },
      movieTitle: {
        alignItems: "center",
        width: "100%",
        color: neutralColor("white"),
        gap: convertWidthToVW(20),
        ...getFontFamily(getLanguage(), 700, 40),
        textTransform: "capitalize" as "capitalize",
      },
      movieDesc: {
        alignItems: "center",
        width: "100%",
        color: neutralColor(100),
        gap: convertWidthToVW(20),
        ...getFontFamily(getLanguage(), 400, 20),
        textTransform: "capitalize" as "capitalize",
      },
      infoContainer: {
        position: "absolute" as "absolute",
        top: convertHeightToVH(500),
        ...leftRightAdapter(i18next.language, 80),
        maxWidth: "50%",
      },
      infoTitleContainer: {
        borderRadius: 20,
        background: opacityColor(103),
        padding: convertWidthToVW(20),
      },
      seeMore: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: convertWidthToVW(20),
        width: convertWidthToVW(195),
        height: 48,
        background: neutralColor("white"),
        borderRadius: 4,
        ...getFontFamily(getLanguage(), 700, 16),
        color: neutralColor(600),
        cursor: "pointer",
        marginTop: convertHeightToVH(45),
      },
      labelContainer: {
        display: "flex",
        gap: convertWidthToVW(10),
        marginBottom: convertHeightToVH(20),
      },
      label: {
        borderRadius: 12,
        background: opacityColor(103),
        padding: convertWidthToVW(5),
        width: "fit-content",
        color: neutralColor("white"),
        ...getFontFamily(getLanguage(), 500, 14),
      },
      linkAR: {
        cursor: "pointer",
        ...FONT_FAMILY.Cairo(400, 12),
      },
      linkEN: {
        cursor: "pointer",
        ...FONT_FAMILY.Inter(400, 12),
      },
    };
  }, [theme, i18next.language, movie]);
  return {
    clasess,
  };
};
export { useStyle };
