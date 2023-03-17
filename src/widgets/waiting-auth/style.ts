import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { FONT_FAMILY } from "@/utils/font-family";
import { useMemo } from "react";

const useStyle = () => {
  const { theme, primaryColor } = useRayyanTheme();
  const clasess = useMemo(() => {
    return {
      container: {
        backgroundColor: primaryColor(100),
        flex: 1,
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      },
    };
  }, [theme]);
  return {
    clasess,
  };
};
export { useStyle };
