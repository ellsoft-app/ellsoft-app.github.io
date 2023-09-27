import React, { useEffect, useState } from "react";
import GameBox from "../Components/GameBox";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function openNav() {
    document.getElementById("menu").style.display = "flex";
    document.getElementById("main").style.marginTop = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  function closeNav() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("main").style.marginTop = "0";
    document.body.style.backgroundColor = "white";
  }

  useEffect(() => {
    if (menuOpen) openNav();
    else closeNav();
  }, [openNav]);

  const TOTHEVOID = () => {
    window.location = "https://void.ellsoft.app";
  };

  return (
    <div>
      <h1
        className="centerofattention"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        ELLSOFT
      </h1>

      <div id="menu">
        <div onClick={TOTHEVOID}>The Void Awaits</div>
      </div>

      <div id="main">
        <div className="games">
          <div></div>
          <GameBox linkTo={"QuickDraw"}>
            <h1>Quick Draw</h1>
            <p>Test your reactions. How quickly can you shoot the targets?</p>
          </GameBox>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
