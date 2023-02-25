import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Typography, Grid, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { navigateToCarPartsPro } from "../utils";

const RecentSearches = () => {
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    const currentSearchesJSON = localStorage.getItem("searches");
    const currentSearches = JSON.parse(currentSearchesJSON);

    if (currentSearches) {
      setSearches(currentSearches.sort((a, b) => b.cnt - a.cnt));
    }
  }, []);

  if (searches.length === 0) {
    return null;
  }

  return (
    <>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="subtitle1">Recent searches</Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        {searches.map((s, idx) => (
          <Chip
            key={`${s.make}-${s.year}-${idx}-search-chip`}
            color="primary"
            label={`${s.make} ${s.model} (${s.year})`}
            onClick={() => {
              navigateToCarPartsPro(s.make, s.model, s.year);
            }}
            onDelete={() => {
              navigateToCarPartsPro(s.make, s.model, s.year);
            }}
            deleteIcon={<KeyboardDoubleArrowRightIcon />}
            sx={{ mx: 1 }}
          />
        ))}
      </Grid>
    </>
  );
};

export default RecentSearches;
