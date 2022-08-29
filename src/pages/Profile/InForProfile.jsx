import * as React from "react";

import { Box, Grid } from "@mui/material";
import BookedTicket from "./TableTickket";
import UserCard from "./UserCard";
export default function RecipeReviewCard() {
  return (
    <Box sx={{ my: 2 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <UserCard />
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={6}>
          <BookedTicket />
        </Grid>
      </Grid>
    </Box>
  );
}
