import { useEffect, useState } from "react";
import { request } from "../utils/axiosHelper";
import ArrayToDiv from "./ArrayToDiv";
import { NavLink } from "react-router-dom";
import down from "../../assets/down.png";
import up from "../../assets/up.png";

export default () => {
  const [schedules, setSchedules] = useState([]);
  const [renderFull, setRenderFull] = useState();

  useEffect(() => {
    const data = new FormData();
    request("GET", "events/getAllEvents", {}).then((res) => {
      setSchedules(res.data ?? []);
    });
  }, []);
  return (
    <div className="schedule-wrapper">
      <div className="schedule-title">This is your schedule</div>
      <div className="schedules">
        <ArrayToDiv
          Component={event}
          arr={schedules}
          setstates={{
            setRenderFull,
          }}
          states={{
            renderFull,
          }}
        />
      </div>
    </div>
  );
};
const event = ({ value, index, setstates, states }) => {
  const expand = (i) => {
    if (states.renderFull != i + 1) setstates.setRenderFull(i + 1);
    else setstates.setRenderFull(0);
  };
  const deleteEvent = (id) => {
    request("DELETE", "events/delete/" + id, {});
  };
  return (
    <div className="event-data" onClick={() => expand(index)}>
      <div className="event-name">{value.eventName}</div>
      <div className="down">
        <img src={states.renderFull != index + 1 ? down : up} />
      </div>
      <div className="row-flex">
        <div className="event-date">
          <div>Starts at </div>
          {"  " + value.startDate}
        </div>
        <div className="event-date">
          <div>Ends at </div>
          {"  " + value.endDate}
        </div>
        <div className="event-type">{value.eventType}</div>
      </div>

      {states.renderFull == index + 1 && (
        <div className="full-render">
          {value.eventDescription && (
            <div className="event-description">{value.eventDescription}</div>
          )}
          <button onClick={() => deleteEvent(value.id)}>Delete</button>
          <button>Update</button>
        </div>
      )}
    </div>
  );
};
