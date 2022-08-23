import React, { Fragment, useState } from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { DateRangePicker } from "@mantine/dates";
import useMediaQuery from "@mui/material/useMediaQuery";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import StarIcon from "@mui/icons-material/Star";
import Pluralize from "react-pluralize";
import theme from "../../../themes/appThemeProvider";
import { dFlex, flexBetween } from "../../../themes/comonStyles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bookRoom } from "../../../slices/room";

const Payment = () => {
  const { roomDetails } = useSelector((state) => state.room);
  const { reviewsList } = useSelector((state) => state.review);
  const [dateRange, setDateRange] = useState([null, null]);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const date1 = new Date(dateRange[0]).getTime();
  const date2 = new Date(dateRange[1]).getTime();
  const gap = date2 && date1 ? (date2 - date1) / (1000 * 3600 * 24) : null;
  const total = gap * roomDetails.price;
  const bookingData = {
    roomId: roomDetails._id,
    checkIn: dateRange[0] ? new Date(dateRange[0]).toISOString() : null,
    checkOut: dateRange[1] ? new Date(dateRange[1]).toISOString() : null,
  };
  const dispatch = useDispatch();
  const handleBooking = (bookingData) => {
    dispatch(bookRoom(bookingData));
  };

  return (
    <Paper elevation={12} sx={{ borderRadius: 5 }}>
      <Stack sx={{ ...flexBetween, alignItems: "center", p: 2 }}>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {roomDetails.price} VND night
          </Typography>
        </Box>

        <Box sx={{ ...dFlex, alignItems: "center" }}>
          <StarIcon size={18} />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mr: 1 }}>
            {roomDetails.locationId?.valueate}{" "}
          </Typography>
          <Typography variant="subtitle1" sx={{ textDecoration: "underline" }}>
            (<Pluralize singular={"review"} count={reviewsList.length} />)
          </Typography>
        </Box>
      </Stack>

      <Stack>
        <DateRangePicker
          sx={{ width: "100%" }}
          size="md"
          dropdownType={isMobile ? "modal" : "popover"}
          label="CHECK-IN  -  CHECK-OUT"
          placeholder="Pick dates range"
          icon={<CalendarMonthOutlinedIcon />}
          inputFormat="MM/DD/YYYY"
          value={dateRange}
          onChange={setDateRange}
        />
      </Stack>

      {total ? (
        <Stack sx={{ ...flexBetween, alignItems: "center", p: 2 }}>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ textDecoration: "underline" }}
            >
              {roomDetails.price} VND
              {gap ? (
                <Fragment>
                  <span> x </span>
                  <Pluralize singular={"night"} count={gap} />
                </Fragment>
              ) : null}
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {total} VND
            </Typography>
          </Box>
        </Stack>
      ) : null}

      <Stack>
        <Button
          variant="contained"
          fullWidth
          size="large"
          color="error"
          disabled={total ? false : true}
          onClick={() => handleBooking(bookingData)}
        >
          <Typography variant="h6">Reserve</Typography>
        </Button>
      </Stack>
    </Paper>
  );
};

export default Payment;
