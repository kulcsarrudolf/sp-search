import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SPSelect = ({ name, value, onChange, children }) => (
  <FormControl fullWidth>
    <InputLabel id={`${name}-select-label`}>{name}</InputLabel>
    <Select
      labelId={`${name}-select-label`}
      id={`${name}-select`}
      value={value}
      label={name}
      onChange={onChange}
    >
      {children}
    </Select>
  </FormControl>
);

export default SPSelect;
