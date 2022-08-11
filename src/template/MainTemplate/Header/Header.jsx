import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "./Logo";
import LocationSearch from "./LocationSearch";
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from "../../Theme/ComonStyles";
import ProfileSetting from "./ProfileSetting";
import MobileSearch from "./MobileSearch";
const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          {/* normal header */}
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <LocationSearch />
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSetting />
          </Box>
          {/*  searchBar responsive header */}
          <Box sx={{ display: { sx: "flex", md: "none" } }}>
            <MobileSearch />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
