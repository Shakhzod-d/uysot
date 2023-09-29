import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type TypeStore = ReturnType<typeof store.getState>;
