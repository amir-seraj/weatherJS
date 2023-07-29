import React from "react";
import DegConverter from "./DegConverter";
import { FaSearchLocation } from "react-icons/fa";

function Search({ setName, handleClick, degFlag, data, setDegFlag, setFDeg }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter City Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div className="buttons">
        <button onClick={() => handleClick()}>
          <FaSearchLocation size="1.5rem" />
        </button>

        <DegConverter
          degFlag={degFlag}
          setDegFlag={setDegFlag}
          CDeg={data.celsius}
          setFDeg={setFDeg}
        />
      </div>
    </div>
  );
}

export default Search;
