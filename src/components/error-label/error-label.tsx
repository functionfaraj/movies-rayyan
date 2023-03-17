import * as React from "react";
import ErrorIcon from "@/icons/error";
import { useStyle } from "./style";
const RayyanErrorLabel = ({
  labelText,

}: {
  labelText?: string;
}) => {
  const { clasess } = useStyle();
  return (
    <div style={clasess.container}>
      <ErrorIcon />
      <div style={clasess.lbl}>{labelText}</div>
    </div>
  );
};

export { RayyanErrorLabel };
