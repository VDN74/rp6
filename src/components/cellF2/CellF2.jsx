import React, { useState } from "react";
import "./cellF2.css";
import CellText from "../cellText/CellText";

const CellF2 = ({ number, name, inf1 = "", inf2 = "", devicesStatus, handleToggleDevice }) => {
  const {r1, r2, zn1, zn2, zn3, vv} = devicesStatus;

  return (
    <div className="cell-f2">
      <div className="cell-f2__start">
        <CellText>{number}</CellText>
      </div>
      <div className="cell-f2__horiz-line0"></div>
      <div className="cell-f2__horiz-line1"></div>
      <div className="cell-f2__horiz-line2">
        
        <div className="cell-f2__vert-line2"></div>
        <div className="cell-f2__vert-line3"></div>
      </div>
      <div className="cell-f2__horiz-line-end"></div>
      <div className="cell-f2__end">
        <CellText>{name}</CellText>
        <CellText>{inf1}</CellText>
        <CellText>{inf2}</CellText>
      </div>
    </div>
  );
};

export default CellF2;
