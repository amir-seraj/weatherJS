import React from "react";
import { WiHumidity } from "react-icons/wi";
import { RiWindyFill } from "react-icons/ri";

function WInfo({ data, degFlag, FDeg }) {
  return (
    <div className="winfo">
      <>{data.image}</>

      {degFlag === true ? (
        <h1>
          {Math.round(FDeg)}
          <span>&#8457;</span>
        </h1>
      ) : (
        <h1>
          {Math.round(data.celsius)}
          <span>&#8451;</span>
        </h1>
      )}

      <h2>{data.name}</h2>
      <div className="details">
        <div className="col">
          <WiHumidity size="2.5rem" />
          <div className="humidity">
            <p>{Math.round(data.humidity)}%</p> <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <RiWindyFill size="2rem" />
          <div className="wind">
            <p>{data.speed} km/h</p> <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WInfo;
