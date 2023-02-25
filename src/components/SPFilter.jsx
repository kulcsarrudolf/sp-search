import { MenuItem, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { MODELS_AND_MAKES } from "../assets/makes-and-models";
import { arrayRange } from "../utils";
import SPSelect from "./SPSelect";

const SPFilter = ({ filter, setFilter }) => {
  const [make, setMake] = useState(filter.make);
  const [model, setModel] = useState(filter.model);
  const [year, setYear] = useState(filter.year);

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

  useEffect(() => {
    setFilter({ make, model, year });
  }, [make, model, year]);

  return (
    <>
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
    </>
  );
};

export default SPFilter;
