import { useState } from "react";
import Schedule from "./Schedule";
import CreateEvent from "./CreateEvent";

export default () => {
  const [showCreateDailouge, setShowCreateDailouge] = useState(false);
  return (
    <div className="events">
      <button
        onClick={() => {
          setShowCreateDailouge(true);
        }}
        className="btn"
      >
        Create a new Event
      </button>
      {showCreateDailouge && <CreateEvent />}
      <Schedule />
    </div>
  );
};
