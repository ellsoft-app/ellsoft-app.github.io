import React from "react";
import "../styles/gamebox.css";
import { Link } from "react-router-dom";

const GameBox = ({ children, linkTo }) => {
  return (
    <Link className="gb" to={linkTo}>
      {children}
    </Link>
  );
};

export default GameBox;
