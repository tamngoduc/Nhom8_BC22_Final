import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// react icons
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { flexCenter } from "../../Theme/ComonStyles";
const ProfileSetting = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#">Become a Host</Link>
      <Stack>
        <Button>
          <BsGlobe size={24} />
        </Button>
        <Button sx={{ boderRadius: 10, border: "1px solid #ddd" }}>
          <BsGlobe size={24} />
          <Stack>
            <AiOutlineMenu size={24} />
            <FaRegUserCircle size={24} />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSetting;
