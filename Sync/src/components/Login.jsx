import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../utils/slices/authSlice";
export default () => {
  const data = useSelector((data) => data.auth);
  const dispather = useDispatch();

  return (
    <button
      className="login-btn noto-sans-font"
      onClick={() => {
        dispather(login());
      }}
      disabled={data["sign-inInitiated"] || data.loginInitiated}
    >
      Login
    </button>
  );
};
