import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  FaSearch,
  FaRegHeart,
  FaRegUserCircle,
  FaUserPlus,
} from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { logout } from "../../../slices/auth";
import { Avatar } from "@mui/material";
import { authButton } from "../../../themes/comonStyles";

const FooterMenu = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleUser = () => {
    return <Navigate to="/user-profile" />;
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
      <Stack>
        {Object.keys(currentUser).length ? (
          <Button onClick={handleUser}>
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
              direction="column"
              spacing={1}
            >
              <Avatar
                src={currentUser.avatar ? currentUser.avatar : null}
                sx={{ mr: 1, width: 18, height: 18 }}
              />
              <Typography>{currentUser.user?.name}</Typography>
            </Stack>
          </Button>
        ) : (
          <Button>
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
              direction="column"
              spacing={1}
            >
              <FaRegUserCircle size={18} />
              <Link style={authButton} to="/login">
                Login
              </Link>
            </Stack>
          </Button>
        )}

        {Object.keys(currentUser).length ? (
          <Button onClick={handleLogout}>
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
              direction="column"
              spacing={1}
            >
              <GrLogout size={24} />
              Logout
            </Stack>
          </Button>
        ) : (
          <Button>
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
              direction="column"
              spacing={1}
            >
              <FaUserPlus size={18} />
              <Link style={authButton} to="/sign-up">
                Sign Up
              </Link>
            </Stack>
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default FooterMenu;
