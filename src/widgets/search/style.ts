import { useRayyanLanguage } from "@/hooks/use-rayyan-language";
import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { IMovie } from "@/store/movies";
import {
  convertHeightToVH,
  convertWidthToVW,
  directionAdapter,
  leftRightAdapter,
} from "@/utils/adapter";
import { FONT_FAMILY, getFontFamily } from "@/utils/font-family";
import i18next from "i18next";
import { useMemo } from "react";

const useStyle = () => {
  const { theme, neutralColor, opacityColor, primaryColor } = useRayyanTheme();
  const { getLanguage } = useRayyanLanguage();
  // linear-gradient(180deg, #0E1012 -50.62%, rgba(14, 16, 18, 0) 100%)
  const clasess = useMemo(() => {
    return {
      container: {
        flex: 1,
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center" as "center",
        justifyContent: "flex-start" as "flex-start",
        height: "80vh",
        paddingTop: convertHeightToVH(200),
        gap: convertHeightToVH(50),
      },
      title: {
        textAlign: "center" as "center",
        width: "100%",
        color: neutralColor("white"),
        gap: convertWidthToVW(20),
        ...getFontFamily(getLanguage(), 700, 20),
      },
      score: {
        textAlign: "center" as "center",
        width: "100%",
        color: neutralColor("white"),
        gap: convertWidthToVW(20),
        ...getFontFamily(getLanguage(), 500, 14),
      },
      noResult: {
        textAlign: "center" as "center",
        width: "100%",
        color: neutralColor(400),
        gap: convertWidthToVW(20),
        ...getFontFamily(getLanguage(), 700, 20),
        marginTop: convertHeightToVH(100),
      },
      searchTerm: {
        textAlign: "center" as "center",
        width: "100%",
        color: neutralColor("white"),
        gap: convertWidthToVW(20),
        ...getFontFamily(getLanguage(), 700, 20),
        marginTop: convertHeightToVH(100),
        ...directionAdapter(i18next.language),
      },
      searchContainer: {
        width: convertWidthToVW(300),
      },
      image: {
        borderRadius: 8,
      },
      moviesContainer: {
        display: "flex",
        justifyContent: "flex-start",
        gap: convertWidthToVW(10),
        maxWidth: "100vw",
        overflowX: "auto" as "auto",
        flexWrap: "wrap" as "wrap",
        paddingLeft: convertWidthToVW(80),
        paddingRight: convertWidthToVW(80),
      },
      movie: {
        cursor: "pointer",
        position: "relative" as "relative",
      },
      searchScore: {
        position: "absolute" as "absolute",
        bottom: 160,
        color: neutralColor(700),
        ...leftRightAdapter(i18next.language, 60),
        ...getFontFamily(getLanguage(), 700, 14),
        background: neutralColor("white"),
        padding: convertWidthToVW(5),
        borderRadius: convertWidthToVW(5),
      },
    };
  }, [theme, i18next.language]);
  return {
    clasess,
  };
};
export { useStyle };
