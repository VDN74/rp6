import React, { useState } from "react";
import "./cellF.css";
import CellText from "../cellText/CellText";

const CellF = ({ number, name, inf1 = "", inf2 = "", devicesStatus, handleToggleDevice }) => {
  const {r1, r2, zn1, zn2, zn3, vv} = devicesStatus;

  return (
    <div className="cell-f">
      <div className="cell-f__start">
        <CellText>{number}</CellText>
      </div>
      <div className="cell-f__horiz-line0"></div>
      <div className="cell-f__horiz-line1"></div>
      <div className="cell-f__horiz-line2">
        <div className="cell-f__vert-line1"></div>
        <div className="cell-f__vert-line2"></div>
        
      </div>
      <div className="cell-f__horiz-line-end"></div>
      <div className="cell-f__end">
        <CellText>{name}</CellText>
        <CellText>{inf1}</CellText>
        <CellText>{inf2}</CellText>
      </div>
    </div>
  );
};

export default CellF;
