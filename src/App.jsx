import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  MenuItem,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MODELS_AND_MAKES } from "./assets/makes-and-models";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useState } from "react";
import SPSelect from "./components/SPSelect";
import { arrayRange } from "./utils";

const theme = createTheme();

function App() {
  const [make, setMake] = useState("Audi");
  const [model, setModel] = useState("Any");
  const [minYear, setMinYear] = useState(2022);
  const [maxYear, setMaxYear] = useState(2023);

  const handleMakeChange = (event) => {
    setModel("Any");
    setMake(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleMinYearChange = (event) => {
    setMinYear(event.target.value);
  };

  const handleMaxYearChange = (event) => {
    setMaxYear(event.target.value);
  };

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

      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 2, p: 2 }}
      >
        <Grid item xs={2}>
          <SPSelect name="Make" value={make} onChange={handleMakeChange}>
            {MODELS_AND_MAKES.map((c) => (
              <MenuItem key={`${c.make}-element`} value={c.make}>
                {c.make}
              </MenuItem>
            ))}
          </SPSelect>
        </Grid>
        <Grid item xs={2}>
          <SPSelect name="Model" value={model} onChange={handleModelChange}>
            <MenuItem value={"Any"}>Any</MenuItem>
            {MODELS_AND_MAKES.find((c) => c.make === make).models.map(
              (model) => (
                <MenuItem key={`${model}-model-element`} value={model}>
                  {model}
                </MenuItem>
              )
            )}
          </SPSelect>
        </Grid>
        <Grid item xs={1}>
          <SPSelect
            name="Min Year"
            value={minYear}
            onChange={handleMinYearChange}
          >
            {arrayRange(2000, maxYear, 1).map((y) => (
              <MenuItem key={`${y}-min-element`} value={y}>
                {y}
              </MenuItem>
            ))}
          </SPSelect>
        </Grid>
        <Grid item xs={1}>
          <SPSelect
            name="Max Year"
            value={maxYear}
            onChange={handleMaxYearChange}
          >
            {arrayRange(minYear, 2023, 1).map((y) => (
              <MenuItem key={`${y}-max-element`} value={y}>
                {y}
              </MenuItem>
            ))}
          </SPSelect>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
