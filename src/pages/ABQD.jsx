import React from "react";
import "../styles/ABQD.scss";

const ABQD = () => {
  const get = () => {
    alert("Unfortuantly, This has not been relesed yet. SORRY!!");
  };

  return (
    <div className="ABQD">
      <h1 className="QDTXT">QUICK DRAW</h1>
      <button className="QDBTN" onClick={get}>
        GET IT NOW
      </button>
    </div>
  );
};

export default ABQD;
