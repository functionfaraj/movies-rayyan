import * as React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useRayyanTheme } from "@/hooks/use-rayyan-theme";
import { convertHeightToVH, convertWidthToVW } from "@/utils/adapter";
import { FONT_FAMILY, getFontFamily } from "@/utils/font-family";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import i18next from "i18next";

const StyledTextField = styled(TextField, {
  shouldForwardProp: (propName: any) =>
    propName !== "secondColor" &&
    propName !== "primaryColor" &&
    propName !== "neutralColor" &&
    propName !== "errorColor",
})((props: any) => ({
  width: "100%",
  input: {
    backgroundColor: props.neutralColor(100),
    boxSizing: "border-box",
    borderRadius: props?.style?.borderRadius || 5,
    height: convertHeightToVH(42),
    ...getFontFamily(i18next.language, 400, 14),
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    color: props.error
      ? `${props.errorColor(300)}`
      : `${props.primaryColor(500)}`,
    ...props.style,
  },

  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      border: props.error
        ? `2px solid ${props.errorColor(100)}`
        : `2px solid ${props.neutralColor(100)}`,
    },
    "& fieldset": {
      border: props.error
        ? `1px solid ${props.errorColor(100)}`
        : `1px solid ${props.neutralColor(100)}`,
      boxSizing: "border-box",
      borderRadius: props?.style?.borderRadius || 5,
      width: "100%",
    },
    "&.Mui-focused fieldset": {
      borderColor: props.error
        ? `${props.errorColor(100)}`
        : props.neutralColor(100),
      borderRadius: props?.style?.borderRadius || 5,
      width: "100%",
    },
  },
}));

const RayyanTextInput = ({
  value,
  onChange,
  style,
  error,
  type,
  disabled,
  placeholder,
  onKeyDown,
  multiline,
  InputProps,
  Lefticon,
  autoFocus = false,
}: {
  value?: string;
  onChange?: any;
  style?: any;
  error?: any;
  type?: any;
  disabled?: any;
  placeholder?: any;
  onKeyDown?: any;
  multiline?: any;
  InputProps?: any;
  Lefticon?: any;
  autoFocus?: boolean;
}) => {
  const { primaryColor, secondColor, errorColor, neutralColor } =
    useRayyanTheme();
  const [showPass, setShowPass] = React.useState(false);
  return (
    <div style={{ position: "relative" }}>
      {Lefticon && (
        <div
          style={{
            position: "absolute",
            top: convertHeightToVH(6),
            left: convertWidthToVW(6),
            zIndex: 1,
            cursor: "pointer",
          }}
        >
          {Lefticon}
        </div>
      )}
      {type === "password" && (
        <div
          style={{
            position: "absolute",
            top: convertHeightToVH(10),
            left: convertWidthToVW(10),
            zIndex: 1,
            cursor: "pointer",
          }}
        >
          {showPass ? (
            <VisibilityIcon onClick={() => setShowPass(!showPass)} />
          ) : (
            <VisibilityOffIcon onClick={() => setShowPass(!showPass)} />
          )}
        </div>
      )}
      <StyledTextField
        value={value}
        onChange={onChange}
        style={style}
        error={error}
        type={type === "password" ? (showPass ? "text" : "password") : type}
        disabled={disabled}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        multiline={multiline}
        InputProps={InputProps}
        // @ts-ignore
        secondColor={secondColor}
        primaryColor={primaryColor}
        errorColor={errorColor}
        neutralColor={neutralColor}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export { RayyanTextInput };
