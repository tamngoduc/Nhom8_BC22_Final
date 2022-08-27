import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { BsGlobe } from "react-icons/bs";
import { FaRegUserCircle, FaUserPlus } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { Link, Navigate } from "react-router-dom";
import { authButton, flexCenter } from "../../../themes/comonStyles";
import { Avatar } from "@mui/material";
import { logout } from "../../../slices/auth";

const ProfileSetting = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleUser = () => {
    return <Navigate to="/user-profile" />;
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={flexCenter}>
      <Stack>
        <Button>
          <Button href="#">Become a Host</Button>
          <BsGlobe size={24} />
        </Button>
      </Stack>

      <Stack justifyContent="flex-end">
        {Object.keys(currentUser).length ? (
          <Button onClick={handleUser}>
            <Avatar
              src={currentUser.avatar ? currentUser.avatar : null}
              sx={{ mr: 1 }}
            />
            <Typography>{currentUser.user?.name}</Typography>
          </Button>
        ) : (
          <Button sx={{ boderRadius: 10, border: "1px solid #ddd" }}>
            <FaRegUserCircle size={24} />
            <Link style={authButton} to="/login">
              Login
            </Link>
          </Button>
        )}

        {Object.keys(currentUser).length ? (
          <Button
            sx={{ boderRadius: 10, border: "1px solid #ddd" }}
            onClick={() => dispatch(logout())}
          >
            <GrLogout size={24} />
            Logout
          </Button>
        ) : (
          <Button sx={{ boderRadius: 10, border: "1px solid #ddd" }}>
            <FaUserPlus size={24} />
            <Link style={authButton} to="/sign-up">
              Sign Up
            </Link>
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default ProfileSetting;
