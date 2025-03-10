import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./Loader";
import ForecastTable from "./ForecastTable";
import ForecastChart from "./ForecastChart";
import SunPhase from "./SunPhase";

const fetchApi = async (place) => {
  const apiLink = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=us&key=VCLHNDNGS2Y2HDLJA2VYWUMUC&contentType=json`;
  const response = await fetch(apiLink);
  const jsonResponse = await response.json();
  return jsonResponse;
};

const convertTempToCelsius = (temp) => {
  return (((temp - 32) * 5) / 9).toFixed(0);
};

function App() {
  const [place, setPlace] = useState("");
  const [convertedTemperature, setConvertedTemperature] = useState(0);
  const [data, setData] = useState();

  const fetchData = async (place = "new delhi") => {
    const receivedResponse = await fetchApi(place);
    setData(receivedResponse);
    console.log(receivedResponse);
    setConvertedTemperature(
      convertTempToCelsius(receivedResponse.currentConditions.temp)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter the city name"
        value={place}
        className="search"
        onChange={(e) => setPlace(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchData(place);
          }
        }}
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
        currentHour={parseInt(data.currentConditions.datetime.split(":", 1))}
      />
      <ForecastChart daily={data.days} convertFunction={convertTempToCelsius} />
      <SunPhase
        sunrise={data.currentConditions.sunrise}
        sunset={data.currentConditions.sunset}
        datetime={data.currentConditions.datetime}
      />
    </div>
  );
}

export default App;
