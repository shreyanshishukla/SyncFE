import { useSelector, useDispatch } from "react-redux";
import { closeAuthModal, loginCompleted } from "../utils/slices/authSlice";
import close from "../../assets/close.png";
import { useRef } from "react";
import { request } from "../utils/axiosHelper";

export default () => {
  const showModal = useSelector(
    (data) => data.auth.loginInitiated && !data.auth.loggedIn
  );
  const dispatcher = useDispatch();
  const userName = useRef();
  const password = useRef();
  const login = () => {
    if (
      request("POST", "/auth/login", {
        username: userName.current.value,
        password: password.current.value,
      })
    ) {
      dispatcher(loginCompleted());
    }
  };
  if (showModal)
    return (
      <div className="login-modal">
        <h2>Login to sync</h2>
        <div>
          <label className="auth-label">Email or Username</label>
          <input type="text" className="auth-input" ref={userName} />
        </div>

        <div>
          <label className="auth-label">Password</label>
          <input type="password" className="auth-input" ref={password} />
        </div>

        <button onClick={() => dispatcher(closeAuthModal())} className="close">
          <img src={close} />
        </button>
        <button className="btn" onClick={login}>
          Login
        </button>
      </div>
    );
  return null;
};
