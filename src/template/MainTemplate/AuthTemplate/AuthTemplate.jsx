import React from "react";
import { SnackbarProvider } from "notistack";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthTemplate = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Box
        sx={{
          backgroundImage: `url("https://wallpaperaccess.com/full/492910.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
    </SnackbarProvider>
  );
};

export default AuthTemplate;
