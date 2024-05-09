import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    loginInitiated: false,
    "sign-inInitiated": false,
    loggedIn: false,
  },
  reducers: {
    login(state) {
      state.loginInitiated = true;
      state["sign-inInitiated"] = false;
    },
    signup(state) {
      state.loginInitiated = false;
      state["sign-inInitiated"] = true;
    },
    loginCompleted(state) {
      state.loggedIn = true;
      state.loginInitiated = false;
      state["sign-inInitiated"] = false;
    },
    closeAuthModal(state) {
      state.loginInitiated = false;
      state["sign-inInitiated"] = false;
    },
  },
});

export default authSlice.reducer;
export const { login, signup, closeAuthModal, loginCompleted } =
  authSlice.actions;
