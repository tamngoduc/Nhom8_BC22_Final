import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { displayOnDesktop } from "../../themes/comonStyles";
import Footer from "./Footer/Footer";
import FooterMenu from "./Footer/FooterMenu";
import Header from "./Header/Header";

const MainTemplate = () => {
  return (
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: 100,
          overflowY: "scroll",
        }}
      >
        <Outlet />
      </Box>

      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <FooterMenu />
      </Box>
      <Box sx={displayOnDesktop}>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainTemplate;
