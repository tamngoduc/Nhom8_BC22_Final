import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { BsGlobe } from "react-icons/bs";
import { FaRegUserCircle, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authButton, flexCenter } from "../../../themes/comonStyles";

const ProfileSetting = () => {
  return (
    <Box sx={flexCenter}>
      <Stack>
        <Button>
          <Button href="#">Become a Host</Button>
          <BsGlobe size={24} />
        </Button>
      </Stack>

      <Stack justifyContent="flex-end">
        <Button sx={{ boderRadius: 10, border: "1px solid #ddd" }}>
          <FaRegUserCircle size={24} />
          <Link style={authButton} to="/login">
            Login
          </Link>
        </Button>
        <Button sx={{ boderRadius: 10, border: "1px solid #ddd" }}>
          <FaUserPlus size={24} />
          <Link style={authButton} to="/sign-up">
            Sign Up
          </Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSetting;
