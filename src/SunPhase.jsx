import "./SunPhase.css";
import Dial from "./Dial";

export default function SunPhase({ sunrise, sunset }) {
  return (
    <div className="table sunContainer">
      <div className="sunLaneScape">
        <h3 className="sunriseSunset">SUNRISE & SUNSET</h3>
        <Dial sunrise={sunrise} sunset={sunset} />
      </div>
    </div>
  );
}
