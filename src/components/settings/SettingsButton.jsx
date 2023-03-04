import { useState } from "react";

import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import SettingsPopUp from "./SettingsPopUp";

const SettingsButton = () => {
  const [settingsPopUp, setSettingsPopUp] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        onClick={() => setSettingsPopUp(true)}
        color="inherit"
      >
        <SettingsIcon />
      </IconButton>
      <SettingsPopUp
        open={settingsPopUp}
        onClose={() => {
          setSettingsPopUp(false);
        }}
      />
    </>
  );
};

export default SettingsButton;
