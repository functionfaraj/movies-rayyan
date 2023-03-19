import { ELanguage } from "@/enums";
import { useRayyanRouter } from "@/hooks";
import { changeLanguage } from "i18next";
import { useEffect } from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import { INonAuthLayout } from "./interfaces";
import { useStyle } from "./style";

const NonAuthLayout = ({ children }: INonAuthLayout) => {
  const { clasess } = useStyle();
  const { navigate } = useRayyanRouter();
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.ctrlKey &&
        (event.key.toLowerCase() === "f" || event.key.toLowerCase() === "ب")
      ) {
        event.preventDefault();
        navigate("/search");
      }
      if (
        event.ctrlKey &&
        (event.key.toLowerCase() === "h" || event.key.toLowerCase() === "ا")
      ) {
        event.preventDefault();
        navigate("/");
      }
      if (
        event.ctrlKey &&
        (event.key.toLowerCase() === "e" || event.key.toLowerCase() === "ث")
      ) {
        event.preventDefault();
        changeLanguage(ELanguage.EN);
      }
      if (
        event.ctrlKey &&
        (event.key.toLowerCase() === "a" || event.key.toLowerCase() === "ش")
      ) {
        event.preventDefault();
        changeLanguage(ELanguage.AR);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div style={clasess.container}>
      <Header />
      <div style={clasess.bodyContainer}>{children}</div>
      <Footer />
    </div>
  );
};

export { NonAuthLayout };
