import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import CssBaseLine from "@mui/material/CssBaseline";
import Header from "./Component/Home_Header/Header";
import Footer from "./Component/Home_Footer/Footer";
import FooterMenu from "./Component/Home_Footer/FooterMenu";
import { displayOnDesktop } from "./Theme/ComonStyles";
function App() {
  return (
    <React.Fragment>
      <CssBaseLine />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
