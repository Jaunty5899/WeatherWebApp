import "./ForecastTable.css";

export default function ForecastTable({ daily }) {
  console.log(daily);
  return (
    <div className="table">
      <h5>HOURLY FORECAST</h5>
      <div className="weatherContainer"></div>
    </div>
  );
}
