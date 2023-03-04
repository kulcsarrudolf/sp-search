import { AppBar, Toolbar, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SettingsButton from "./settings/SettingsButton";

const SPAppBar = () => (
  <AppBar position="relative">
    <Toolbar>
      <DirectionsCarIcon sx={{ mr: 2 }} />
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        SP Search
      </Typography>
      <SettingsButton />
    </Toolbar>
  </AppBar>
);

export default SPAppBar;
