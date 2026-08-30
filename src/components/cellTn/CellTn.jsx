import React, { useState } from "react";
import "./cellTn.css";
import Rr from "../rr/Rr";
import Zus from "../zus/Zus";
import CellText from "../cellText/CellText";
import Zn from "../zn/Zn";
import Rr44 from "../rr44/Rr44";

const CellTn = ({ number, name, inf1="", inf2="", devicesStatus, handleToggleDevice }) => {
  const {r1, r2, zn1, zn2, zn3, vv} = devicesStatus;


  return (
    <div className="cell-tn">
      <div className="cell-tn__start">
        <CellText>{number}</CellText>
      </div>
      <div className="cell-tn__horiz-line0"></div>
      <div className="cell-tn__horiz-line1"></div>
      <div className="cell-tn__horiz-line12">
        <div className="cell-tn__vert-line12"></div>

      </div>
      <div className="cell-tn__vertical-line2">
        <div className="cell-tn__vertical-line-r-2">
          <Rr44 cellNumber={number} location={"r2"} isActive={r2} handleToggle={handleToggleDevice}></Rr44>
        </div>
        <div className="cell-tn__vertical-line-zn-2">
          <div className="cell-tn__horizontal-line-zn"></div>
          <div className="cell-tn__vertical-line-zn">
            <div className="cell-tn__vertical-line-zn-square">
              <Rr44 cellNumber={number} location={"zn2"} isActive={zn2} handleToggle={handleToggleDevice}></Rr44>
            </div>
            <div className="cell-tn__zus">
              <Zus></Zus>
            </div>
          </div>
        </div>

        <div className="cell-tn__vertical-line-zn-3">
          <div className="cell-tn__horizontal-line-zn"></div>
          <div className="cell-tn__vertical-line-zn">
            <div className="cell-tn__vertical-line-zn-square">
              <Rr44 cellNumber={number} location={"zn3"} isActive={zn3} handleToggle={handleToggleDevice}></Rr44>
            </div>
            <div className="cell-tn__zus">
              <Zus></Zus>
            </div>
          </div>
        </div>


      </div>
      <div className="cell-tn__vertical-line1">
        <div className="cell-tn__vert-line-r-1">
          <Rr44 cellNumber={number} location={"r1"} isActive={r1} handleToggle={handleToggleDevice}></Rr44>
        </div>
        <div className="cell-tn__vertical-line-zn-1">
          <div className="cell-tn__horizontal-line-zn1"></div>
          <div className="cell-tn__vertical-line-zn1">
            <div className="cell-tn__vertical-line-zn-square">
              <Rr44 cellNumber={number} location={"zn1"} isActive={zn1} handleToggle={handleToggleDevice}></Rr44>
            </div>
            <div className="cell-tn__zus">
              <Zus></Zus>
            </div>
          </div>
        </div>
        <div className="cell-tn__zus-1"></div>
        <div className="cell-tn__circle1"></div>
        <div className="cell-tn__circle2"></div>
        <div className="cell-tn__circle3"></div>
      </div>
      <div className="cell-tn__dashed-line1"></div>
      <div className="cell-tn__horiz-line-end"></div>
      <div className="cell-tn__end">
        <CellText>{name}</CellText>
        <CellText>{inf1}</CellText>
        <CellText>{inf2}</CellText>
      </div>
    </div>
  );
};

export default CellTn;
