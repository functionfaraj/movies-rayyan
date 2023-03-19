import Image from "next/image";
import { useStyle } from "./style";
import logo from "@/images/logo.png";
import { useTranslation } from "react-i18next";
import {
  FavoriteIcon,
  HomeIcon,
  MoviesIcon,
  SearchIcon,
  SeriesIcon,
} from "@/icons";
import { ELanguage } from "@/enums";
import { useRayyanLanguage } from "@/hooks/use-rayyan-language";
import i18next from "i18next";
import { useRayyanRouter } from "@/hooks";
const Header = () => {
  const { clasess } = useStyle();
  const { t } = useTranslation();
  const { changeLanguage } = useRayyanLanguage();
  const { navigate } = useRayyanRouter();
  return (
    <div style={clasess.container}>
      <div style={clasess.linksContainer}>
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div style={clasess.linkContainer} onClick={() => navigate("/")}>
          <div>
            <HomeIcon />
          </div>
          <div style={clasess.linkLbl}>{t("header.home")}</div>
        </div>
        <div style={clasess.linkContainer} onClick={() => navigate("/search")}>
          <div>
            <SearchIcon />
          </div>
          <div style={clasess.linkLbl}>{t("header.search")}</div>
        </div>
        {/* <div style={clasess.linkContainer}>
          <div><SeriesIcon /></div>
          <div style={clasess.linkLbl}>{t("header.series")}</div>
        </div>
        <div style={clasess.linkContainer}>
          <div><MoviesIcon /></div>
          <div style={clasess.linkLbl}>{t("header.movies")}</div>
        </div>
        <div style={clasess.linkContainer}>
          <div><FavoriteIcon /></div>
          <div style={clasess.linkLbl}>{t("header.favorite")}</div>
        </div> */}
        <div style={clasess.linkContainer}>
          {i18next.language === ELanguage.EN && (
            <div
              style={clasess.linkAR}
              onClick={() => changeLanguage(ELanguage.AR)}
            >
              العربية
            </div>
          )}
          {i18next.language === ELanguage.AR && (
            <div
              style={clasess.linkEN}
              onClick={() => changeLanguage(ELanguage.EN)}
            >
              EN
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};
export { Header };
