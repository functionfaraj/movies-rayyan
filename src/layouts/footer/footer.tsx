import Image from "next/image";
import { useTranslation } from "react-i18next";
import logo from "@/images/logo.png"
import { useStyle } from "./style";
import { useRayyanLanguage } from "@/hooks/use-rayyan-language";
import { ELanguage } from "@/enums";

const Footer = () => {
  const { clasess } = useStyle();
  const { t } = useTranslation()
  const { changeLanguage } = useRayyanLanguage()
  return (
    <div style={clasess.container}>
      <Image
        src={logo}
        alt="logo"
      />
      <div style={clasess.linksContainer}>
        <div style={clasess.link}>{t("footer.privacyPolicy")}</div>
        <div style={clasess.link}>{t("footer.terms")}</div>
        <div style={clasess.link}>{t("footer.contactUs")}</div>
        <div style={clasess.link}>{t("footer.career")}</div>
        <div style={clasess.linkAR} onClick={() => changeLanguage(ELanguage.AR)}>العربية</div>
        <div style={clasess.linkEN} onClick={() => changeLanguage(ELanguage.EN)}>EN</div>
      </div>
    </div>
  );
};
export { Footer };
