import "./ForecastChart.css";
import { LineChart } from "@mui/x-charts/LineChart";

export default function ForecastChart({ daily, convertFunction }) {
  const dailyTempsLow = daily.map((day) => convertFunction(day.tempmin));
  const dailyTempsHigh = daily.map((day) => convertFunction(day.tempmax));
  const dailyLabels = daily.map((day) => day.datetime);
  const MonthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
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
              valueFormatter: (value) =>
                value.split("-")[2] +
                " " +
                MonthLabels[parseInt(value.split("-")[1]) - 1],
            },
          ]}
          series={[
            {
              curve: "linear",
              data: dailyTempsHigh,
              color: "red",
              label: "High",
              valueFormatter: (value) => `${value}°C`,
            },
            {
              curve: "linear",
              data: dailyTempsLow,
              color: "blue",
              label: "Low",
              valueFormatter: (value) => `${value}°C`,
            },
          ]}
          slotProps={{ legend: { hidden: true } }}
          width={1140}
          height={170}
          margin={{ left: 25, top: 15, right: 25, bottom: 30 }}
        />
      </div>
    </div>
  );
}
