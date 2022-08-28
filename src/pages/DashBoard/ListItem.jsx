import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="User Manager" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HomeRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Room Manager" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocationOnRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Location Manager" />
    </ListItemButton>
  </React.Fragment>
);
