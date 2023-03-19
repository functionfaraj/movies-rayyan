import { useRayyanLanguage } from "@/hooks/use-rayyan-language";
import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import {
  convertHeightToVH,
  convertWidthToVW,
  leftRightAdapter,
} from "@/utils/adapter";
import { FONT_FAMILY, getFontFamily } from "@/utils/font-family";
import i18next from "i18next";
import { useMemo } from "react";

const useStyle = () => {
  const { theme, neutralColor, opacityColor } = useRayyanTheme();
  const { getLanguage } = useRayyanLanguage();
  // linear-gradient(180deg, #0E1012 -50.62%, rgba(14, 16, 18, 0) 100%)
  const clasess = useMemo(() => {
    return {
      container: {
        position: "fixed" as "fixed",
        backgroundColor: "#FFFFFF",
        bottom: 20,
        ...leftRightAdapter(i18next.language, 20),
        padding: 20,
        zIndex: 100,
        borderRadius: 8,
        color: neutralColor(500),
      },
      genreTitle: {
        alignItems: "center",
        width: "100%",
        color: neutralColor("white"),
        gap: convertWidthToVW(20),
        ...getFontFamily(getLanguage(), 700, 20),
        textTransform: "capitalize" as "capitalize",
        marginBottom: convertHeightToVH(16),
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
      },
      movie: {
        cursor: "pointer",
      },
      linkAR: {
        color: neutralColor(500),
        cursor: "pointer",
        ...FONT_FAMILY.Cairo(400, 12),
      },
      linkEN: {
        color: neutralColor(500),
        cursor: "pointer",
        ...FONT_FAMILY.Inter(400, 12),
      },
      link: {
        color: neutralColor(500),
        ...getFontFamily(getLanguage(), 400, 12),
      },
    };
  }, [theme, i18next.language]);
  return {
    clasess,
  };
};
export { useStyle };
