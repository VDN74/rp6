import React, { useState } from "react";
import "./cell.css";
import Rr from "../rr/Rr";
import Zn from "../zn/Zn";
import Vv from "../vv/Vv";
import CellText from "../cellText/CellText";
import Zus from "../zus/Zus";
import Rr44 from "../rr44/Rr44";


const Cell = ({ number, name, inf1="", inf2="", devicesStatus, handleToggleDevice }) => {
  const {r1, r2, zn1, zn2, zn3, vv} = devicesStatus;

  return (
    <div className="cell">
      <div className="cell__start">
        <CellText>{number}</CellText>
      </div>
      <div className="cell__horiz-line0"></div>
      <div className="cell__horiz-line1"></div>
      <div className="cell__vertical-line1">
        <div className="cell__vert-line-r-1">
          <Rr44 cellNumber={number} location={"r1"} isActive={r1} handleToggle={handleToggleDevice}></Rr44>
        </div>
        <div className="cell__vertical-line-zn-1">
          <div className="cell__horizontal-line-zn"></div>
          <div className="cell__vertical-line2">
            <div className="cell__vertical-line2-zn1">
              <Rr44 cellNumber={number} location={"zn1"} isActive={zn1} handleToggle={handleToggleDevice}></Rr44>
            </div>
            <div className="cell__zus">
              <Zus></Zus>
            </div>
          </div>
        </div>
        <div className="cell__vertical-line-vv">
          <Vv cellNumber={number} location={"vv"} isActive={vv} handleToggle={handleToggleDevice}></Vv>
        </div>
        <div className="cell__vertical-line-r-2">
          <Rr44 cellNumber={number} location={"r2"} isActive={r2} handleToggle={handleToggleDevice}></Rr44>
        </div>
        <div className="cell__vertical-line-zn-2">
          <div className="cell__horizontal-line-zn"></div>
          <div className="cell__vertical-line2">
            <div className="cell__vertical-line2-zn2">
              <Rr44 cellNumber={number} location={"zn2"} isActive={zn2} handleToggle={handleToggleDevice}></Rr44>
            </div>
            <div className="cell__zus">
              <Zus></Zus>
            </div>
          </div>
        </div>
      </div>
      <div className="cell__horiz-line-end"></div>
      <div className="cell__end">
        <CellText>{name}</CellText>
        <CellText>{inf1}</CellText>
        <CellText>{inf2}</CellText>
      </div>
    </div>
  );
};

export default Cell;
