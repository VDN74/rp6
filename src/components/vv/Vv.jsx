import React, { useState } from "react";
import "./vv.css";

const Vv = ({ cellNumber, location, isActive, handleToggle }) => {
  return (
    <div className={`vv ${isActive ? "vv_active" : ""}`}>
      <div
        className={`rr-vv ${isActive ? "rr-vv_active" : ""}`}
        onClick={() =>
          handleToggle({ cellNumber, location, status: !isActive })
        }
      ></div>
    </div>
  );
};

export default Vv;
