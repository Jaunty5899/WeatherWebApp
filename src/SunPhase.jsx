import "./SunPhase.css";
import Dial from "./Dial";

export default function SunPhase() {
  return (
    <div className="table sunLaneScape">
      <h3 className="sunriseSunset">SUNRISE & SUNSET</h3>
      <Dial />
      {/* <img src={sun} /> */}
    </div>
  );
}
