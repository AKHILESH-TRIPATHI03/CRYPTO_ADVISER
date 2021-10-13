import React from "react";
import "./News.css";

const News = ({ name, description, date }) => {
  return (
    <div className="malik">
      <div className="box">
        <div className="set">
          <div className="title">
            <h1>{name}</h1>
          </div>
          <div className="summary">
            <p>{description}</p>
          </div>
          <div className="date">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default News;
