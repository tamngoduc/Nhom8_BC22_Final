import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainTemplate from "./template/MainTemplate/MainTemplate";
import Home from "./pages/Home/Home";
import theme from "./themes/appThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
