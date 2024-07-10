import { configureStore } from "@reduxjs/toolkit";
import user from "./Slices/Users";
import quizes from "./Slices/Quizes";

const store = configureStore({
  reducer: {
    user,
    quizes,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
