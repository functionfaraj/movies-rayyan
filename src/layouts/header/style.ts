import { useRayyanLanguage } from "@/hooks/use-rayyan-language";
import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { convertHeightToVH, convertWidthToVW } from "@/utils/adapter";
import { FONT_FAMILY, getFontFamily } from "@/utils/font-family";
import i18next from "i18next";
import { useMemo } from "react";

const useStyle = () => {
  const { theme, opacityColor, neutralColor, primaryColor } = useRayyanTheme();
  const { getLanguage } = useRayyanLanguage()
  const clasess = useMemo(() => {
    return {
      container: {
        flex: 1,
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center",
        justifyContent: "space-between" as "space-between",
        position: "absolute" as "absolute",
        background: opacityColor(102),
        width: "100vw",
        height: 80,
        paddingLeft: convertWidthToVW(80),
        paddingRight: convertWidthToVW(80),
        zIndex: 3
      },
      linksContainer: {
        display: "flex",
        flexDirection: "row" as "row",
        gap: convertWidthToVW(20),
        width: "80%"
      },
      linkContainer: {
        display: "flex",
        flexDirection: "row" as "row",
        gap: convertWidthToVW(10),
        justifyContent: "center" as "center",
        alignItems: "center" as "center",
        cursor: "pointer"
      },
      linkLbl: {
        alignItems: "center",
        width: "100%",
        color: neutralColor("white"),
        gap: convertWidthToVW(20),
        ...getFontFamily(getLanguage(), 500, 16)
      },
      linkAR: {
        color: neutralColor("white"),
        cursor: 'pointer',
        ...FONT_FAMILY.Cairo(400, 12)
      },
      linkEN: {
        color: neutralColor("white"),
        cursor: 'pointer',
        ...FONT_FAMILY.Inter(400, 12)
      }
    };
  }, [theme, i18next.language]);
  return {
    clasess,
  };
};
export { useStyle };