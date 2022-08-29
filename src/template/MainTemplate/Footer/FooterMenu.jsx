import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaRegUserCircle, FaUserPlus } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../slices/auth";
import { Avatar } from "@mui/material";
import { authButton } from "../../../themes/comonStyles";

const FooterMenu = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
      <Stack>
        {Object.keys(currentUser).length ? (
          <Button onClick={() => navigate("/account")}>
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
              direction="column"
              spacing={0}
            >
              <Avatar
                src={currentUser.avatar ? currentUser.avatar : null}
                sx={{ width: 18, height: 18 }}
              />
              <Typography>{currentUser.user?.name}</Typography>
            </Stack>
          </Button>
        ) : (
          <Button onClick={() => navigate("/login")}>
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
              direction="column"
              spacing={0}
            >
              <FaRegUserCircle size={18} />
              <Typography>Login</Typography>
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
              spacing={0}
            >
              <GrLogout size={24} />
              <Typography>Logout</Typography>
            </Stack>
          </Button>
        ) : (
          <Button onClick={() => navigate("/sign-up")}>
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
              direction="column"
              spacing={0}
            >
              <FaUserPlus size={18} />
              <Typography>Sign Up</Typography>
            </Stack>
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default FooterMenu;
