import { useEffect, useState } from "react";
import { FaWind } from "react-icons/fa";
import { BsMoisture } from "react-icons/bs";
import "./Weather.css";

function Weather(props) {
  const [data, setData] = useState({});
  const APIKey = "API KEY";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${APIKey}&units=metric`,
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="content">
        <p className="Mtemp">
          <span>{props.data?.main?.temp}</span>°C
        </p>
        <p className="CityName">{props.data?.name}</p>
        <span>{props.data.weather && data.weather[0].description}</span>
        <div className="max_minTemp">
          <p className="temp">
            Min <br /> Temp <br />
            {props.data?.main?.temp_min}°C
          </p>
          <p className="temp">
            Max <br /> Temp <br />
            {props.data?.main?.temp_max}°C
          </p>
        </div>
        <div className="WindHumidity">
          <p className="Wind">
            <FaWind size={40} />
            <br />
            Wind: <br />
            {props.data?.wind?.speed}m/s
          </p>
          <p className="Humidity">
            <BsMoisture size={40} />
            <br />
            humidity: <br />
            {props.data?.main?.humidity}%
          </p>
        </div>
      </div>
    </>
  );
}

export default Weather;
