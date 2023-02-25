import { AppBar, Toolbar, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const SPAppBar = () => (
  <AppBar position="relative">
    <Toolbar>
      <DirectionsCarIcon sx={{ mr: 2 }} />
      <Typography variant="h6" color="inherit" noWrap>
        SP Search
      </Typography>
    </Toolbar>
  </AppBar>
);

export default SPAppBar;
