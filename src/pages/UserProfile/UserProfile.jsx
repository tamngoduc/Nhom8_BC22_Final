import React from "react";
import { Box } from "@mui/material";
import UserCard from "./UserCard";
import { Grid } from "@mui/material";
import TableTicket from "./TableTickket";

const UserProfile = () => {
  return (
    <Box className="bg_img">
      <Grid item container>
        <Grid
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          item
          xs={12}
          sm={12}
          md={6}
          lg={5}
        >
          <UserCard />
        </Grid>
        <Grid
          sx={{
            mt: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          item
          xs={12}
          sm={10}
          md={8}
          lg={6}
        >
          <TableTicket />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
