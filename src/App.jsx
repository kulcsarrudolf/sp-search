import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  MenuItem,
  Grid,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MODELS_AND_MAKES } from "./assets/makes-and-models";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useState } from "react";
import SPSelect from "./components/SPSelect";
import { arrayRange } from "./utils";
import SearchIcon from "@mui/icons-material/Search";

const theme = createTheme();

function App() {
  const [make, setMake] = useState("Audi");
  const [model, setModel] = useState("Any");
  const [year, setYear] = useState(2022);

  const handleMakeChange = (event) => {
    setModel("Any");
    setMake(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSearch = () => {
    const CAR_PART_PRO_URL = `https://pro-oh.car-part.com/cgi-bin/proSearch.cgi?userPart=Headlight+Assembly&filterOrder2=ASC&limitVin=n&userDate2=Ending+Year&userDate=${year}&filterOrder1=ASC&filterPrice=all&filterAge=&userSearch=int&filterCert=all&filterDelivery=3&userPage=1&userModel=${make}+${model}&userLocation=All+States&filterDamageUnit=&userVIN=&filterPartType=List-2%2C3%2CA%2CQ%2CR&limitVins=n&userZip=L4C0S7&limitGradeA=n&filterSort1=grade&userPreference=grade&userInterchange=None&filterWarranty=all&filterSort2=zip&svZip=y&filterAGrade=n&limitYears=n&limitMiles=n&buyerType=S&request_method=POST`;

    window.open(CAR_PART_PRO_URL, "_blank", "noreferrer");
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
          <SPSelect name="Year" value={year} onChange={handleYearChange}>
            {arrayRange(2000, 2023, 1).map((y) => (
              <MenuItem key={`${y}-min-element`} value={y}>
                {y}
              </MenuItem>
            ))}
          </SPSelect>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<SearchIcon />}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
