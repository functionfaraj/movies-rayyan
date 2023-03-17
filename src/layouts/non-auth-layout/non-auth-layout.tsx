import { Footer } from "../footer";
import { Header } from "../header";
import { INonAuthLayout } from "./interfaces";
import { useStyle } from "./style";

const NonAuthLayout = ({ children }: INonAuthLayout) => {
  const { clasess } = useStyle();
  return <div style={clasess.container}>
    <Header />
    <div style={clasess.bodyContainer}>{children}</div>
    <Footer />
  </div>;
};

export { NonAuthLayout };
