import { configureStore } from "@reduxjs/toolkit";
import user from "./Slices/Users";

const store = configureStore({
  reducer: {
    user,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
