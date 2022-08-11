import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Home from "pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainTemplate from "template/MainTemplate/MainTemplate";
import theme from "Theme/AppthemeProvider";

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
