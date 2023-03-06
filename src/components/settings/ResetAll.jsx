import { Typography, Button, Box, Alert } from "@mui/material";

import { DEFAULT_FILTER, DEFAULT_MAKES } from "../../assets/default-values";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const ResetAll = ({ onClose }) => {
  const handleResetAll = () => {
    localStorage.setItem("defaultMakes", JSON.stringify(DEFAULT_MAKES));
    localStorage.setItem("lastSearch", JSON.stringify(DEFAULT_FILTER));
    localStorage.setItem("searches", JSON.stringify([]));
    onClose();
    window.location.reload(false);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
        Reset All
      </Typography>
      <Alert severity="warning" sx={{ my: 2 }}>
        All your saved data (Search History, Last Search, Selected Makes) will
        be cleared.
      </Alert>
      <Button
        variant="contained"
        onClick={handleResetAll}
        startIcon={<RestartAltIcon />}
      >
        Reset Now
      </Button>
    </Box>
  );
};

export default ResetAll;
