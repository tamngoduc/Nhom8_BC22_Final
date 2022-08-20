import React from "react";

import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import { location as cardLocations } from "../../../data/fakeApiforHome";

// mui icons
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// 3rd party

// react icons
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import {
  flexBetween,
  dFlex,
  carouselDot,
  fixedIcon,
  carouselImage,
  fixedBottom,
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

      <Box axis={"x"} enableMouseEvents>
        <Box
          borderRadius="solid 2px"
          width="100%"
          component="img"
          src={location.locationImages}
        ></Box>
      </Box>

      <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ backgroundColor: "transparent" }}
          position="static"
          nextButton={
            <Button size="small" sx={carouselDot}>
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" sx={carouselDot}>
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Box>

      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography component="h3"> {location.location}</Typography>
          <Typography component="h4"> {location.days}</Typography>
          <Typography component="h5"> {location.price}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
            {location.isNew ? (
              <React.Fragment>
                <Typography component="h5">New</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography component="h5"> {location.rating}</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselCard;
