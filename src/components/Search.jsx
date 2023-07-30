import React, { useEffect, useRef, useState } from "react";
import DegConverter from "./DegConverter";
import { FaSearchLocation } from "react-icons/fa";

function Search({ setName, handleClick, degFlag, data, setDegFlag, setFDeg }) {
  const nameRef = useRef(null);
  const [temp, setTemp] = useState("");
  useEffect(() => {
    setName(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temp]);
  const handleSubmit = (e) => {
    setTemp(nameRef.current.value);
    setName(temp);
    handleClick();
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="search">
        <input
          type="text"
          placeholder="Enter City Name"
          // onChange={(e) => setTemp(e.target.value)}
          ref={nameRef}
          id="name"
        />
        <div className="buttons">
          <button type="submit">
            <FaSearchLocation size="1.5rem" />
          </button>
        </div>
        <DegConverter
          degFlag={degFlag}
          setDegFlag={setDegFlag}
          CDeg={data.celsius}
          setFDeg={setFDeg}
        />
      </div>
    </form>
  );
}

export default Search;
