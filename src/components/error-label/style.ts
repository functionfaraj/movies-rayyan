import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { FONT_FAMILY } from "@/utils/font-family";
import { useMemo } from "react";

const useStyle = () => {
  const { errorColor } = useRayyanTheme()
  const clasess = useMemo(() => {
    return {
      container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        marginBottom: 5
      },
      lbl: {
        ...FONT_FAMILY.Cairo(600, 12),
        color: errorColor(300)
      }
    };
  }, []);
  return {
    clasess,
  };
};
export { useStyle };
