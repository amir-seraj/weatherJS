import React from "react";

function DegConverter({ degFlag, setDegFlag, CDeg, setFDeg }) {
  let FDeg = (CDeg * 9.0) / 5.0 + 32.0;

  return (
    <button
      className="degree"
      onClick={() => {
        setDegFlag(!degFlag);
        setFDeg(FDeg);
      }}
    >
      {degFlag === true ? <span>&#8451;</span> : <span>&#8457;</span>}
    </button>
  );
}

export default DegConverter;
