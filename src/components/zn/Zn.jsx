import { useState } from "react";
import "./zn.css";

const Zn = ({ cellNumber, location, isActive, handleToggle }) => {
  return (
    <div
      className={`zn ${isActive ? "zn_active" : ""}`}
      onClick={() => handleToggle({ cellNumber, location, status: !isActive })}
    ></div>
  );
};

export default Zn;
