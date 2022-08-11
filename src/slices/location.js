import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import locationAPI from "../services/locationAPI";

const initialState = {
  locationsList: [],
  isLocationsListLoading: false,
  locationsListError: null,
};

export const getLocationsList = createAsyncThunk(
  "location/getLocationsList",
  async (location) => {
    try {
      const data = await locationAPI.getLocationsList(location);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getLocationsList.pending, (state) => {
      return {
        ...state,
        isLocationsListLoading: true,
        locationsListError: null,
      };
    });
    builder.addCase(getLocationsList.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isLocationsListLoading: false,
        locationsList: payload,
      };
    });
    builder.addCase(getLocationsList.rejected, (state, { error }) => {
      return {
        ...state,
        isLocationsListLoading: false,
        locationsListError: error.message,
      };
    });
  },
});

export default locationSlice.reducer;
