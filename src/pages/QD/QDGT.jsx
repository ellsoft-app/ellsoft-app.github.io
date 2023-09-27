import React, { useEffect } from "react";
import ABQD from "./ABQD";

const QDGT = () => {
  const URL = "https://www.oculus.com/experiences/quest/7492629460764141/";

  useEffect(() => {
    window.location.href = URL;
  }, []);

  return <ABQD />;
};

export default QDGT;
