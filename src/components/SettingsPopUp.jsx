import { useEffect, useState } from "react";
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

import { MODELS_AND_MAKES } from "../assets/makes-and-models";
import SpDialog from "../shared-components/SpDialog";

export const DEFAULT_MAKES = [
  "Audi",
  "Volkswagen",
  "BMW",
  "Mercedes-Benz",
  "Tesla",
];

const SettingsPopUp = ({ open, onClose }) => {
  const [checkedMakes, setCheckedMakes] = useState(null);

  const handleSaveSettings = () => {
    if (checkedMakes) {
      localStorage.setItem("defaultMakes", JSON.stringify(checkedMakes));
    }
    onClose();
  };

  useEffect(() => {
    const defaultMakesJSON = localStorage.getItem("defaultMakes");
    const defaultMakes = JSON.parse(defaultMakesJSON) ?? DEFAULT_MAKES;

    setCheckedMakes(defaultMakes);
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <SpDialog
      title="Settings"
      open={open}
      onSave={handleSaveSettings}
      onClose={onClose}
    >
      <DefaultMakes
        checkedMakes={checkedMakes}
        setCheckedMakes={setCheckedMakes}
      />
    </SpDialog>
  );
};

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
              <Grid item xs={6} key={`${c.make}-item-key`}>
                <ListItem key={c.make} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={() => {
                      setCheckedMakes((prev) => {
                        if (prev.includes(c.make)) {
                          return prev.filter((m) => m !== c.make);
                        }

                        return [c.make, ...prev];
                      });
                    }}
                    dense
                  >
                    <ListItemIcon>
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

export default SettingsPopUp;
