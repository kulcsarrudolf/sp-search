import { Typography, Button, Box } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { saveAs } from "file-saver";

const ImportAndExport = () => {
  const handleExport = () => {
    const searchHistoryJSON = localStorage.getItem("searches");
    const blob = new Blob([searchHistoryJSON], { type: "application/json" });
    saveAs(blob, `search-history-${new Date().toISOString()}.json`);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
        Import & Export
      </Typography>

      <Button
        variant="contained"
        onClick={handleExport}
        startIcon={<SaveIcon />}
      >
        Export
      </Button>
    </Box>
  );
};

export default ImportAndExport;
