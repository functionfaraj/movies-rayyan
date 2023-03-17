import { ELanguage } from "@/enums";
import { useRayyanLanguage } from "@/hooks/use-rayyan-language";
import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { convertHeightToVH, convertWidthToVW } from "@/utils/adapter";
import { FONT_FAMILY, getFontFamily } from "@/utils/font-family";
import i18next from "i18next";
import { useMemo } from "react";

const useStyle = () => {
  const { theme, neutralColor } = useRayyanTheme();
  const { getLanguage } = useRayyanLanguage()
  const clasess = useMemo(() => {
    return {
      container: {
        backgroundColor: neutralColor(900),
        display: "flex",
        flexDirection: "column" as "column",
        justifyContent: "center" as "center",
        alignItems: "center",
        width: "100%",
        paddingTop: convertHeightToVH(50),
        paddingBottom: convertHeightToVH(50),
        height: "13vh"
      },
      linksContainer: {
        paddingTop: convertHeightToVH(50),
        display: "flex",
        flexDirection: "row" as "row",
        justifyContent: "center" as "center",
        alignItems: "center",
        width: "100%",
        color: neutralColor("white"),
        gap: convertWidthToVW(20),
        ...getFontFamily(getLanguage(), 400, 12),
      },
      link: {
        cursor: 'pointer'
      },
      linkAR: {
        cursor: 'pointer',
        ...FONT_FAMILY.Cairo(400, 12)
      },
      linkEN: {
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
