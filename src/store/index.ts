import { configureStore } from "@reduxjs/toolkit";
import user from "./Slices/Users";
import quizes from "./Slices/Quizes";
import Timer from "./Slices/Timer";

const store = configureStore({
  reducer: {
    user,
    quizes,
    Timer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
