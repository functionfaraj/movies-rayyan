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

const useStyle = () => {
  const { theme, neutralColor, opacityColor } = useRayyanTheme();
  const { getLanguage } = useRayyanLanguage();
  // linear-gradient(180deg, #0E1012 -50.62%, rgba(14, 16, 18, 0) 100%)
  const clasess = useMemo(() => {
    return {
      container: {
        flex: 1,
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center" as "center",
        height: "80vh",
      },
      title: {
        textAlign: "center" as "center",
        width: "100%",
        color: neutralColor("white"),
        gap: convertWidthToVW(20),
        ...getFontFamily(getLanguage(), 700, 20),
      },
    };
  }, [theme, i18next.language]);
  return {
    clasess,
  };
};
export { useStyle };
