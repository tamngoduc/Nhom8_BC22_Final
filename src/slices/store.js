import { configureStore } from "@reduxjs/toolkit";
import location from "./location";
import auth from "./auth";
import room from "./room";

const store = configureStore({
  reducer: {
    location,
    auth,
    room,
  },
});

export default store;
