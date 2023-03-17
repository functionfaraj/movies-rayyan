import { useRayyanTheme } from "@/hooks";
import { useMemo } from "react";

const useStyle = () => {
  const { theme, neutralColor } = useRayyanTheme();
  const clasess = useMemo(() => {
    return {
      container: {
        backgroundColor: neutralColor(800),
      },
      bodyContainer: {
        minHeight: "87vh",
        height: "87vh"
      }
    };
  }, [theme]);
  return {
    clasess,
  };
};
export { useStyle };
