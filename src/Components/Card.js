import React from "react";
import { CardMenu } from "./CardMenu";
import "./Card.css"


//`${"card-items"} ${currentCard.cName}`
function Card() {
    return (
        <div className="card-section">
            <div className="card-data container">
                <h1 className="card-title"> Our<span className="col-word"> Focus</span></h1>
                <div className="card-cont container">
                    {CardMenu.map((currentCard) => {
                        return (
                            <div className={["card-items", currentCard.cName].join(' ')}>
                                <div className="card-img">
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
        </div>
    )

}

export default Card