import React, { useState } from "react";
import "./vv.css";

const Vv = ({ cellNumber, location, isActive, handleToggle }) => {
  return (
    <div
      className={`vv ${isActive ? "vv_active" : ""}`}
      onClick={(e) => {
        e.stopPropagation()
        handleToggle({ cellNumber, location, status: !isActive })
      }}
    ></div>
  );
};

export default Vv;
