import { IconButton, useTheme } from "@mui/material";

import HighlightIcon from "@mui/icons-material/Highlight";
import { useContext } from "react";
import { ColorModeContext } from "../App";

const SpColorModeButton = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <HighlightIcon />
      ) : (
        <HighlightIcon sx={{ transform: "rotate(180deg)" }} />
      )}
    </IconButton>
  );
};

export default SpColorModeButton;
