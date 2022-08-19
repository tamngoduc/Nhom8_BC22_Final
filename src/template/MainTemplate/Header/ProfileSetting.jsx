import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// react icons
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { flexCenter } from "../../../themes/comonStyles";
import LoginIcon from "@mui/icons-material/Login";

const ProfileSetting = () => {
  return (
    <Box sx={flexCenter}>
      <Stack>
        <Button>
          <Link href="#">Become a Host</Link>
          <BsGlobe size={24} />
        </Button>
      </Stack>

      <Stack justifyContent="flex-end">
        <Button sx={{ boderRadius: 10, border: "1px solid #ddd" }}>
          <FaRegUserCircle size={24} />
          <Link sx={{ fontSize: "15px" }} href="#">
            Đăng nhập
          </Link>
        </Button>
        <Button sx={{ boderRadius: 10, border: "1px solid #ddd" }}>
          <FaRegUserCircle size={24} />
          <Link sx={{ fontSize: "15px" }} href="#">
            Đăng kí
          </Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSetting;
