import { useCallback } from "react";
import i18next from "i18next";
import { ELanguage } from "@/enums";

const useRayyanLanguage = () => {
  const changeLanguage = useCallback(
    (lan: ELanguage) => {
      i18next.changeLanguage(lan)
    },
    []
  );
  const getLanguage = useCallback(
    () => {
      return i18next.language
    },
    []
  );

  return { changeLanguage, getLanguage };
};

export { useRayyanLanguage };
