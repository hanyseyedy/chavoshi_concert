import React from "react";
import Carrousel from "./Carrousel";

function Featured() {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">محسن چاوشی</div>
      </div>
    </div>
  );
}

export default Featured;
