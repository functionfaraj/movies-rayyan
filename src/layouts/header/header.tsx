import { useStyle } from "./style";

const Header = () => {
  const { clasess } = useStyle();
  return (
    <div style={clasess.container}>
      Hay
    </div>
  );
};
export { Header };
