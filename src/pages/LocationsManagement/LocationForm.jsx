import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const LocationForm = () => {
  const { locationDetails, isLocationDetailsLoading, locationDetailsError } =
    useSelector((state) => state.location);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
  } = useForm({ defaultValues: {}, mode: "onTouched" });

  return (
    <Box>
      <form></form>
    </Box>
  );
};

export default LocationForm;
