import React from "react";
import { CardMenu2 } from "./CardMenu";
import "./SecondCard.css"

function SecondHandCard(){
    return(
        <div id="donation" className="second-card-section">
        
            <h1 className="card-title">What you can <span className="col-word">donate</span></h1>
        
        <div className="card">
            {CardMenu2.map((currentCard) =>{
                return(
                <div  key={currentCard.id} className="card-items">
                    <div  className="card-img">
                        <img src={currentCard.cardImg}></img>
                    </div>
                    <div className="card-heading">
                        <h1>{currentCard.title}</h1>
                    </div>
                    <div className="card-detail">
                        <p>{currentCard.detail}</p>
                    </div>
                </div>
                )
            })
            }</div>
        </div>
    )
}

export default SecondHandCard