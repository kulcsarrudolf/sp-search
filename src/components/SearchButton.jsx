import { Grid, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { areObjectsEqual, navigateToCarPartsPro } from "../utils";

const SearchButton = ({ make, model, year, onPress }) => {
  const saveSearch = () => {
    let updatedSearches = [{ make, model, year, cnt: 1 }];
    const previousSearchesJSON = localStorage.getItem("searches");
    const previousSearches = JSON.parse(previousSearchesJSON) ?? [];
    const currentSearch = { make, model, year };

    const existingSearch = previousSearches.find((s) =>
      areObjectsEqual(
        { make: s.make, model: s.model, year: s.year },
        currentSearch
      )
    );

    if (existingSearch) {
      const filteredSearches = previousSearches.filter(
        (s) =>
          !areObjectsEqual(
            { make: s.make, model: s.model, year: s.year },
            currentSearch
          )
      );

      updatedSearches = [
        { ...currentSearch, cnt: existingSearch.cnt + 1 },
        ...filteredSearches,
      ];
    } else {
      updatedSearches = [{ ...currentSearch, cnt: 1 }, ...previousSearches];
    }

    localStorage.setItem("searches", JSON.stringify(updatedSearches));
    localStorage.setItem("lastSearch", JSON.stringify(currentSearch));
  };

  const handleSearch = () => {
    navigateToCarPartsPro(make, model, year);
    saveSearch();

    if (onPress) {
      onPress();
    }
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
