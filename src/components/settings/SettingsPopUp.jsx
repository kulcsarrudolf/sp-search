import { useEffect, useState } from "react";

import SpDialog from "../../shared-components/SpDialog";
import { DEFAULT_MAKES } from "../../assets/default-values";
import DefaultMakes from "./DefaultMakes";
import ResetAll from "./ResetAll";

const SettingsPopUp = ({ open, onClose }) => {
  const [checkedMakes, setCheckedMakes] = useState(null);

  const handleSaveSettings = () => {
    if (checkedMakes) {
      localStorage.setItem("defaultMakes", JSON.stringify(checkedMakes));
    }
    window.location.reload(false);
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
      <ResetAll onClose={onClose} />
      <DefaultMakes
        checkedMakes={checkedMakes}
        setCheckedMakes={setCheckedMakes}
      />
    </SpDialog>
  );
};

export default SettingsPopUp;
