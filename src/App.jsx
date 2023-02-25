import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SPAppBar from "./components/SpAppBar";
import SPContainer from "./components/SPContainer";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SPAppBar />
      <SPContainer />
    </ThemeProvider>
  );
}

export default App;
