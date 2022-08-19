import { configureStore } from "@reduxjs/toolkit";
import location from "./location";
import auth from "./auth";
import room from "./room";
import user from "./user";

const store = configureStore({
  reducer: {
    location,
    auth,
    room,
    user,
  },
});

export default store;
