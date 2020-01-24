import React from "react";

const Race = ({raceInfo}) => {
  const raceInfoStyle = {
    border: "1px solid red",
    padding: "5px",
    margin: "5px"
  };
  
  return (
    <div style={raceInfoStyle}>
      <div>{raceInfo.raceName}</div>
      <div>{raceInfo.date}</div>
    </div>
  );
}

export default Race;