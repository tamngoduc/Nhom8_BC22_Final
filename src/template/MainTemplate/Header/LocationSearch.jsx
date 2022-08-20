import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { FaSearch } from "react-icons/fa";

const LocationSearch = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        border: "1px solid #ccc",
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where to go"></InputBase>
      <IconButton sx={{ p: "10px" }}>
        <FaSearch />
      </IconButton>
    </Paper>
  );
};

export default LocationSearch;
