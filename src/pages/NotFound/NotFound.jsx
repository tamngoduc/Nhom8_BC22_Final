import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Box
    sx={{
      height: "100vh",
      backgroundImage: `url("https://img.freepik.com/free-vector/error-404-page-found-confused-characters_107791-13163.jpg?w=1800&t=st=1661428420~exp=1661429020~hmac=0916ee29e3f5ead752e39792cf63372b4a97b5f5c3ce1638eb485443ea411403")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      position: "relative",
      margin: "auto",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontWeight: "bold",
      }}
    >
      <Link to="/">Go Home</Link>
    </Box>
  </Box>
);

export default NotFound;
