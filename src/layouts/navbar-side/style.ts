import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { convertHeightToVH, convertWidthToVW } from "@/utils/adapter";
import { FONT_FAMILY } from "@/utils/font-family";
import { useMemo } from "react";

const useStyle = () => {
  const { theme, neutralColor, primaryColor } = useRayyanTheme();
  const clasess = useMemo(() => {
    return {
      container: {
        backgroundColor: primaryColor(200),
        display: "flex",
        flexDirection: "column" as "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: convertWidthToVW(400),
        height: "81vh",
        paddingTop: convertWidthToVW(30),
      },
      searchInputContainer: {
        display: "flex",
        flexDirection: "column" as "column",
        borderBottom: ` 1px solid ${neutralColor(300)}`,
        paddingBottom: convertWidthToVW(30),
        marginBottom: convertWidthToVW(30),
        width: "80%",
      },
      tabsContainer: {
        display: "flex",
        flexDirection: "column" as "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
      },
      unSelectedTab: {
        width: "100%",
        marginBottom: convertWidthToVW(15),
        paddingRight: convertWidthToVW(50),
        paddingTop: convertWidthToVW(14),
        paddingBottom: convertWidthToVW(14),
        cursor: "pointer",
        ...FONT_FAMILY.Almarai(700, 20),
      },
      selectedTab: {
        width: "100%",
        marginBottom: convertWidthToVW(15),
        paddingRight: convertWidthToVW(50),
        paddingTop: convertWidthToVW(14),
        paddingBottom: convertWidthToVW(14),
        backgroundColor: neutralColor("white"),
        cursor: "pointer",
        ...FONT_FAMILY.Almarai(700, 20),
      },
      leftContainer: {
        backgroundColor: "red",
        flex: 1,
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center",
        justifyContent: "space-between" as "space-between",
        width: "40%",
        height: "14vh",
      },
      rightContainer: {
        backgroundColor: neutralColor(900),
        flex: 1,
        display: "flex",
        flexDirection: "row" as "row",
        alignItems: "center",
        width: "60%",
        height: "14vh",
        gap: convertWidthToVW(50),
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
        alignItems: "center",
        justifyContent: "center" as "center",
        gap: 5,
        borderLeft: `3px solid ${primaryColor(200)}`,
        paddingLeft: convertWidthToVW(85),
        height: convertHeightToVH(136),
        width: convertWidthToVW(350),
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
