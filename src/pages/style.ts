import { useRayyanLanguage } from "@/hooks/use-rayyan-language";
import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { convertHeightToVH, convertWidthToVW } from "@/utils/adapter";
import { useMemo } from "react";

const useStyle = () => {
  const { theme, neutralColor, opacityColor } = useRayyanTheme();
  const { getLanguage } = useRayyanLanguage()
  // linear-gradient(180deg, #0E1012 -50.62%, rgba(14, 16, 18, 0) 100%)
  const clasess = useMemo(() => {
    return {
      genreContainer: {
        marginTop: convertHeightToVH(-150),
        paddingLeft: convertWidthToVW(60),
        paddingRight: convertWidthToVW(60),
        display: "flex",
        flexDirection: "column" as "column",
        gap: convertHeightToVH(65)
      }
    };
  }, [theme]);
  return {
    clasess,
  };
};
export { useStyle };
