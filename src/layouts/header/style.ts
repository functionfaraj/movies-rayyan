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
        flex: 1,
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center",
        justifyContent: "space-between" as "space-between",
        minWidth: "100%",
        height: "14vh",
      },
      leftContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center",
        justifyContent: "flex-end" as "flex-end",
        minWidth: "40%",
        height: "14vh",
        paddingLeft: convertWidthToVW(50),
        gap: convertWidthToVW(35),
      },
      iconsContainer: {
        cursor: "pointer",
      },
      profileIconsContainer: {
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center",
        justifyContent: "flex-end" as "flex-end",
        gap: 8,
        cursor: "pointer",
      },
      profileNameText: {
        color: neutralColor("white"),
        ...FONT_FAMILY.Almarai(700, 20),
      },
      rightContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center",
        minWidth: "60%",
        height: "14vh",
        gap: convertWidthToVW(50),
        // backgroundColor: "red",
      },
      rayyanApp: {
        ...FONT_FAMILY.Almarai(700, 27),
        color: primaryColor(500),
      },
      rayyanAppDesc: {
        ...FONT_FAMILY.Almarai(400, 17),
        color: neutralColor(200),
      },
      rayyanContainer: {
        color: neutralColor(200),
        cursor: "pointer",
        direction: "ltr" as "ltr",
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "flex-end",
        justifyContent: "center" as "center",
        gap: 5,
        borderLeft: `3px solid ${primaryColor(200)}`,
        paddingRight: convertWidthToVW(50),
        height: convertHeightToVH(136),
        width: convertWidthToVW(400),
      },
      welcomeContainer: {
        color: neutralColor("white"),
      },
      welcomeLbl: {
        ...FONT_FAMILY.Almarai(700, 35),
        color: neutralColor("white"),
      },
      welcomeDescLbl: {
        ...FONT_FAMILY.Almarai(700, 20),
        color: primaryColor(200),
      },
      basicInformationContainer: {
        width: "84.4%",
        display: "flex",
        flexDirection: "row" as "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: convertWidthToVW(20),
      },

      ///Header
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
      },
      devDoneBy: {
        ...FONT_FAMILY.Almarai(600, 12),
        color: neutralColor("white"),
        cursor: "pointer",
        borderLeft: `3px solid ${primaryColor(200)}`,
        paddingLeft: 20,
      },
    };
  }, [theme]);
  return {
    clasess,
  };
};
export { useStyle };
