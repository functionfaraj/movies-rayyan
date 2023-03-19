import { useTranslation } from "react-i18next";
import Head from "next/head";
import i18next from "i18next";

export default function Movie() {
  const { t } = useTranslation();
  return <>This movie not found</>;
}
