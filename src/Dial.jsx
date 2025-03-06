import { useState } from "react";
import sun from "./assets/sun.svg";
import "./Dial.css";

const convertTimeToSeconds = (time) => {
  const timeArray = time.split(":");
  return parseInt(timeArray[0]) * 3600 + parseInt(timeArray[1]) * 60;
};

export default function Dial({ sunrise, sunset }) {
  const [angle, setAngle] = useState(0);
  const sunriseSeconds = convertTimeToSeconds(sunrise);
  const sunsetSeconds = convertTimeToSeconds(sunset);
  const currentTime = new Date();
  const currentSeconds =
    currentTime.getHours() * 3600 + currentTime.getMinutes() * 60;
  // console.log(currentSeconds, sunriseSeconds, sunsetSeconds, sunset);
  // console.log(timeToDegrees);

  const timeToDegrees = () => {
    return ([(currentSeconds / sunsetSeconds) * 100] / 100) * 180 - 90;
  };

  setTimeout(() => {
    setAngle(timeToDegrees);
  }, 1000);
  return (
    <div
      className="circle"
      style={{
        transform: `rotate(${currentSeconds == sunsetSeconds ? 90 : angle}deg)`,
      }}
    >
      <img src={sun} />
    </div>
  );
}
