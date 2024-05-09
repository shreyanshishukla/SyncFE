import useHomeCalendarData from "../utils/hooks/useHomeCalendarData";
import ArrayToDiv from "./ArrayToDiv";
import CalendarElement from "./CalendarElement";

export default () => {
  const { colors, days, dates } = useHomeCalendarData();

  return (
    <div className="homepage-right">
      <div>
        <div className="homepage-time">
          <div className="time-data">12</div>
          <div className="time-colon">:</div>
          <div className="time-data">00</div>
          <div className="time-colon">:</div>

          <div className="time-data">PM</div>
        </div>
        <div className="homepage-calendar">
          <div className="calendar-rows">
            <ArrayToDiv arr={days} Component={CalendarElement} />
          </div>

          <ArrayToDiv
            arr={dates}
            Component={CalendarElement}
            eleClass="calendar-element-hover"
          />
        </div>
      </div>
    </div>
  );
};
