import "./Details.css";

export default function Details({
  precipitation,
  windSpeed,
  humidity,
  visibility,
  uvIndex,
  pressure,
}) {
  return (
    <div className="table details">
      <h3>Details</h3>
      <div className="detailsContainer">
        <div className="subDetailsContainer">
          <span className="detailsItem precipitation">
            <span className="title">Precipitation</span>
            <span className="content">{`${
              precipitation == null ? "0.0" : precipitation
            } mm`}</span>
          </span>
          <span className="detailsItem windSpeed">
            <span className="title">Windspeed</span>
            <span className="content">{`${windSpeed} Km/h`}</span>
          </span>
          <span className="detailsItem humidity">
            <span className="title">Humidity</span>
            <span className="content">{`${humidity}%`}</span>
          </span>
        </div>
        <div className="subDetailsContainer">
          <span className="detailsItem visibility">
            <span className="title">Visibility</span>
            <span className="content">{`${visibility} Km`}</span>
          </span>
          <span className="detailsItem uvIndex">
            <span className="title">UV</span>
            <span className="content">
              {(uvIndex <= 2 && "Low") ||
                (uvIndex <= 5 && "Moderate") ||
                (uvIndex <= 7 && "High") ||
                (uvIndex <= 10 && "Very High") ||
                (uvIndex > 10 && "Extreme")}
            </span>
          </span>
          <span className="detailsItem pressure">
            <span className="title">Pressure</span>
            <span className="content">{`${pressure} hPa`}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
