import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import {
  flexBetween,
  dFlex,
  fixedIcon,
  carouselImage,
} from "../../../themes/comonStyles";
import "./CarouselCard.css";
const CarouselCard = ({ location }) => {
  return (
    <Box
      className="carouselCard"
      sx={{
        flexGrow: 1,
        position: "relative",
      }}
    >
      <Box sx={fixedIcon}>
        <FaRegHeart size={24} color="#fff" />
      </Box>

      <Box
        borderRadius="solid 2px"
        width="100%"
        component="img"
        src={location.locationImages}
        sx={carouselImage}
      />

      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography component="h3"> {location.location}</Typography>
          <Typography component="h4"> {location.days}</Typography>
          <Typography component="h5"> {location.price}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
            <React.Fragment>
              <Typography component="h5"> {location.rating}</Typography>
              <AiFillStar size={18} />
            </React.Fragment>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselCard;
