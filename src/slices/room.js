import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomAPI from "services/roomAPI";

const initialState = {
  roomsList: [],
  isRoomsListLoading: false,
  roomsListError: null,

  roomDetails: {},
  isRoomDetailsLoading: false,
  roomDetailsError: null,

  bookingResponse: {},
  isBookingResponseLoading: false,
  bookingResponseError: null,
};

export const getRoomsList = createAsyncThunk(
  "room/getRoomsList",
  async (roomId) => {
    try {
      const data = await roomAPI.getRoomsList(roomId);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getRoomDetails = createAsyncThunk(
  "room/getRoomDetails",
  async (roomId) => {
    try {
      const data = await roomAPI.getRoomDetails(roomId);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const bookRoom = createAsyncThunk(
  "room/bookRoom",
  async (bookingData) => {
    try {
      const data = await roomAPI.bookRoom(bookingData);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoomsList.pending, (state) => {
      return { ...state, isRoomsListLoading: true, roomsListError: null };
    });
    builder.addCase(getRoomsList.fulfilled, (state, { payload }) => {
      return { ...state, isRoomsListLoading: false, roomsList: payload };
    });
    builder.addCase(getRoomsList.rejected, (state, { error }) => {
      return {
        ...state,
        isRoomsListLoading: false,
        roomsListError: error.message,
      };
    });

    builder.addCase(getRoomDetails.pending, (state) => {
      return { ...state, isRoomDetailsLoading: true, roomDetailsError: null };
    });
    builder.addCase(getRoomDetails.fulfilled, (state, { payload }) => {
      return { ...state, isRoomDetailsLoading: false, roomDetails: payload };
    });
    builder.addCase(getRoomDetails.rejected, (state, { error }) => {
      return {
        ...state,
        isRoomDetailsLoading: false,
        roomDetailsError: error.message,
      };
    });

    builder.addCase(bookRoom.pending, (state) => {
      return {
        ...state,
        isBookingResponseLoading: true,
        bookingResponseError: null,
      };
    });
    builder.addCase(bookRoom.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isBookingResponseLoading: false,
        bookingResponse: payload,
      };
    });
    builder.addCase(bookRoom.rejected, (state, { error }) => {
      return {
        ...state,
        isBookingResponseLoading: false,
        bookingResponseError: error.message,
      };
    });
  },
});

export default roomSlice.reducer;
