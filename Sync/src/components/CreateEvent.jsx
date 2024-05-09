import { useRef } from "react";
import { request } from "../utils/axiosHelper";

export default () => {
  const submitForm = (e) => {
    e.preventDefault();

    let data = {
      eventName: eventName.current.value,
      eventType: eventTypeOffine ? "OFFLINE" : "ONLINE",
      startDate: eventStartDate.current.value.toString().replace("T", " "),
      endDate: eventEndDate.current.value.toString().replace("T", " "),
    };
    if (eventDescription.current.value != null) {
      data = { ...data, eventDescription: eventDescription.current.value };
    }
    request("POST", "events/add", data);
  };
  const eventName = useRef();
  const eventStartDate = useRef();
  const eventEndDate = useRef();
  const eventDescription = useRef();
  const eventTypeOnline = useRef();
  const eventTypeOffine = useRef();

  return (
    <div className="create-event-wrapper">
      <form onSubmit={(e) => submitForm(e)}>
        <div>
          <label>Event Name</label>
          <input type="text" required ref={eventName} />
        </div>
        <div>
          <label>Start Date and Time</label>
          <input type="datetime-local" required ref={eventStartDate} />
        </div>
        <div>
          <label>End Date and Time</label>
          <input type="datetime-local" required ref={eventEndDate} />
        </div>{" "}
        <div>
          <label>Event Type</label>
          <input
            type="radio"
            name="eventType"
            value="offline"
            required
            ref={eventTypeOffine}
          />
          <label>Offline</label>
          <input
            type="radio"
            name="eventType"
            value="online"
            defaultChecked
            required
            ref={eventTypeOnline}
          />
          <label>Online</label>
        </div>{" "}
        <div>
          <label>Event Description</label>
          <textarea type="text" ref={eventDescription} />
        </div>
        <button className="btn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};
