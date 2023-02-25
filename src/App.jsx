import { CssBaseline, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import RecentSearches from "./components/RecentSearches";
import SearchButton from "./components/SearchButton";
import SPAppBar from "./components/SpAppBar";
import SPFilter from "./components/SPFilter";

const theme = createTheme();

function App() {
  const [filter, setFilter] = useState({
    make: "Audi",
    model: "Any",
    year: 2022,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SPAppBar />
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        sx={{ mt: 2, p: 2 }}
      >
        <SPFilter filter={filter} setFilter={setFilter} />
        <SearchButton
          make={filter.make}
          model={filter.model}
          year={filter.year}
        />
        <RecentSearches />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
