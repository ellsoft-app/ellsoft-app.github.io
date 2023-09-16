import React from "react";
import "../styles/ABQD.scss";
import { Link } from "react-router-dom";

const ABQD = () => {
  const get = () => {
    window.location.href = "/#/QuickDraw/get";
  };

  return (
    <div className="ABQD">
      <h1 className="QDTXT">QUICK DRAW</h1>
      <button className="QDBTN" onClick={get}>
        GET IT NOW
      </button>

      <div className="PPANDTC">
        <Link to={"PP"}>Privacy Policy</Link> ||{" "}
        <Link to={"TC"}>Terms of Service</Link>
      </div>
    </div>
  );
};

export default ABQD;
