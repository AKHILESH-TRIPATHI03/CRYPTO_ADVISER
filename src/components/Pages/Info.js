import React from "react";
import "./Info.css";

const Info = ({ name, description, date, content }) => {
  return (
    <div className="maintomain">
      <div className="container">
        <div className="column">
          <div className="name">
            <h1>{name}</h1>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
          <div>
            <p>{content}</p>
          </div>
          <div className="date">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
