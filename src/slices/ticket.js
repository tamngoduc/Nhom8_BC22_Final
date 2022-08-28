import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketAPI from "../services/ticketAPI";

const initialState = {
  ticketsList: [],
  isTicketsListLoading: false,
  ticketsListError: null,

  createdTicketResponse: {},
  isCreatedTicketResponseLoading: false,
  createdTicketResponseError: null,
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

export const createTicket = createAsyncThunk(
  "ticket/createTicket",
  async (ticket) => {
    try {
      const data = await ticketAPI.createTicket(ticket);
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

    builder.addCase(createTicket.pending, (state) => {
      return {
        ...state,
        isCreatedTicketResponseLoading: true,
        createdTicketResponseError: null,
      };
    });
    builder.addCase(createTicket.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isCreatedTicketResponseLoading: false,
        createdTicketResponse: payload,
      };
    });
    builder.addCase(createTicket.rejected, (state, { error }) => {
      return {
        ...state,
        isCreatedTicketResponseLoading: false,
        createdTicketResponseError: error.message,
      };
    });
  },
});

export default ticketSlice.reducer;
