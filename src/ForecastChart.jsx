import "./ForecastChart.css";
import { LineChart } from "@mui/x-charts/LineChart";

export default function ForecastChart({ daily, convertFunction }) {
  const dailyTemps = daily.map((day) => convertFunction(day.temp));
  const dailyLabels = daily.map((day) => day.datetime);
  console.log(daily);

  return (
    <div className="table">
      <h3 className="dailyForecast">DAILY FORECAST</h3>
      <div className="chart">
        <LineChart
          dataset={daily}
          xAxis={[
            {
              id: "barCategories",
              data: dailyLabels,
              scaleType: "point",
            },
          ]}
          series={[{ curve: "linear", data: dailyTemps }]}
          width={1140}
          height={180}
          margin={{ left: 30, top: 20, right: 40 }}
          colors={["black"]}
        />
      </div>
    </div>
  );
}
