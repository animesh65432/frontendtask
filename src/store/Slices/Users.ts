import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UsersSlicesState = {
  islogin: boolean;
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
  },
});

export const { onuserlogin, onuserlogout } = usersSlice.actions;
export default usersSlice.reducer;
