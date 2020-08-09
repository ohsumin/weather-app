import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Weather.css";

function Weather({ id, info, weather, name }) {
  const imgSrc = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
  return (
    <Link
      to={{
        pathname: `/weather/${id}`,
        state: {
          info,
          weather,
          name,
        },
      }}
    >
      <div className="weather">
        <div className="weather_data_l">
          <h3>{name}</h3>
          <img src={imgSrc} alt={name}></img>
        </div>
        <div className="weather_data_r">{info.temp}℃</div>
      </div>
    </Link>
  );
}

Weather.propTypes = {
  id: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
  weather: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Weather;
