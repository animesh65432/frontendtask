import { createSlice } from "@reduxjs/toolkit";
import { quizes } from "../../utils";

type QuizType = {
  question: string;
  A: string;
  B: string;
  C: string;
  D: string;
  answer: string;
};

type QuizesState = {
  value: QuizType[];
  answer: string;
  index: number;
  quizes: QuizType;
};

const initialState: QuizesState = {
  value: quizes,
  answer: quizes[0].answer,
  index: 0,
  quizes: quizes[0],
};

const quizesSlice = createSlice({
  name: "quizes",
  initialState,
  reducers: {
    prevPage: (state) => {
      state.index =
        state.index === 0 ? state.value.length - 1 : state.index - 1;
      state.quizes = state.value[state.index];
      state.answer = state.value[state.index].answer;
    },
    nextPage: (state) => {
      state.index =
        state.index === state.value.length - 1 ? 0 : state.index + 1;
      state.quizes = state.value[state.index];
      state.answer = state.value[state.index].answer;
    },
  },
});

export const { prevPage, nextPage } = quizesSlice.actions;
export default quizesSlice.reducer;
