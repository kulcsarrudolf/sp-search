import { MenuItem, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { DEFAULT_MAKES, DEFAULT_PARTS } from "../assets/default-values";
import { MODELS_AND_MAKES } from "../assets/makes-and-models";
import SPSelect from "../shared-components/SPSelect";
import { arrayRange } from "../utils";

const SPFilter = ({ filter, setFilter }) => {
  const [defaultMakes, setDefaultMakes] = useState([]);
  const [make, setMake] = useState(filter.make);
  const [model, setModel] = useState(filter.model);
  const [year, setYear] = useState(filter.year);
  const [part, setPart] = useState(DEFAULT_PARTS[0]);

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

  const handlePartChange = (event) => {
    setPart(event.target.value);
  };

  useEffect(() => {
    const savedDefaultMakesJSON = localStorage.getItem("defaultMakes");
    const savedDefaultMakes =
      JSON.parse(savedDefaultMakesJSON) ?? DEFAULT_MAKES;

    setDefaultMakes(savedDefaultMakes);
  }, []);

  useEffect(() => {
    setFilter({ make, model, year, part });
  }, [make, model, year, part]);

  return (
    <>
      <Grid item xs={2}>
        <SPSelect name="Make" value={make} onChange={handleMakeChange}>
          {defaultMakes.map((make) => (
            <MenuItem key={`${make}-element`} value={make}>
              {make}
            </MenuItem>
          ))}
        </SPSelect>
      </Grid>
      <Grid item xs={2}>
        <SPSelect name="Model" value={model} onChange={handleModelChange}>
          <MenuItem value={"Any"}>Any</MenuItem>
          {MODELS_AND_MAKES.find((c) => c.make === make).models.map((model) => (
            <MenuItem key={`${model}-model-element`} value={model}>
              {model}
            </MenuItem>
          ))}
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
      <Grid item xs={2}>
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
