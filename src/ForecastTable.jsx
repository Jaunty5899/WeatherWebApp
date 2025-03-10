import "./ForecastTable.css";
import { v4 as uuidv4 } from "uuid";

export default function ForecastTable({ daily, currentHour, convertFunction }) {
  return (
    <div className="table">
      <h3>HOURLY FORECAST</h3>
      <div className="containerLimiter">
        <div className="weatherContainer">
          {daily.map((e) => {
            const val = parseInt(e.datetime.split(":", 1));
            return (
              <div className="hourData" key={uuidv4()}>
                {currentHour == val && (
                  <div className="now" id="now">
                    <a href="#now">Now</a>
                  </div>
                )}
                <div className="hour">
                  {val == 0
                    ? 12 + " pm"
                    : val <= 12
                    ? val + " am"
                    : val - 12 + " pm"}
                </div>
                <div className="temp">
                  {convertFunction(e.temp)}
                  <span className="degreeSymbolForecast">º</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
