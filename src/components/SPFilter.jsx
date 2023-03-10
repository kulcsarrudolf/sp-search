import { MenuItem, Grid, Typography, Divider, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { DEFAULT_MAKES, DEFAULT_PARTS } from "../assets/default-values";
import { MODELS_AND_MAKES } from "../assets/makes-and-models";
import SPSelect from "../shared-components/SPSelect";
import { arrayRange } from "../utils";
import Autocomplete from "@mui/material/Autocomplete";

const SPFilter = ({ filter, setFilter }) => {
  const [defaultMakes, setDefaultMakes] = useState([]);
  const [make, setMake] = useState(filter.make);
  const [model, setModel] = useState(filter.model);
  const [year, setYear] = useState(filter.year);
  const [part, setPart] = useState(DEFAULT_PARTS[0]);
  const [topSearchedModels, setTopSearchedModels] = useState([]);

  const updateTopSearchedModels = (currentSelectedMake) => {
    const currentSearchesJSON = localStorage.getItem("searches");
    const currentSearches = JSON.parse(currentSearchesJSON) ?? [];

    setTopSearchedModels(
      currentSearches
        .filter((s) => s.make === currentSelectedMake)
        .sort((a, b) => b.cnt - a.cnt)
        .map((s) => s.model)
        .slice(0, 5)
    );
  };

  const handleMakeChange = (event) => {
    const currentSelectedMake = event.target.innerText;
    setModel("Any");
    setMake(currentSelectedMake || filter.make);
    updateTopSearchedModels(currentSelectedMake);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handlePartChange = (event) => {
    setPart(event.target.value);
  };
  useEffect(() => {
    const savedDefaultMakesJSON = localStorage.getItem("defaultMakes");
    const savedDefaultMakes =
      JSON.parse(savedDefaultMakesJSON) ?? DEFAULT_MAKES;

    setDefaultMakes(savedDefaultMakes);
    updateTopSearchedModels(make);
  }, []);

  useEffect(() => {
    setFilter({ make, model, year, part });
  }, [make, model, year, part]);

  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <Autocomplete
          value={make}
          disablePortal
          options={defaultMakes.map((make) => ({ label: make, value: make }))}
          fullWidth
          onChange={handleMakeChange}
          renderInput={(params) => <TextField {...params} label="Make" />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SPSelect name="Model" value={model} onChange={handleModelChange}>
          <MenuItem value={"Any"}>Any</MenuItem>
          {topSearchedModels.length > 0 && <Divider />}

          {topSearchedModels.length > 0 && (
            <Typography variant="caption" display="block" sx={{ my: 1, mx: 2 }}>
              Top Searched Models
            </Typography>
          )}
          {topSearchedModels.map((model) => (
            <MenuItem key={`${model}-model-element`} value={model}>
              {model}
            </MenuItem>
          ))}
          {topSearchedModels.length > 0 && <Divider />}
          {MODELS_AND_MAKES.find((c) => c.make === make).models.map((model) => (
            <MenuItem key={`${model}-model-element`} value={model}>
              {model}
            </MenuItem>
          ))}
        </SPSelect>
      </Grid>
      <Grid item xs={12} sm={6} md={1.5}>
        <SPSelect name="Year" value={year} onChange={handleYearChange}>
          {arrayRange(2000, 2023, 1).map((y) => (
            <MenuItem key={`${y}-min-element`} value={y}>
              {y}
            </MenuItem>
          ))}
        </SPSelect>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SPSelect name="Part" value={part} onChange={handlePartChange}>
          {DEFAULT_PARTS.map((part) => (
            <MenuItem key={`${part}-part-element`} value={part}>
              {part}
            </MenuItem>
          ))}
        </SPSelect>
      </Grid>
    </>
  );
};

export default SPFilter;
