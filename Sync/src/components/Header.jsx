import Clock from "../../assets/clock.svg";
import Login from "./Login";
import { Link, NavLink } from "react-router-dom";
import SignUpFree from "./SignUpFree";

export default () => {
  return (
    <div className="header">
      <div>
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <div className="rock-salt-regular">
            <img src={Clock} className="clock-logo" />.
            <img src={Clock} className="clock-logo" /> Sync
          </div>
        </NavLink>
      </div>
      <div className="menu">
        <div>
          <NavLink
            to="features"
            style={{
              textDecoration: "none",
            }}
          >
            Features
          </NavLink>
        </div>

        <div>
          <NavLink
            to="events"
            style={{
              textDecoration: "none",
            }}
          >
            Events
          </NavLink>
        </div>
        <div>
          <NavLink
            to="about"
            style={{
              textDecoration: "none",
            }}
          >
            About Sync
          </NavLink>
        </div>
      </div>
      <div className="auth-options">
        <Login />
        <SignUpFree />
      </div>
    </div>
  );
};
