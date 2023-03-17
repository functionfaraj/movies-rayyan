import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { convertHeightToVH, convertWidthToVW } from "@/utils/adapter";
import { FONT_FAMILY } from "@/utils/font-family";
import { useMemo } from "react";

const useStyle = () => {
  const { theme, neutralColor, primaryColor } = useRayyanTheme();
  const clasess = useMemo(() => {
    return {
      container: {
        backgroundColor: neutralColor(900),
        display: "flex",
        flexDirection: "row" as "row",
        justifyContent: "flex-start" as "flex-start",
        alignItems: "center",
        width: "100%",
        gap: convertWidthToVW(100),
        height: 50,
      },
      containerBody: {
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center",
        justifyContent: "center" as "center",
        width: "98.7%",
        gap: convertWidthToVW(100),
      },
      devDoneBy: {
        ...FONT_FAMILY.Almarai(400, 10),
        color: neutralColor("white"),
        cursor: "pointer",
        borderLeft: `3px solid ${primaryColor(200)}`,
        width: convertWidthToVW(400),
        display: "flex",
        alignItems: "center",
        padding: 10,
        paddingRight: convertWidthToVW(30),
        paddingLeft: convertWidthToVW(30),
      },
      joinApp: {
        ...FONT_FAMILY.Almarai(400, 12),
        color: neutralColor(200),
        cursor: "pointer",
      },
      phone: {
        ...FONT_FAMILY.Inter(600, 12),
        color: neutralColor(200),
        cursor: "pointer",
        direction: "ltr" as "ltr",
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center",
        justifyContent: "center" as "center",
        gap: 5,
      },
      serviceContainer: {
        ...FONT_FAMILY.Inter(600, 12),
        color: neutralColor(200),
        cursor: "pointer",
        direction: "ltr" as "ltr",
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center",
        justifyContent: "center" as "center",
        gap: 5,
      },
      service: {
        ...FONT_FAMILY.Almarai(400, 12),
        color: neutralColor(300),
        cursor: "pointer",
      },
      ouchbox: {
        ...FONT_FAMILY.Inter(600, 12),
        color: "#FECC00",
        cursor: "pointer",
      },
      io: {
        ...FONT_FAMILY.Inter(600, 12),
        color: neutralColor("white"),
        cursor: "pointer",
        marginRight: 5,
      },
    };
  }, [theme]);
  return {
    clasess,
  };
};
export { useStyle };
