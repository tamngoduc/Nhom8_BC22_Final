import React from "react";
import { Box } from "@mui/material";

import HeaderProfile from "./HeaderProfile";
import UserCard from "./UserCard";
import { Grid } from "@mui/material";
import TableTicket from "./TableTickket";
const Profile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box>
        <HeaderProfile />
      </Box>
      <Box
        sx={{
          flexDirection: "column",
          flexGrow: 1,
          height: 100,
          overflowY: "scroll",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="bg_img"
      >
        <Grid item container>
          <Grid sx={{ mt: 2 }} item xs={12} sm={12} md={6} lg={4}>
            <UserCard />
          </Grid>
          <Grid sx={{ mt: 10 }} item xs={12} sm={10} md={8} lg={5}>
            <TableTicket />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
