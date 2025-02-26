import "./ForecastTable.css";

export default function ForecastTable({ daily, convertFunction }) {
  return (
    <div className="table">
      <h3>HOURLY FORECAST</h3>
      <div className="containerLimiter">
        <div className="weatherContainer">
          {daily.map((e) => {
            const val = parseInt(e.datetime.split(":", 1));
            return (
              <div className="hourData">
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
