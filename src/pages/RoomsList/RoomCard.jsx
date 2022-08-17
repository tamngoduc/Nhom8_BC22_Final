import React from "react";
import { Box, Typography } from "@mui/material";
import Pluralize from "react-pluralize";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { flexBetween, dFlex, carouselImage } from "../../themes/comonStyles";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flexGrow: 1,
        cursor: "pointer",
        "&:hover": { opacity: 0.8 },
      }}
      onClick={() => navigate(`/room/${room._id}`)}
    >
      <Box
        component="img"
        src={room.image}
        alt={room.name}
        sx={carouselImage}
      />
      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">{room.name}</Typography>
          <Typography variant="subtitle2">
            <Pluralize singular={"guest"} count={room.guests} />
            <span> - </span>
            <Pluralize singular={"bed room"} count={room.bedRoom} />
            <span> - </span>
            <Pluralize singular={"bath"} count={room.bath} />
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            {room.price} VND Night
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
            <React.Fragment>
              <Typography> {room.locationId.valueate}</Typography>
              <AiFillStar size={18} />
            </React.Fragment>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RoomCard;