import { ELanguage } from "@/enums";

const convertFontSizeToVW = (fontSize: number) => {
  return fontSize > 14 ? `${(fontSize / 1440) * 100}vw` : fontSize
  // return `${(fontSize / 1920) * 100}vw`
}
const FONT_FAMILY = {
  Cairo: (fontWeight: number, fontSize: number) => {
    const _fontSize = convertFontSizeToVW(fontSize)
    return {
      fontFamily: "Cairo",
      fontWeight,
      fontSize: _fontSize,
    };
  },
  Inter: (fontWeight: number, fontSize: number) => {
    const _fontSize = convertFontSizeToVW(fontSize)
    return {
      fontFamily: "Inter",
      fontWeight,
      fontSize: _fontSize,
    };
  },
};

const getFontFamily = (lan: string, fontWeight: number, fontSize: number) => {
  return lan === ELanguage.AR ? FONT_FAMILY.Cairo(fontWeight, fontSize) : FONT_FAMILY.Inter(fontWeight, fontSize)
}

export { FONT_FAMILY, getFontFamily };
