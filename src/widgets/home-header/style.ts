import { useRayyanLanguage } from "@/hooks/use-rayyan-language";
import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { convertHeightToVH, convertWidthToVW, leftRightAdapter } from "@/utils/adapter";
import { FONT_FAMILY, getFontFamily } from "@/utils/font-family";
import i18next from "i18next";
import { useMemo } from "react";

const useStyle = () => {
  const { theme, neutralColor, opacityColor } = useRayyanTheme();
  const { getLanguage } = useRayyanLanguage()
  const clasess = useMemo(() => {
    return {
      container: {
        flex: 1,
        display: "flex",
        flexDirection: "column" as "column",
        position: "relative" as "relative",
        zIndex: 1
      },
      image: {
        width: convertWidthToVW(1440),
        height: 500,
      },
      movieTitle: {
        alignItems: "center",
        width: "100%",
        color: neutralColor("white"),
        gap: convertWidthToVW(20),
        ...getFontFamily(getLanguage(), 700, 40),
      },
      movieDesc: {
        alignItems: "center",
        width: "100%",
        color: neutralColor(100),
        gap: convertWidthToVW(20),
        ...getFontFamily(getLanguage(), 400, 20),
      },
      infoContainer: {
        position: "absolute" as "absolute",
        top: convertHeightToVH(500),
        ...leftRightAdapter(i18next.language, 80),
        maxWidth: "50%",
        background: opacityColor(103),
        borderRadius: 20,
        padding: convertWidthToVW(20),
      },
      seeMore: {

      }
    };
  }, [theme, i18next.language]);
  return {
    clasess,
  };
};
export { useStyle };
