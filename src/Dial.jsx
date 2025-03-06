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
  // console.log(angle);

  const timeToDegrees = () => {
    const degrees = ([(currentSeconds / sunsetSeconds) * 100] / 100) * 180 - 90;
    if (degrees > 90) {
      return 90;
    } else if (currentSeconds == 0) {
      return -90;
    } else {
      return degrees;
    }
  };

  setTimeout(() => {
    setAngle(timeToDegrees);
    console.log(angle, sunset);
  }, 1000);
  return (
    <div
      className="circle"
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <img src={sun} />
    </div>
  );
}
