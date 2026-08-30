import { useState } from "react";
import "./rr.css";

const Rr = ({ cellNumber, location, isActive, handleToggle }) => {
  return (
    <div
      className={`rr ${isActive ? "rr_active" : ""}`}
      onClick={() => handleToggle({ cellNumber, location, status: !isActive })}
    ></div>
  );
};

export default Rr;
