import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { BsGlobe } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { flexCenter } from "../../../themes/comonStyles";
import { Link } from "react-router-dom";

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
          <Link sx={{ fontSize: "15px" }} href="#">
            Login
          </Link>
        </Button>
        <Button sx={{ boderRadius: 10, border: "1px solid #ddd" }}>
          <FaUserPlus size={24} />
          <Link sx={{ fontSize: "15px" }} href="#">
            Sign Up
          </Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSetting;
