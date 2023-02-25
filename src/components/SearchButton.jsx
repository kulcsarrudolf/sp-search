import { Grid, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { navigateToCarPartsPro } from "../utils";

const SearchButton = ({ make, model, year }) => {
  const saveSearch = (make, model, year) => {
    const currentSearchesJSON = localStorage.getItem("searches");

    if (currentSearchesJSON) {
      const currentSearches = JSON.parse(currentSearchesJSON);

      const existingSearch = currentSearches.find(
        (s) => s.make === make && s.model === model && s.year === year
      );

      if (existingSearch) {
        const filteredSearches = currentSearches.filter(
          (s) => s.make !== make && s.model !== model && s.year !== year
        );

        localStorage.setItem(
          "searches",
          JSON.stringify([
            { make, model, year, cnt: existingSearch.cnt + 1 },
            ...filteredSearches,
          ])
        );
      } else {
        localStorage.setItem(
          "searches",
          JSON.stringify([{ make, model, year, cnt: 1 }, ...currentSearches])
        );
      }
    } else {
      localStorage.setItem(
        "searches",
        JSON.stringify([{ make, model, year, cnt: 1 }])
      );
    }
  };

  const handleSearch = () => {
    navigateToCarPartsPro(make, model, year);
    saveSearch(make, model, year);
  };

  return (
    <Grid item xs={12} sx={{ textAlign: "center" }}>
      <Button
        disabled={model === "Any"}
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Grid>
  );
};

export default SearchButton;
