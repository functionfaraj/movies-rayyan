import { useRayyanRouter } from "@/hooks";
import { useEffect } from "react";

export default function Movie() {
  const { navigate } = useRayyanRouter();
  useEffect(() => {
    navigate("/");
  }, []);
  return <></>;
}
