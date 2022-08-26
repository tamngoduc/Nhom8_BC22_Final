import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketAPI from "../services/ticketAPI";

const initialState = {
  ticketsList: [],
  isTicketsListLoading: false,
  ticketsListError: null,
};

export const getTicketsList = createAsyncThunk(
  "ticket/getTicketsList",
  async (userId) => {
    try {
      const data = await ticketAPI.getTickets(userId);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTicketsList.pending, (state) => {
      return { ...state, isTicketsListLoading: true, ticketsListError: null };
    });
    builder.addCase(getTicketsList.fulfilled, (state, { payload }) => {
      return { ...state, isTicketsListLoading: false, ticketsList: payload };
    });
    builder.addCase(getTicketsList.rejected, (state, { error }) => {
      return {
        ...state,
        isTicketsListLoading: false,
        ticketsListError: error.message,
      };
    });
  },
});

export default ticketSlice.reducer;
