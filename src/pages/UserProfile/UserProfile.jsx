import React from "react";
import { Box } from "@mui/material";
import UserCard from "./UserCard";
import { Grid } from "@mui/material";
import TableTicket from "./TableTickket";
import { SnackbarProvider } from "notistack";

const UserProfile = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Box className="bg_img">
        <Grid container>
          <Grid
            item
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={12}
            sm={12}
            md={6}
            lg={5}
          >
            <UserCard />
          </Grid>
          <Grid
            item
            sx={{
              mt: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={12}
            sm={10}
            md={8}
            lg={6}
          >
            <TableTicket />
          </Grid>
        </Grid>
      </Box>
    </SnackbarProvider>
  );
};

export default UserProfile;
