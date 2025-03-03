import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./Loader";
import ForecastTable from "./ForecastTable";
import ForecastChart from "./ForecastChart";

const fetchApi = async () => {
  const apiLink =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=us&key=VCLHNDNGS2Y2HDLJA2VYWUMUC&contentType=json";
  const response = await fetch(apiLink);
  const jsonResponse = await response.json();
  return jsonResponse;
};

const convertTempToCelsius = (temp) => {
  return (((temp - 32) * 5) / 9).toFixed(0);
};

function App() {
  const [place, setPlace] = useState();
  const [convertedTemperature, setConvertedTemperature] = useState(0);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const receivedResponse = await fetchApi();
      setData(receivedResponse);
      console.log(receivedResponse);
      setConvertedTemperature(
        convertTempToCelsius(receivedResponse.currentConditions.temp)
      );
    };
    fetchData();
  }, []);

  if (!data) {
    return <Loader />;
  }
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter the city name"
        value={place}
        className="search"
        onChange={(e) => setPlace(e.target.value)}
      />
      <div className="dialContainer">
        <h4 className="address">{data.address}</h4>
        <h1 className="currentTemperature">
          {convertedTemperature}
          <span className="degreeSymbol">º</span>
        </h1>
        <h4 className="currentConditions">
          {data.currentConditions.conditions}
        </h4>
        <span className="siders">
          <span className="precipitation">{}</span>
          <span className="windspeed">{}</span>
        </span>
        <span className="highAndLow">
          <span className="temp" id="min">
            {"↓ " + convertTempToCelsius(data.days[0].tempmin) + "ºC"}
          </span>
          <span className="temp" id="max">
            {"↑ " + convertTempToCelsius(data.days[0].tempmax) + "ºC"}
          </span>
        </span>
      </div>
      <ForecastTable
        daily={data.days[0].hours}
        convertFunction={convertTempToCelsius}
      />
      <ForecastChart daily={data.days} convertFunction={convertTempToCelsius} />
    </div>
  );
}

export default App;
