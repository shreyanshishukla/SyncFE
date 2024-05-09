import { useDispatch, useSelector } from "react-redux";
import { closeAuthModal } from "../utils/slices/authSlice";
import close from "../../assets/close.png";
export default () => {
  const showModal = useSelector((data) => data.auth["sign-inInitiated"]);
  const dispatcher = useDispatch();
  if (showModal)
    return (
      <div className="signup-modal">
        <h2>Register Yourself with Sync</h2>
        <div>
          {" "}
          <label className="auth-label">Email</label>
          <input type="email" className="auth-input" />
        </div>
        <div>
          {" "}
          <label className="auth-label">Your name</label>
          <input type="text" className="auth-input" />
        </div>
        <div>
          {" "}
          <label className="auth-label">Username</label>
          <input type="text" className="auth-input" />
        </div>
        <div>
          {" "}
          <label className="auth-label">Password</label>
          <input type="password" className="auth-input" />
        </div>

        <button onClick={() => dispatcher(closeAuthModal())} className="close">
          <img src={close} />
        </button>
        <button className="btn">Register</button>
      </div>
    );
  return null;
};
