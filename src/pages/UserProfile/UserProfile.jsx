import React from "react";
import { Box, CircularProgress } from "@mui/material";
import UserCard from "./UserCard";
import { Grid } from "@mui/material";
import TableTicket from "./TableTickket";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reset } from "../../slices/user";

const UserProfile = () => {
  const { isUserDetailsLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reset());
  }, []);

  return (
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
          {isUserDetailsLoading ? <CircularProgress /> : <UserCard />}
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
  );
};

export default UserProfile;
