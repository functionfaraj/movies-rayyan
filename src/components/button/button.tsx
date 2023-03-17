import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { FONT_FAMILY } from "@/utils/font-family";
import { convertHeightToVH } from "@/utils/adapter";

const StyledButton = styled(Button, {
  shouldForwardProp: (propName: any) =>
    propName !== "secondColor" &&
    propName !== "primaryColor" &&
    propName !== "neutralColor" &&
    propName !== "errorColor",
})((props: any) => ({
  boxShadow: "none",
  textTransform: "none",
  padding: "14px",
  lineHeight: 1.5,
  backgroundColor: props.primaryColor(500),
  borderColor: "#FFFFFF",
  height: convertHeightToVH(56),
  borderRadius: 4,
  gap: 7,
  color: props.neutralColor(800),
  "&:hover": {
    letterSpacing: "0.1em",
    backgroundColor: props.primaryColor(500),
  },
  transition: "0.25s",
  width: "100%",
  ...FONT_FAMILY.Almarai(700, 24),
}));
const RayyanPrimaryButton = ({ ...props }) => {
  const { primaryColor, neutralColor } = useRayyanTheme();
  return (
    <StyledButton
      {...props}
      // @ts-ignore
      primaryColor={primaryColor}
      neutralColor={neutralColor}

    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {props.leftIcon && (
          <span
            style={{
              width: "15%",
              display: "flex",
              justifyContent: "center ",
              alignItems: "center",
            }}
          >
            {props.leftIcon}
          </span>
        )}
        <span
          style={{
            width: props.leftIcon ? "85%" : "100%",
          }}
        >
          {props.children}
        </span>
      </div>
    </StyledButton>
  );
};

export { RayyanPrimaryButton };
