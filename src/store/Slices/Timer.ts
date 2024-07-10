import { createSlice } from "@reduxjs/toolkit";

type TimeSlicesTypes = {
  isfinish: boolean;
  min: number;
  sec: number;
};

const initialState: TimeSlicesTypes = {
  isfinish: JSON.parse(localStorage.getItem("isfinish") as string) || false,
  min: JSON.parse(localStorage.getItem("min") as string) || 1,
  sec: JSON.parse(localStorage.getItem("sec") as string) || 0,
};

const TimeSlices = createSlice({
  name: "timer",
  initialState,
  reducers: {
    ontimestop: (state) => {
      state.isfinish = true;
      localStorage.setItem("isfinish", JSON.stringify(true));
    },
    onminlose: (state) => {
      state.min -= 1;
      state.sec = 59;
      localStorage.setItem("min", JSON.stringify(state.min));
      localStorage.setItem("sec", JSON.stringify(state.sec));
    },
    onseclose: (state) => {
      if (state.sec > 0) {
        state.sec -= 1;
      } else if (state.min > 0) {
        state.min -= 1;
        state.sec = 59;
      }
      localStorage.setItem("min", JSON.stringify(state.min));
      localStorage.setItem("sec", JSON.stringify(state.sec));
    },
  },
});

export const { onminlose, onseclose, ontimestop } = TimeSlices.actions;

export default TimeSlices.reducer;
