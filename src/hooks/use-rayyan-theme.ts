import { setItem } from "@/services/storage-data";
import { ITheme, themeState } from "@/store";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

const useRayyanTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const changedTheme = (theme: ITheme) => {
    setTheme(theme);
  };
  const changeThemeMode = useCallback(() => {
    const selectedTheme: any = theme.themeMode;
    setItem("themeMode", selectedTheme === "dark" ? "light" : "dark");
  }, []);
  const getColor = useCallback(
    (pattern: string, degree: number) => {
      // @ts-ignore
      return theme[pattern][degree];
    },
    [theme]
  );
  const primaryColor = useCallback(
    (degree: number) => {
      return getColor("primary", degree);
    },
    [theme]
  );
  const secondColor = useCallback(
    (degree: number) => {
      return getColor("second", degree);
    },
    [theme]
  );
  const successColor = useCallback(
    (degree: number) => {
      return getColor("green", degree);
    },
    [theme]
  );
  const warningColor = useCallback(
    (degree: number) => {
      return getColor("warning", degree);
    },
    [theme]
  );
  const errorColor = useCallback(
    (degree: number) => {
      return getColor("red", degree);
    },
    [theme]
  );
  const neutralColor = useCallback(
    (degree: any) => {
      return getColor("neutral", degree);
    },
    [theme]
  );
  return {
    theme,
    changedTheme,
    changeThemeMode,
    successColor,
    secondColor,
    primaryColor,
    neutralColor,
    errorColor,
    warningColor,
  };
};

export { useRayyanTheme };
