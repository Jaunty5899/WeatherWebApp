import { useState } from "react";
import sun from "./assets/sun.svg";
import "./Dial.css";

const convertTimeToSeconds = (time) => {
  const timeArray = time.split(":");
  return parseInt(timeArray[0]) * 3600 + parseInt(timeArray[1]) * 60;
};

export default function Dial({ sunrise, sunset, datetime }) {
  const [angle, setAngle] = useState(-90);
  const sunriseSeconds = convertTimeToSeconds(sunrise);
  const sunsetSeconds = convertTimeToSeconds(sunset);
  const currentTime = convertTimeToSeconds(datetime);
  // console.log(currentTime);
  // console.log(currentSeconds, sunriseSeconds, sunsetSeconds, sunset);
  // console.log(angle);

  const timeToDegrees = () => {
    const degrees = ([(currentTime / sunsetSeconds) * 100] / 100) * 180 - 90;
    if (degrees > 90) {
      return 90;
    } else if (currentTime == 0) {
      return -90;
    } else {
      return degrees;
    }
  };

  setTimeout(() => {
    setAngle(timeToDegrees);
    // console.log(angle, sunset);
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
