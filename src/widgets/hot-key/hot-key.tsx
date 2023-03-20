import { ELanguage } from "@/enums";
import { useRayyanMovies } from "@/hooks/use-movies";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useStyle } from "./style";

const HotKeyWidget = () => {
  const { clasess } = useStyle();
  const { t } = useTranslation();
  return (
    <div style={clasess.container}>
      <div style={clasess.link}> {t("hotKey.title")}</div>
      <table>
        <tbody>
          {i18next.language === ELanguage.EN && (
            <tr>
              <td style={clasess.link}>ctrl+ع {"=>"}</td>
              <td style={clasess.linkAR}>{t("hotKey.changeToArabic")}</td>
            </tr>
          )}
          {i18next.language === ELanguage.AR && (
            <tr>
              <td style={clasess.link}>ctrl+e {"=>"}</td>
              <td style={clasess.linkEN}>{t("hotKey.changeToEn")}</td>
            </tr>
          )}
          <tr>
            <td style={clasess.link}>ctrl+f {"=>"}</td>
            <td style={clasess.link}>{t("hotKey.search")}</td>
          </tr>
          <tr>
            <td style={clasess.link}>ctrl+h {"=>"}</td>
            <td style={clasess.link}>{t("hotKey.home")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export { HotKeyWidget };
