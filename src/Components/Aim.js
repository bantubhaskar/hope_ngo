import React from "react";
import { CardMenu1 } from "./Aimcard";
import "./Aim.css";

function Aim() {
  return (
    <div className="card-section">
      <div className="card-data container">
        <h1 className="card-title"> Our<span className="col-word"> Focus</span></h1>
        <div className="card-cont container">
          {CardMenu1.map((currentCard) => { // Corrected reference to CardMenu1
            return (
              <div key={currentCard.title} className={`card-items ${currentCard.cName}`}>
                <div className="card-img">
                  <img src={currentCard.cardImg} alt={currentCard.title}></img>
                </div>
                <div className="card-heading">
                  <h1>{currentCard.title}</h1>
                </div>
                <div className="card-detail">
                  <p>{currentCard.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Aim;
