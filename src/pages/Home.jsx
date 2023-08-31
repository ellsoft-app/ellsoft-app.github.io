import React from "react";
import "../styles/box.scss";
import GameBox from "../Components/GameBox";

const Home = () => {
  return (
    <div className="boxContainer">
      <div class="box">
        <div>
          <div className="gpp">
            <h1>ELL SOFT</h1>
            <div className="gp">
              <h2>Our Games</h2>
              <div>
                <div className="grid">
                  <GameBox linkTo={"QuickDraw"}>
                    <h3>Quick Draw</h3>
                    <p>A vr game about speed and accuracy of shooting</p>
                  </GameBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
