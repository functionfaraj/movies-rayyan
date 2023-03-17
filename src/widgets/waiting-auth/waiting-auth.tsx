import Lottie from "react-lottie";
import * as animationData from "./loading.json";

import { useStyle } from "./style";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const WaitingAuth = () => {
  const { clasess } = useStyle();

  return (
    <div style={clasess.container}>
      <Lottie options={defaultOptions} height={"80%"} width={"80%"} />
    </div>
  );
};
export { WaitingAuth };
