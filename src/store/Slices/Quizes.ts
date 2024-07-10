import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  result: number[];
  nodepad: string;
  istestcomplete: boolean;
};

type Submitheanswertypes = {
  question: string;
  answer: string;
};

const initialState: QuizesState = {
  value: quizes,
  answer: quizes[0].answer,
  index: 0,
  quizes: quizes[0],
  result: [],
  nodepad: "",
  istestcomplete:
    false || JSON.parse(localStorage.getItem("istestcomplete") as string),
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
    submittheanswer: (state, action: PayloadAction<Submitheanswertypes>) => {
      state.result = state.value.map((obj) =>
        obj.question === action.payload.question &&
        obj.answer === action.payload.answer
          ? 1
          : 0
      );
    },
    getthenode: (state, action: PayloadAction<string>) => {
      state.nodepad = action.payload;
    },
    donewiththetest: (state) => {
      state.istestcomplete = true;
      localStorage.setItem("istestcomplete", JSON.stringify(true));
    },
  },
});

export const {
  prevPage,
  nextPage,
  submittheanswer,
  getthenode,
  donewiththetest,
} = quizesSlice.actions;
export default quizesSlice.reducer;
