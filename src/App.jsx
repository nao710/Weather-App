import React, { useState } from "react";
import "./Weather.css";

import Weather from "./Weather";
const App = () => {
  const [country, setCountry] = useState("");
  const [data, setData] = useState({
    name: "-",
    main: {
      humidity: "0",
      temp: "0",
      temp_min: "0.0",
      temp_max: "0.0",
    },
    wind: { speed: "0.0" },
  });

  const APIKey = "API KEY";

  const handleClick = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${APIKey}&units=metric`,
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="glass">
        <div className="input">
          <input
            type="text"
            value={country}
            autoComplete="off"
            placeholder="Enter to City Name"
            onChange={(e) => setCountry(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleClick();
              }
            }}
          />
        </div>
        <Weather data={data} />
      </div>
    </>
  );
};

export default App;
