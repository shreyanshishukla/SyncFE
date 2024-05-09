import { useDispatch, useSelector } from "react-redux";
import { signup } from "../utils/slices/authSlice";
export default () => {
  const dispatcher = useDispatch();
  const data = useSelector((data) => data.auth);

  return (
    <button
      className="sign-up noto-sans-font"
      onClick={() => {
        dispatcher(signup());
      }}
      disabled={data["sign-inInitiated"] || data.loginInitiated}
    >
      Sign up free
      <div className="sign-up-arrow">{">"}</div>
    </button>
  );
};
