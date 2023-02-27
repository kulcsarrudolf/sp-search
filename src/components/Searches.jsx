import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Typography, Grid, Chip } from "@mui/material";
import { navigateToCarPartsPro } from "../utils";

const Searches = ({ title, searches }) => {
  if (searches.length === 0) {
    return null;
  }

  return (
    <>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="subtitle1">{title}</Typography>
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
            sx={{ mx: 0.25, mb: 1 }}
          />
        ))}
      </Grid>
    </>
  );
};

export default Searches;
