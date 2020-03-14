import React from "react";

const Weather = props => {
  return (
    <div className="weather__info">
      {props.sea_level && (
        <p className="weather__key">
          Sea Level:
          <span className="weather__value"> {props.sea_level} m</span>
        </p>
      )}
      {props.temperature && (
        <p className="weather__key">
          Temperature:
          <span className="weather__value"> {props.temperature} °C</span>
        </p>
      )}
      <div className = "temperature">
        {props.temp_min && (
          <p className="weather__key_sub">
            Minimum Temperature:
            <span className="weather__value_sub"> {props.temp_min} °C</span>
          </p>
        )}
        {props.temp_max && (
          <p className="weather__key_sub">
            Maximum Temperature:
            <span className="weather__value_sub"> {props.temp_max} °C</span>
          </p>
        )}
      </div>
      {props.humidity && (
        <p className="weather__key">
          Humidity:
          <span className="weather__value"> {props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          Conditions:
          <span className="weather__value"> {props.description}</span>
        </p>
      )}
      {props.error && <p className="weather__error">{props.error}</p>}
    </div>
  );
};

export default Weather;
