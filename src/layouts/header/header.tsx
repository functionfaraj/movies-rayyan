import Image from "next/image";
import { useStyle } from "./style";
import logo from '@/images/logo.png';
import { useTranslation } from "react-i18next";
import { FavoriteIcon, HomeIcon, MoviesIcon, SeriesIcon } from "@/icons";
const Header = () => {
  const { clasess } = useStyle();
  const { t } = useTranslation()
  return (
    <div style={clasess.container}>
      <div style={clasess.linksContainer}>
        <div><Image src={logo} alt="logo" /></div>
        <div style={clasess.linkContainer}>
          <div><HomeIcon /></div>
          <div style={clasess.linkLbl}>{t("header.home")}</div>
        </div>
        <div style={clasess.linkContainer}>
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
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};
export { Header };
