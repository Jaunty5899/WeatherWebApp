import "./SunPhase.css";
import Dial from "./Dial";

export default function SunPhase({ sunrise, sunset, datetime }) {
  return (
    <div className="table sunContainer">
      <div className="sunLaneScape">
        <h3 className="sunriseSunset">SUNRISE & SUNSET</h3>
        <Dial sunrise={sunrise} sunset={sunset} datetime={datetime} />
        <hr />
      </div>
      <span className="time sunRiseTime">6:30AM</span>
      <span className="time sunSetTime">6:30PM</span>
    </div>
  );
}
