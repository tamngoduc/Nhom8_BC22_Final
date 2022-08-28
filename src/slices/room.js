import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomAPI from "../services/roomAPI";

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

  updatedRoomResponse: {},
  isUpdatedRoomResponseLoading: false,
  updatedRoomError: null,

  deletedRoomResponse: {},
  isDeletedRoomResponseLoading: false,
  deletedRoomError: null,

  uploadedRoomImageResponse: {},
  isUploadedRoomImageResponseLoading: false,
  uploadedRoomImageError: null,

  createdRoomResponse: {},
  isCreatedRoomResponseLoading: false,
  createdRoomResponseError: null,
};

export const getRoomsList = createAsyncThunk(
  "room/getRoomsList",
  async (locationId) => {
    try {
      const data = await roomAPI.getRoomsList(locationId);
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

export const updateRoom = createAsyncThunk(
  "room/updateRoom",
  async (roomId, room) => {
    try {
      const data = await roomAPI.updateRoom(roomId, room);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteRoom = createAsyncThunk(
  "room/deleteRoom",
  async (roomId) => {
    try {
      const data = await roomAPI.deleteRoom(roomId);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const uploadRoomImage = createAsyncThunk(
  "room/uploadRoomImage",
  async (roomId, room) => {
    try {
      const data = await roomAPI.uploadRoomImage(roomId, room);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const createRoom = createAsyncThunk("room/createRoom", async (room) => {
  try {
    const data = await roomAPI.createRoom(room);
    return data;
  } catch (error) {
    throw error;
  }
});

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

    builder.addCase(updateRoom.pending, (state) => {
      return {
        ...state,
        isUpdatedRoomResponseLoading: true,
        updatedRoomError: null,
      };
    });
    builder.addCase(updateRoom.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isUpdatedRoomResponseLoading: false,
        updatedRoomResponse: payload,
      };
    });
    builder.addCase(updateRoom.rejected, (state, { error }) => {
      return {
        ...state,
        isUpdatedRoomResponseLoading: false,
        updatedRoomError: error.message,
      };
    });

    builder.addCase(deleteRoom.pending, (state) => {
      return {
        ...state,
        isDeletedRoomResponseLoading: true,
        deletedRoomError: null,
      };
    });
    builder.addCase(deleteRoom.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isDeletedRoomResponseLoading: false,
        deletedRoomResponse: payload,
      };
    });
    builder.addCase(deleteRoom.rejected, (state, { error }) => {
      return {
        ...state,
        isDeletedRoomResponseLoading: false,
        deletedRoomError: error.message,
      };
    });

    builder.addCase(uploadRoomImage.pending, (state) => {
      return {
        ...state,
        isUploadedRoomImageResponseLoading: true,
        uploadedRoomImageError: null,
      };
    });
    builder.addCase(uploadRoomImage.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isUploadedRoomImageResponseLoading: false,
        uploadedRoomImageResponse: payload,
      };
    });
    builder.addCase(uploadRoomImage.rejected, (state, { error }) => {
      return {
        ...state,
        isUploadedRoomImageResponseLoading: false,
        uploadedRoomImageError: error.message,
      };
    });

    builder.addCase(createRoom.pending, (state) => {
      return {
        ...state,
        isCreatedRoomResponseLoading: true,
        createdRoomResponseError: null,
      };
    });
    builder.addCase(createRoom.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isCreatedRoomResponseLoading: false,
        createdRoomResponse: payload,
      };
    });
    builder.addCase(createRoom.rejected, (state, { error }) => {
      return {
        ...state,
        isCreatedRoomResponseLoading: false,
        createdRoomResponseError: error.message,
      };
    });
  },
});

export default roomSlice.reducer;
