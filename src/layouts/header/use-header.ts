import { useRayyanRouter } from "@/hooks";
import { clearStorage } from "@/services/storage-data";
import { useState } from "react";

const useHeader = () => {
  const { navigate } = useRayyanRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    clearStorage();
    navigate("/login");
  };
  return {
    logout,
    handleClick,
    handleClose,
    open,
    anchorEl,
  };
};

export { useHeader };
