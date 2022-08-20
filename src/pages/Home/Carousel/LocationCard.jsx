import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { locations as cardLocations } from "../../../data/fakeApiforHome";
import CarouselCard from "./CarouselCard";

const LocationCard = () => {
  const [cards] = React.useState(cardLocations);
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              spacing={3}
              key={location.id}
            >
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCard;
