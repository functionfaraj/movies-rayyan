import { LoginWidget } from "@/widgets";
import { useTranslation } from "react-i18next";
import Head from 'next/head'

export default function Login() {
  const { t } = useTranslation();


  return <>
    <Head>
      <title>حانوت - تسجيل الدخول</title>
    </Head>
    <LoginWidget />
  </>;
}
