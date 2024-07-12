import "./App.css";
import { useState } from "react";
import search_icon from "./assets/search.png";
import rain_icon from "./assets/rain.png";
import clear_icon from "./assets/clear.png";
import cloud_icon from "./assets/cloud.png";
import drizzle_icon from "./assets/drizzle.png";
import snow_icon from "./assets/snow.png";
import wind_icon from "./assets/wind.png";
import humidity_icon from "./assets/humidity.png";

function App() {
  const [location, setLocation] = useState();

  const API_KEY = "Use Your Own Api Key";
  const BASE_URL =
    "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";


  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" value={location} id="" placeholder="Search" />
        <img src={search_icon} alt="search" />
      </div>
      <div className="align">
        <img src={clear_icon} alt="clear" className="weather-icon" />
        <div className="content">
          <p className="temperature">16˚C</p>
          <p className="location">London</p>
        </div>
      </div>

      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="humidity" />
          <div>
            <p>91 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="wind" />
          <div>
            <p>3.6Km/hr</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
