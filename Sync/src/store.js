import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./utils/slices/authSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
  },
});
