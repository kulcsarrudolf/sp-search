import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Typography,
} from "@mui/material";

import { MODELS_AND_MAKES } from "../../assets/makes-and-models";

const DefaultMakes = ({ checkedMakes, setCheckedMakes }) => {
  if (!checkedMakes) {
    return null;
  }

  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Default Makes
      </Typography>
      <List>
        <Grid container>
          {MODELS_AND_MAKES.map((c) => {
            const labelId = `checkbox-list-label-${c.make}`;
            return (
              <Grid item xs={12} sm={6} key={`${c.make}-item-key`}>
                <ListItem key={c.make} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={() => {
                      setCheckedMakes((prev) => {
                        if (prev.includes(c.make)) {
                          return prev.filter((m) => m !== c.make).sort();
                        }

                        return [c.make, ...prev].sort();
                      });
                    }}
                    dense
                  >
                    <ListItemIcon sx={{ minWidth: 0 }}>
                      <Checkbox
                        edge="start"
                        checked={checkedMakes.includes(c.make)}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={c.make} />
                  </ListItemButton>
                </ListItem>
              </Grid>
            );
          })}
        </Grid>
      </List>
    </>
  );
};

export default DefaultMakes;
