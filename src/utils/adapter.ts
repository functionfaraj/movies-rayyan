import { ELanguage } from "@/enums";

export const convertWidthToVW = (width: number) => {
  return `${(width / 1440) * 100}vw`;
};
export const convertHeightToVH = (width: number) => {
  return `${(width / 2816) * 100}vh`;
};

export const leftRightAdapter = (lan: string, size: number) => {
  return lan === ELanguage.AR ? { right: size } : { left: size };
};
export const directionAdapter = (lan: string) => {
  return lan === ELanguage.AR
    ? { direction: "rtl" as "rtl" }
    : { direction: "ltr" as "ltr" };
};
