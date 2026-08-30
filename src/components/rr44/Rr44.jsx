import React from "react";
import "./rr44.css";

const Rr44 = ({ cellNumber, location, isActive, handleToggle }) => {
  return (
    <div
      className="rr44-box"
      onClick={() => handleToggle({ cellNumber, location, status: !isActive })}
    >
      {/* Дверь */}
      <div
        className={`rr44-door${!isActive ? " rr44-door_active" : ""}`}
      ></div>
      {/* Верхняя горизонтальная линия */}
      <div className="rr44-handle rr44-handle_top"></div>
      {/* Нижняя горизонтальная линия */}
      <div className="rr44-handle rr44-handle_bottom"></div>
    </div>
  );
};

export default Rr44;
