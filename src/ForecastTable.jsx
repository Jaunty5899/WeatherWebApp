import "./ForecastTable.css";

export default function ForecastTable({ daily }) {
  console.log(daily);
  return (
    <div className="table">
      <h5>HOURLY FORECAST</h5>
      <div className="weatherContainer">
        {daily.map((e) => (
          <div className="hourData">
            <div>{parseInt(e.datetime.split(":", 1))}</div>
            <div>{e.temp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
