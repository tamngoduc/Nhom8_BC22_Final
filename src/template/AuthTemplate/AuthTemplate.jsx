import React from "react";
import { SnackbarProvider } from "notistack";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "../../themes/appThemeProvider";

const AuthTemplate = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <SnackbarProvider maxSnack={3}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url("https://wallpapercave.com/wp/wp10784364.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: `${isMobile ? "left top" : "center"}`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </SnackbarProvider>
  );
};

export default AuthTemplate;
