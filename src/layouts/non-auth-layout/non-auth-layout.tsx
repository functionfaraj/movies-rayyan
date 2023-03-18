import { useEffect } from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import { INonAuthLayout } from "./interfaces";
import { useStyle } from "./style";

const NonAuthLayout = ({ children }: INonAuthLayout) => {
  const { clasess } = useStyle();
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();
        console.log("ctrl+f clicked")
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return <div style={clasess.container}>
    <Header />
    <div style={clasess.bodyContainer}>{children}</div>
    <Footer />
  </div>;
};

export { NonAuthLayout };
