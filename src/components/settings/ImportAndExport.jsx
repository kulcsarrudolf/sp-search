import { Typography, Button, Box, Alert } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { saveAs } from "file-saver";

const ImportAndExport = () => {
  const searchHistoryJSON = localStorage.getItem("searches");
  const hasHistory = searchHistoryJSON?.length > 2;

  const handleExport = () => {
    const blob = new Blob([searchHistoryJSON], {
      type: "application/json",
    });
    saveAs(blob, `search-history-${new Date().toISOString()}.json`);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
        Import & Export
      </Typography>
      {!hasHistory && (
        <Alert severity="error" sx={{ my: 2 }}>
          No Search History!
        </Alert>
      )}
      <Button
        variant="contained"
        onClick={handleExport}
        startIcon={<FileDownloadIcon />}
        disabled={!hasHistory}
      >
        Export
      </Button>
    </Box>
  );
};

export default ImportAndExport;
