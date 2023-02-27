import { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import RecentSearches from "./RecentSearches";
import SearchButton from "./SearchButton";
import SPFilter from "./SPFilter";
import PopularSearches from "./PopularSearches";

const DEFAULT_FILTER = {
  make: "Audi",
  model: "Any",
  year: 2022,
};

const SPContainer = () => {
  const [filter, setFilter] = useState(null);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    const lastFilterJSON = localStorage.getItem("lastSearch");
    const lastFilter = JSON.parse(lastFilterJSON) ?? DEFAULT_FILTER;

    if (lastFilter) {
      setFilter(lastFilter);
    }
  }, []);

  if (!filter) {
    return null;
  }

  return (
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
        onPress={() => {
          setRefresh((prev) => prev + 1);
        }}
      />
      <RecentSearches refresh={refresh} />
      <PopularSearches refresh={refresh} />
    </Grid>
  );
};

export default SPContainer;
