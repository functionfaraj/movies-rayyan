import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { convertHeightToVH, convertWidthToVW } from "@/utils/adapter";
import { FONT_FAMILY } from "@/utils/font-family";
import { useMemo } from "react";

const useStyle = () => {
  const { theme, opacityColor, neutralColor, primaryColor } = useRayyanTheme();
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
        height: 80
      },

    };
  }, [theme]);
  return {
    clasess,
  };
};
export { useStyle };
