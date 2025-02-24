import "./ForecastChart.css";
import { LineChart } from "@mui/x-charts/LineChart";

export default function ForecastChart({ daily }) {
  const dailyTemps = daily.map((day) => day.temp);
  const dailyLabels = daily.map((day) => day.datetime);
  console.log(dailyTemps, dailyLabels);

  return (
    <div className="table">
      <h3 className="dailyForecast">DAILY FORECAST</h3>
      <div className="chart">
        <LineChart
          xAxis={[
            { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
          ]}
          series={[{ curve: "linear", data: dailyTemps }]}
          width={1140}
          height={180}
          margin={{ left: 30, top: 20 }}
          colors={["black"]}
        />
      </div>
    </div>
  );
}
