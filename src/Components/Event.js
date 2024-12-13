import React, { useState, useEffect } from "react";
import { EventMenu, EventMenu2 } from "./Eventmenu";
import "./Event.css";

const Card = () => {
  const allEvents = [...EventMenu, ...EventMenu2];
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) =>
        prevIndex === allEvents.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change card every 2 seconds

    return () => clearInterval(interval);
  }, [currentEventIndex, allEvents.length]);

  return (
    <div className="card-section">
      <div className="card-data container">
        <h1 className="card-title">
          Our<span className="col-word"> Events</span>
        </h1>
        <div className="card-cont">
          {allEvents.map((event, index) => (
            <div
              key={event.id}
              className={`card-items ${event.cName} ${
                index === currentEventIndex ? "visible" : ""
              }`}
            >
              <div className="card-img">
                <img src={event.cardImg} alt={event.title} />
              </div>
              <div className="info">

              <div className="card-heading">
                <h1>{event.title}</h1>
              </div>

              <div className="card-detail">
                <p>{event.detail}</p>
              </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
