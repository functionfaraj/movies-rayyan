import Image from "next/image";
import { useTranslation } from "react-i18next";
import logo from "@/images/logo.png"
import { useStyle } from "./style";

const Footer = () => {
  const { clasess } = useStyle();
  const { t } = useTranslation()
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
      </div>
    </div>
  );
};
export { Footer };
