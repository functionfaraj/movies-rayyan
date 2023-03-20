import { useRayyanTheme } from "@/hooks";
import { useRayyanLanguage } from "@/hooks/use-rayyan-language";
import { convertHeightToVH, convertWidthToVW } from "@/utils/adapter";
import { getFontFamily } from "@/utils/font-family";
import i18next from "i18next";
import { useMemo } from "react";

const useStyle = () => {
  const { theme, neutralColor } = useRayyanTheme();
  const { getLanguage } = useRayyanLanguage();
  const clasess = useMemo(() => {
    return {
      genreContainer: {
        marginTop: convertHeightToVH(-150),
        paddingLeft: convertWidthToVW(60),
        paddingRight: convertWidthToVW(60),
        display: "flex",
        flexDirection: "column" as "column",
        gap: convertHeightToVH(65),
      },
      container: {
        flex: 1,
        display: "flex",
        flexDirection: "column" as "column",
        position: "relative" as "relative",
        zIndex: 1,
        height: "100%",
        marginTop: 30,
        paddingLeft: convertWidthToVW(60),
        paddingRight: convertWidthToVW(60),
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
        flexWrap: "wrap" as "wrap",
      },
      movie: {
        cursor: "pointer",
      },
    };
  }, [theme, i18next.language]);
  return {
    clasess,
  };
};
export { useStyle };
