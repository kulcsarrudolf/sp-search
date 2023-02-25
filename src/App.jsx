import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MODELS_AND_MAKES } from "./assets/makes-and-models";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <DirectionsCarIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            SP Search
          </Typography>
        </Toolbar>
      </AppBar>

      <>
        {MODELS_AND_MAKES.map((c) => (
          <p key={`${c.make}-element`}>{c.make}</p>
        ))}
      </>
    </ThemeProvider>
  );
}

export default App;
