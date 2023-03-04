import { useState } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsPopUp from "./settings/SettingsPopUp";

const SPAppBar = () => {
  const [settingsPopUp, setSettingsPopUp] = useState(false);

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <DirectionsCarIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            SP Search
          </Typography>
          <IconButton
            size="large"
            onClick={() => setSettingsPopUp(true)}
            color="inherit"
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SettingsPopUp
        open={settingsPopUp}
        onClose={() => {
          setSettingsPopUp(false);
          window.location.reload(false);
        }}
      />
    </>
  );
};

export default SPAppBar;
