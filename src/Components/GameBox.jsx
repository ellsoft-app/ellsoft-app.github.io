import React from "react";
import "../styles/gamebox.css";

const GameBox = ({ children }) => {
  return <div className="gb">{children}</div>;
};

export default GameBox;
