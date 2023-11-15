import React from "react";
import GameBox from "../Components/GameBox";

const Home = () => {
  return (
    <div>
      <h1 className="centerofattention">ELLSOFT</h1>

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

      <div className="bt">
        <a href="mailto:ideas@ellsoft.app">Any ideas? Click here</a>
      </div>
    </div>
  );
};

export default Home;
