import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// react icons
import { FaAirbnb } from "react-icons/fa";
import { pink } from "@mui/material/colors";
import { flexCenter } from "../../../themes/comonStyles";

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: "20px",
          fontWeight: "bold",
        }}
        component="h3"
      >
        airbnb
      </Typography>
    </Box>
  );
};

export default Logo;
