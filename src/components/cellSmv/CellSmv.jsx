import React from "react";
import "./cellSmv.css";
import Rr from "../rr/Rr";
import Zn from "../zn/Zn";
import Vv from "../vv/Vv";
import CellText from "../cellText/CellText";
import Zus from "../zus/Zus";
import Rr44 from "../rr44/Rr44";

// {location, isActive, handleToggle}

const CellSmv = ({
  number,
  name,
  inf1 = "",
  inf2 = "",
  devicesStatus,
  handleToggleDevice,
}) => {
  const { r1, r2, zn1, zn2, zn3, vv } = devicesStatus;

  return (
    <div className="cell-smv">
      <div className="cell-smv__start">
        <CellText>{number}</CellText>
      </div>
      <div className="cell-smv__horiz-line0"></div>
      <div className="cell-smv__horiz-line1">
        <div className="cell-smv__vertical-line1">
          <div className="cell-smv__vert-line-r-1">
            <Rr44
              cellNumber={number}
              location={"r1"}
              isActive={r1}
              handleToggle={handleToggleDevice}
            ></Rr44>
          </div>
          <div className="cell-smv__vertical-line-zn-1">
            <div className="cell-smv__horizontal-line-zn"></div>
            <div className="cell-smv__vertical-line2">
              <div className="cell-smv__vertical-line2-zn1">
                <Rr44
                  cellNumber={number}
                  location={"zn1"}
                  isActive={zn1}
                  handleToggle={handleToggleDevice}
                ></Rr44>
              </div>
              <div className="cell-smv__zus">
                <Zus></Zus>
              </div>
            </div>
          </div>
          <div className="cell__vertical-line-vv">
            <Vv
              cellNumber={number}
              location={"vv"}
              isActive={vv}
              handleToggle={handleToggleDevice}
            ></Vv>
          </div>
          <div className="cell-smv__horizontal-line3"></div>
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

export default CellSmv;
