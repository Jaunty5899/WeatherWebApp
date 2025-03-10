import "./SunPhase.css";
import Dial from "./Dial";

export default function SunPhase({ sunrise, sunset, datetime }) {
  const sunRiseArr = sunrise.split(":");
  const sunSetArr = sunset.split(":");
  return (
    <div className="table sunContainer">
      <div className="sunLaneScape">
        <h3 className="sunriseSunset">SUNRISE & SUNSET</h3>
        <Dial sunrise={sunrise} sunset={sunset} datetime={datetime} />
      </div>
      <span className="time sunRiseTime">{`${parseInt(sunRiseArr[0])}:${
        sunRiseArr[1]
      } AM`}</span>
      <span className="time sunSetTime">{`${sunSetArr[0] - 12}:${
        sunSetArr[1]
      } PM`}</span>
    </div>
  );
}
