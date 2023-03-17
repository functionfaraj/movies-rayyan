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

export { FONT_FAMILY };
