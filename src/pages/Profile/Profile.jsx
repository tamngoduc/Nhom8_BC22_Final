import React from "react";
import Box from "@mui/material/Box";
import HeaderProfile from "./HeaderProfile";
import UserCard from "./UserCard";
import { Grid } from "@mui/material";
import TableTicket from "./TableTickket";
const Profile = () => {
  return (
    <Box className="bg_img">
      <Box>
        <HeaderProfile />
      </Box>
      <Box sx={{ mt: 7 }}>
        <Grid container>
          <Grid marginLeft="100px" item xs={12} sm={12} md={6} lg={4}>
            <UserCard />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <TableTicket />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile;
