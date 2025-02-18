// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const apiLink =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kerala?unitGroup=us&key=VCLHNDNGS2Y2HDLJA2VYWUMUC&contentType=json";
  const fetchApi = async () => {
    const response = await fetch(apiLink);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  };
  fetchApi();
  return <div className="container"></div>;
}

export default App;
