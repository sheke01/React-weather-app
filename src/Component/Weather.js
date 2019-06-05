import React from "react";

export default function Weather(props) {
  const { temperature, city, country, humidity, description, error } = props;

  return (
    <div className="list">
      {city && country && (
        <ul>
          <li className="item">
            Location:{" "}
            <span className="value">
              {city}, {country}
            </span>
          </li>
          <br />
          <li className="item">
            Temperature: <span className="value">{temperature}</span>
          </li>
          <br />
          <li className="item">
            Humidity: <span className="value">{humidity}</span>
          </li>
          <br />
          <li className="item">
            Description: <span className="value">{description}</span>
          </li>
        </ul>
      )}
      <p className="error">{error}</p>
    </div>
  );
}
