import { useRayyanLanguage } from "@/hooks/use-rayyan-language";
import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { IMovie } from "@/store/movies";
import { convertHeightToVH, convertWidthToVW, leftRightAdapter } from "@/utils/adapter";
import { FONT_FAMILY, getFontFamily } from "@/utils/font-family";
import i18next from "i18next";
import { useMemo } from "react";

const useStyle = ({ randomMovie }: { randomMovie: IMovie | null }) => {
  const { theme, neutralColor, opacityColor } = useRayyanTheme();
  const { getLanguage } = useRayyanLanguage()
  // linear-gradient(180deg, #0E1012 -50.62%, rgba(14, 16, 18, 0) 100%)
  const clasess = useMemo(() => {
    return {
      container: {
        flex: 1,
        display: "flex",
        flexDirection: "column" as "column",
        position: "relative" as "relative",
        zIndex: 1,
        height: "100%"
      },
      genreTitle: {
        alignItems: "center",
        width: "100%",
        color: neutralColor("white"),
        gap: convertWidthToVW(20),
        ...getFontFamily(getLanguage(), 700, 20),
        textTransform: "capitalize" as "capitalize",
        marginBottom: convertHeightToVH(16)
      },
      image: {
        borderRadius: 8
      },
      moviesContainer: {
        display: "flex",
        justifyContent: "flex-start",
        gap: convertWidthToVW(10),
        maxWidth: "100vw",
        overflowX: "auto" as "auto",
      },
      movie: {
        cursor: "pointer",
      }
    };
  }, [theme, i18next.language, randomMovie]);
  return {
    clasess,
  };
};
export { useStyle };
