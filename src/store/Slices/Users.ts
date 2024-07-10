import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UsersSlicesState = {
  islogin: boolean;
  category: string;
};

function gettheislogin(): boolean {
  let islogin =
    (JSON.parse(localStorage.getItem("islogin") as string) as boolean) || false;
  return islogin;
}
const usersSlice = createSlice({
  name: "users",
  initialState: {
    islogin: gettheislogin(),
    category: "",
  } as UsersSlicesState,
  reducers: {
    onuserlogin: (state, action: PayloadAction<boolean>) => {
      state.islogin = action.payload;
      localStorage.setItem("islogin", JSON.stringify(true));
    },
    onuserlogout: (state, action: PayloadAction<boolean>) => {
      state.islogin = action.payload;
      localStorage.removeItem("islogin");
    },
    setthecategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { onuserlogin, onuserlogout, setthecategory } = usersSlice.actions;
export default usersSlice.reducer;
