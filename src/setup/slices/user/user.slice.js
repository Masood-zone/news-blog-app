import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    email: "",
    token: "",
    username: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setUserInfo, logoutUser } = userSlice.actions;

export const selectedUser = (state) => state.user.user;

export default userSlice.reducer;
