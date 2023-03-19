import { useTranslation } from "react-i18next";
import { useStyle } from "./style";
const PageNotFoundWidget = () => {
  const { clasess } = useStyle();
  const { t } = useTranslation();
  return (
    <div style={clasess.container}>
      <div style={clasess.title}>{t("notFound")}</div>
    </div>
  );
};
export { PageNotFoundWidget };
